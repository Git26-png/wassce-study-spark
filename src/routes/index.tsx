import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout, meta } from "@/components/SiteLayout";
import { subjects, bestKey } from "@/data/questions";

export const Route = createFileRoute("/")({
  head: () => ({ meta: meta("WASSCE Prep Hub — Free WASSCE Practice Quizzes", "Free timed WASSCE practice quizzes for Core Maths, Integrated Science, English and Social Studies with instant explanations.") }),
  component: Index,
});

function Index() {
  const [best, setBest] = useState<Record<string, number>>({});
  useEffect(() => {
    const b: Record<string, number> = {};
    subjects.forEach((s) => { const v = localStorage.getItem(bestKey(s.id)); if (v) b[s.id] = Number(v); });
    setBest(b);
  }, []);
  return (
    <SiteLayout>
      <section className="mb-8">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider">For SHS students</p>
        <h1 className="text-4xl font-extrabold mt-1 leading-tight">Practise WASSCE questions.<br /><span className="text-primary">Pass with confidence.</span></h1>
        <p className="mt-3 text-muted-foreground">Pick a subject, beat the timer and learn from every answer.</p>
      </section>
      <div className="grid gap-4 sm:grid-cols-2">
        {subjects.map((s) => (
          <Link key={s.id} to="/quiz/$subject" params={{ subject: s.id }} className="group rounded-2xl border bg-card p-5 shadow-sm transition active:scale-[.98] hover:border-primary">
            <div className="text-3xl">{s.emoji}</div>
            <h2 className="mt-3 text-xl font-bold">{s.name}</h2>
            <div className="mt-2 flex justify-between text-sm text-muted-foreground">
              <span>{s.questions.length} questions</span>
              <span className="font-semibold text-foreground">Best: {best[s.id] !== undefined ? `${best[s.id]}%` : "—"}</span>
            </div>
          </Link>
        ))}
      </div>
    </SiteLayout>
  );
}
