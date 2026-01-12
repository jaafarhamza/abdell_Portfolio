import { Logo } from "./ui/Logo";
import { NavLinks } from "./ui/NavLinks";
import { MobileMenu } from "./ui/MobileMenu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative">
        <Logo />

        {/* Desktop Navigation - Server Component */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Mobile Navigation - Client Component (interactive) */}
        <MobileMenu />
      </div>
    </header>
  );
}
