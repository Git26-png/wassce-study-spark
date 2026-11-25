import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/tips")({
  head: () => ({ meta: meta("5 WASSCE Study Tips That Work — WASSCE Prep Hub", "Five practical study strategies to help SHS students prepare for and pass the WASSCE.") }),
  component: () => (
    <SiteLayout>
      <article className="prose-page">
        <h1 className="text-3xl font-extrabold">5 WASSCE study strategies that actually work</h1>
        <p className="mt-2">Passing WASSCE isn't about studying all night — it's about studying smart. Here are five habits top students use.</p>
        <h2>1. Practise with past questions every week</h2>
        <p>WAEC repeats topics and question styles. Working through past questions shows you what examiners expect and helps you spot your weak areas early. Aim for at least one timed paper per subject each week.</p>
        <h2>2. Use active recall, not just re-reading</h2>
        <p>Close your notes and try to explain a topic from memory, or quiz yourself with flashcards. Testing yourself is one of the most proven ways to make knowledge stick.</p>
        <h2>3. Space out your revision</h2>
        <p>Review a topic after one day, then three days, then a week. Spaced repetition beats cramming because your brain strengthens memories each time you recall them.</p>
        <h2>4. Learn from every mistake</h2>
        <p>Keep a "mistakes notebook". Each time you get a question wrong, write the correct answer and why. Before the exam, revise this notebook — it's a summary of exactly what you need.</p>
        <h2>5. Look after your body</h2>
        <p>Sleep 7–9 hours, drink water and take short breaks (try 25 minutes study, 5 minutes rest). A rested brain remembers far more than a tired one.</p>
        <p className="mt-6">Ready to practise? Head back home and start a quiz. 💪</p>
      </article>
    </SiteLayout>
  ),
});
