---
inclusion: manual
---

# Next.js Best Practices Guide

This steering file provides comprehensive guidelines for building Next.js applications following official best practices from the [Next.js documentation](https://nextjs.org/docs).

## Project Structure

### Recommended Folder Organization

```
project-root/
├── src/                    # Optional: application source folder
│   └── app/                # App Router (file-system based routing)
│       ├── layout.tsx      # Root layout (required)
│       ├── page.tsx        # Home page
│       ├── loading.tsx     # Loading UI
│       ├── error.tsx       # Error boundary
│       ├── not-found.tsx   # 404 page
│       ├── (routes)/       # Route groups (organizational)
│       │   └── dashboard/
│       │       ├── page.tsx
│       │       └── layout.tsx
│       └── api/            # Route handlers
│           └── route.ts
├── components/             # Shared UI components
│   ├── ui/                 # Base UI components
│   └── features/           # Feature-specific components
├── lib/                    # Utility functions, helpers
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

### Key Conventions

- Use `src/` folder to separate application code from config files
- Use route groups `(folderName)` to organize without affecting URLs
- Use private folders `_folderName` for non-routable implementation details
- Colocate related files (components, tests, styles) near their usage

## Server vs Client Components

### Default: Server Components

By default, all components in the App Router are Server Components. Use them when you need:

- Data fetching from databases/APIs
- Access to backend resources
- Keeping sensitive data on server (API keys, tokens)
- Reducing client-side JavaScript bundle

```tsx
// app/posts/page.tsx - Server Component (default)
async function PostsPage() {
  const posts = await db.posts.findMany(); // Direct database access
  return <PostList posts={posts} />;
}
```

### Client Components

Add `"use client"` directive when you need:

- Interactivity (onClick, onChange, etc.)
- React hooks (useState, useEffect, useReducer)
- Browser APIs (localStorage, window, etc.)
- Third-party libraries that use client features

```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Best Practice: Minimize Client Components

- Add `"use client"` to specific interactive components, not entire pages
- Keep layouts and pages as Server Components when possible
- Pass Server Components as children to Client Components

```tsx
// Good: Only the interactive part is a Client Component
<Layout>
  {" "}
  {/* Server Component */}
  <Header /> {/* Server Component */}
  <SearchBar /> {/* Client Component - interactive */}
  <Content /> {/* Server Component */}
</Layout>
```

## Data Fetching

### Server Components (Recommended)

```tsx
// Direct async/await in Server Components
async function Page() {
  const data = await fetch("https://api.example.com/data");
  const posts = await data.json();
  return <PostList posts={posts} />;
}
```

### Parallel Data Fetching

```tsx
async function Page() {
  // Start both requests simultaneously
  const artistPromise = getArtist(id);
  const albumsPromise = getAlbums(id);

  // Wait for both
  const [artist, albums] = await Promise.all([artistPromise, albumsPromise]);

  return (
    <>
      <Artist data={artist} />
      <Albums data={albums} />
    </>
  );
}
```

### Client Components

Use React's `use` hook or libraries like SWR/React Query:

```tsx
"use client";

import { use } from "react";

export function Posts({ postsPromise }) {
  const posts = use(postsPromise); // Stream data from server
  return <ul>{posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>;
}
```

## Caching Strategy

### Request Memoization

- Automatic for `fetch` with GET/HEAD methods
- Same URL + options in single render = one request
- Scoped to request lifetime

### Data Cache

```tsx
// Cache data across requests (default behavior)
fetch("https://api.example.com/data");

// Revalidate every 60 seconds
fetch("https://api.example.com/data", { next: { revalidate: 60 } });

// No caching
fetch("https://api.example.com/data", { cache: "no-store" });
```

### Cache Revalidation

```tsx
// Time-based revalidation
export const revalidate = 60; // Revalidate every 60 seconds

// On-demand revalidation
import { revalidatePath, revalidateTag } from "next/cache";

revalidatePath("/posts"); // Revalidate specific path
revalidateTag("posts"); // Revalidate by tag
```

## Server Actions (Mutations)

### Creating Server Actions

```tsx
// app/actions.ts
"use server";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  await db.posts.create({ data: { title } });
  revalidatePath("/posts");
}
```

### Using in Forms

```tsx
// Server Component
import { createPost } from "./actions";

export function CreatePostForm() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  );
}
```

### With Validation and Error Handling

```tsx
"use server";

export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get("title") as string;

  if (!title || title.length < 3) {
    return { error: "Title must be at least 3 characters" };
  }

  try {
    await db.posts.create({ data: { title } });
    revalidatePath("/posts");
    return { success: true };
  } catch (e) {
    return { error: "Failed to create post" };
  }
}
```

```tsx
"use client";

import { useActionState } from "react";
import { createPost } from "./actions";

export function CreatePostForm() {
  const [state, formAction, pending] = useActionState(createPost, null);

  return (
    <form action={formAction}>
      <input name="title" />
      {state?.error && <p className="error">{state.error}</p>}
      <button disabled={pending}>{pending ? "Creating..." : "Create"}</button>
    </form>
  );
}
```

## Error Handling

### Expected Errors (Validation, etc.)

Return errors as values, don't throw:

```tsx
// Good: Return error state
export async function createUser(formData: FormData) {
  const email = formData.get("email");
  if (!isValidEmail(email)) {
    return { error: "Invalid email address" };
  }
  // ...
}
```

### Uncaught Exceptions (Error Boundaries)

Create `error.tsx` files for error boundaries:

```tsx
// app/dashboard/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### Not Found

```tsx
// app/posts/[id]/page.tsx
import { notFound } from "next/navigation";

async function PostPage({ params }) {
  const post = await getPost(params.id);
  if (!post) notFound();
  return <Post data={post} />;
}
```

## Streaming & Loading States

### Page-level Loading

```tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <DashboardSkeleton />;
}
```

### Component-level Streaming

```tsx
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<ChartSkeleton />}>
        <SlowChart />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <SlowTable />
      </Suspense>
    </div>
  );
}
```

## Routing Patterns

### Dynamic Routes

```
app/blog/[slug]/page.tsx      → /blog/my-post
app/shop/[...slug]/page.tsx   → /shop/a/b/c (catch-all)
app/docs/[[...slug]]/page.tsx → /docs or /docs/a/b (optional catch-all)
```

### Route Groups

```
app/(marketing)/about/page.tsx  → /about
app/(shop)/cart/page.tsx        → /cart
```

### Parallel Routes

```tsx
// app/layout.tsx with @modal slot
export default function Layout({ children, modal }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
```

## Performance Optimization

### Image Optimization

```tsx
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // Load immediately for LCP images
/>;
```

### Font Optimization

```tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

### Metadata

```tsx
// app/layout.tsx
export const metadata = {
  title: "My App",
  description: "Description",
};

// Dynamic metadata
export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  return { title: post.title };
}
```

## Environment Variables

- `NEXT_PUBLIC_*` - Exposed to browser
- Without prefix - Server-only (safe for secrets)

```env
# .env.local
DATABASE_URL=postgresql://...     # Server only
NEXT_PUBLIC_API_URL=https://...   # Available in browser
```

## TypeScript Best Practices

```tsx
// Type page props
type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ query?: string }>;
};

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { query } = await searchParams;
  // ...
}
```

## Security Considerations

### Server-Only Code

```tsx
import "server-only";

export async function getSecretData() {
  // This will error if imported in a Client Component
  return process.env.SECRET_KEY;
}
```

### Input Validation

Always validate user input in Server Actions:

```tsx
"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function register(formData: FormData) {
  const result = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return { error: result.error.flatten() };
  }
  // ...
}
```

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Caching](https://nextjs.org/docs/app/building-your-application/caching)
