export function Footer() {
  return (
    <footer id="footer" className="py-8 px-4 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-dancing text-xl mb-2">abdell design</p>
        <p className="text-foreground/50 text-sm">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
