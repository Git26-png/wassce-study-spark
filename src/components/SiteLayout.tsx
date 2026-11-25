import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(localStorage.getItem("wph-theme") === "dark"); }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  const toggle = () => { const n = !dark; setDark(n); localStorage.setItem("wph-theme", n ? "dark" : "light"); };
  const nav = [["/", "Home"], ["/tips", "Exam Tips"], ["/about", "About"], ["/privacy", "Privacy"]] as const;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="kente-stripe" />
      <header className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between gap-2">
          <Link to="/" className="font-display text-lg font-extrabold">WASSCE<span className="text-primary"> Prep</span> Hub</Link>
          <button onClick={toggle} aria-label="Toggle dark mode" className="h-10 w-10 rounded-full bg-muted text-lg">{dark ? "☀️" : "🌙"}</button>
        </div>
        <nav className="mx-auto max-w-3xl px-4 pb-2 flex gap-1 overflow-x-auto text-sm">
          {nav.map(([to, label]) => (
            <Link key={to} to={to} activeOptions={{ exact: true }} className="px-3 py-1.5 rounded-full text-muted-foreground whitespace-nowrap" activeProps={{ className: "bg-primary text-primary-foreground" }}>{label}</Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-6">{children}</main>
      <footer className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} WASSCE Prep Hub · Practice smart, pass strong.</footer>
    </div>
  );
}

export const meta = (title: string, description: string) => [
  { title }, { name: "description", content: description },
  { property: "og:title", content: title }, { property: "og:description", content: description },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
];
