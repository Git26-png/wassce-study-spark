import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(localStorage.getItem("wph-theme") === "dark"); }, []);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  const toggle = () => { const next = !dark; setDark(next); localStorage.setItem("wph-theme", next ? "dark" : "light"); };
  const nav = [["/", "Home"], ["/tips", "Exam Tips"], ["/about", "About"], ["/privacy", "Privacy"], ["/contact", "Contact"]] as const;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="kente-stripe" />
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between gap-2">
          <Link to="/" className="font-display text-lg font-extrabold">WASSCE<span className="text-primary"> Prep</span> Hub</Link>
          <button onClick={toggle} aria-label="Toggle dark mode" className="h-10 w-10 rounded-full bg-muted text-lg">{dark ? "☀️" : "🌙"}</button>
        </div>
        <nav aria-label="Main navigation" className="mx-auto max-w-3xl px-4 pb-2 flex gap-1 overflow-x-auto text-sm">
          {nav.map(([to, label]) => (
            <Link key={to} to={to} activeOptions={{ exact: true }} className="px-3 py-1.5 rounded-full text-muted-foreground whitespace-nowrap" activeProps={{ className: "bg-primary text-primary-foreground" }}>{label}</Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-6">{children}</main>
      <footer className="border-t py-6">
        <div className="mx-auto max-w-3xl px-4 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} WASSCE Prep Hub. Practice smart, pass strong.</p>
          <nav aria-label="Footer navigation" className="mt-3 flex flex-wrap justify-center gap-4"><Link to="/about" className="underline underline-offset-4">About</Link><Link to="/privacy" className="underline underline-offset-4">Privacy Policy</Link><Link to="/contact" className="underline underline-offset-4">Contact & Terms</Link></nav>
          <p className="mt-3">Independent educational project. Not affiliated with or endorsed by WAEC.</p>
        </div>
      </footer>
    </div>
  );
}

export const meta = (title: string, description: string) => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: "WASSCE Prep Hub" },
  { name: "twitter:card", content: "summary" },
];
