import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout, meta } from "@/components/SiteLayout";
import { getSubject, bestKey, type Question } from "@/data/questions";

export const Route = createFileRoute("/quiz/$subject")({
  loader: ({ params }) => { const s = getSubject(params.subject); if (!s) throw notFound(); return s; },
  head: ({ loaderData }) => ({ meta: meta(`${loaderData?.name ?? "Quiz"} WASSCE Quiz — WASSCE Prep Hub`, `Practise ${loaderData?.name ?? ""} WASSCE-style questions with a timer and explanations.`) }),
  component: Quiz,
});

const LIMIT = 10 * 60;
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

function Quiz() {
  const subject = Route.useLoaderData();
  const qs = subject.questions;
  const [stage, setStage] = useState<"start" | "quiz" | "done">("start");
  const [timed, setTimed] = useState(true);
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState<(number | null)[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (stage !== "quiz") return;
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [stage]);
  useEffect(() => { if (timed && stage === "quiz" && elapsed >= LIMIT) finish(); }, [elapsed]);

  const start = () => { setPicks(qs.map(() => null)); setI(0); setElapsed(0); setStage("quiz"); };
  const score = picks.filter((p, k) => p === qs[k]?.answer).length;
  const pct = Math.round((score / qs.length) * 100);
  function finish() {
    setStage("done");
    const prev = Number(localStorage.getItem(bestKey(subject.id)) ?? -1);
    const p = Math.round((picks.filter((x, k) => x === qs[k]?.answer).length / qs.length) * 100);
    if (p > prev) localStorage.setItem(bestKey(subject.id), String(p));
  }

  if (stage === "start") return (
    <SiteLayout>
      <div className="rounded-2xl border bg-card p-6 text-center">
        <div className="text-5xl">{subject.emoji}</div>
        <h1 className="mt-3 text-3xl font-extrabold">{subject.name}</h1>
        <p className="mt-2 text-muted-foreground">{qs.length} questions · {timed ? "10 minutes" : "No timer"}</p>
        <div className="mt-5 inline-flex rounded-full bg-muted p-1">
          {[true, false].map((v) => (
            <button key={String(v)} onClick={() => setTimed(v)} className={`px-4 py-2 rounded-full text-sm font-semibold ${timed === v ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{v ? "⏱ Timed" : "🧘 Practice"}</button>
          ))}
        </div>
        <button onClick={start} className="mt-6 w-full rounded-xl bg-secondary py-4 text-lg font-bold text-secondary-foreground">Start quiz</button>
      </div>
    </SiteLayout>
  );

  if (stage === "done") {
    const missed = qs.map((q, k) => ({ q, pick: picks[k] })).filter((x) => x.pick !== x.q.answer);
    const share = async () => {
      await navigator.clipboard.writeText(`🎓 I scored ${score}/${qs.length} (${pct}%) in ${subject.name} on WASSCE Prep Hub in ${fmt(elapsed)}! Can you beat me? ${window.location.origin}`);
      setCopied(true);
    };
    return (
      <SiteLayout>
        <div className="rounded-2xl border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">{subject.name}</p>
          <div className="mt-2 text-6xl font-extrabold font-display text-primary">{pct}%</div>
          <p className="mt-1 font-semibold">{score} / {qs.length} correct · {fmt(elapsed)}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <button onClick={share} className="rounded-xl bg-success py-3 font-bold text-success-foreground">{copied ? "✓ Copied — paste in WhatsApp" : "Share score"}</button>
            <button onClick={start} className="rounded-xl bg-muted py-3 font-bold">Try again</button>
          </div>
          <Link to="/" className="mt-3 inline-block text-sm text-muted-foreground underline">Back to subjects</Link>
        </div>
        <h2 className="mt-8 mb-3 text-xl font-bold">Review missed questions ({missed.length})</h2>
        {missed.length === 0 && <p className="text-muted-foreground">Perfect score — nothing to review! 🎉</p>}
        <div className="space-y-3">
          {missed.map(({ q, pick }) => (
            <div key={q.q} className="rounded-xl border bg-card p-4">
              <p className="font-semibold">{q.q}</p>
              {pick !== null && pick !== undefined && <p className="mt-2 text-sm text-destructive">Your answer: {q.options[pick]}</p>}
              <p className="mt-1 text-sm text-success font-semibold">Correct: {q.options[q.answer]}</p>
              <p className="mt-1 text-sm text-muted-foreground">{q.explanation}</p>
            </div>
          ))}
        </div>
      </SiteLayout>
    );
  }

  const q = qs[i] as Question;
  const pick = picks[i];
  const answered = pick !== null && pick !== undefined;
  const choose = (k: number) => { if (answered) return; const n = [...picks]; n[i] = k; setPicks(n); };
  return (
    <SiteLayout>
      <div className="flex items-center justify-between text-sm font-semibold">
        <span>Question {i + 1} of {qs.length}</span>
        <span className={timed && LIMIT - elapsed < 60 ? "text-destructive" : "text-muted-foreground"}>{timed ? `⏱ ${fmt(Math.max(0, LIMIT - elapsed))}` : `🧘 ${fmt(elapsed)}`}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary transition-all" style={{ width: `${((i + 1) / qs.length) * 100}%` }} /></div>
      <h1 className="mt-6 text-2xl font-bold leading-snug">{q.q}</h1>
      <div className="mt-5 space-y-3">
        {q.options.map((o, k) => {
          const state = !answered ? "bg-card hover:border-primary" : k === q.answer ? "bg-success text-success-foreground border-success" : k === pick ? "bg-destructive text-destructive-foreground border-destructive" : "bg-card opacity-60";
          return (
            <button key={k} onClick={() => choose(k)} className={`w-full flex gap-3 items-center text-left rounded-xl border-2 p-4 font-medium transition ${state}`}>
              <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-muted text-foreground font-bold">{"ABCD"[k]}</span>{o}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-4 rounded-xl bg-muted p-4 text-sm"><strong>{pick === q.answer ? "✅ Correct! " : "❌ Not quite. "}</strong>{q.explanation}</div>
      )}
      <button disabled={!answered} onClick={() => (i + 1 < qs.length ? setI(i + 1) : finish())} className="mt-6 w-full rounded-xl bg-primary py-4 font-bold text-primary-foreground disabled:opacity-40">
        {i + 1 < qs.length ? "Next question →" : "See results"}
      </button>
    </SiteLayout>
  );
}
