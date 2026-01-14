import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-tight">
      <span className="text-xl md:text-2xl font-bold tracking-wide">
        Abdell
      </span>
      <span className="font-dancing font-semibold text-2xl md:text-4xl self-end -mt-6 -mr-7 text-red-600">
        design
      </span>
    </Link>
  );
}
