import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-tight">
      <span className="text-xl md:text-2xl font-bold tracking-wide">
        abdell
      </span>
      <span className="font-dancing text-2xl md:text-2xl self-end -mt-6 -mr-7 text-blue-600">
        design
      </span>
    </Link>
  );
}
