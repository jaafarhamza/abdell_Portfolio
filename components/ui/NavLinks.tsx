import Link from "next/link";
import { WorksDropdown } from "./WorksDropdown";

export function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link
        href="/#home"
        onClick={onClick}
        className="hover:text-foreground/70 transition-colors"
      >
        Home
      </Link>
      <Link
        href="/#profile"
        onClick={onClick}
        className="hover:text-foreground/70 transition-colors"
      >
        Profile
      </Link>
      <Link
        href="/#before-after"
        onClick={onClick}
        className="hover:text-foreground/70 transition-colors"
      >
        Before & After
      </Link>
      <WorksDropdown />
      <Link
        href="/#our-clients"
        onClick={onClick}
        className="hover:text-foreground/70 transition-colors"
      >
        My Clients
      </Link>
      <Link
        href="/#contact"
        onClick={onClick}
        className="hover:text-foreground/70 transition-colors"
      >
        Contact
      </Link>
    </>
  );
}
