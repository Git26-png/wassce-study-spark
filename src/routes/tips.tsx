import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, meta } from "@/components/SiteLayout";

const guides = [
  {
    title: "1. Practise with past questions every week",
    body: "WAEC repeats topics and question styles far more often than students expect. Working through past questions shows you what examiners actually ask, how they word theory questions, and which topics carry the most marks. Do at least one timed paper per subject every week, then mark it yourself using the marking scheme — the marking scheme is just as valuable as the question paper.",
    do: [
      "Collect the last 5–7 years of past questions for each subject you offer.",
      "Answer one full paper under real exam timing, no notes allowed.",
      "Mark it with the official marking scheme and write down every topic you lost marks on.",
      "Turn those lost topics into your revision list for the next two weeks.",
    ],
  },
  {
    title: "2. Use active recall, not just re-reading",
    body: "Re-reading your notes feels productive, but research on learning shows it is one of the weakest ways to remember anything. Active recall means closing the book and pulling the answer out of your own head. It feels harder — that difficulty is the signal that your memory is actually being built.",
    do: [
      "After reading a topic, close the book and write everything you remember on a blank page.",
      "Open the book again and add what you missed in a different colour pen.",
      "Make a flashcard for every definition, formula, date or diagram you cannot recall.",
      "Quiz yourself with the flashcards before bed — 10 minutes beats an hour of re-reading.",
    ],
  },
  {
    title: "3. Space out your revision",
    body: "Cramming the night before fills short-term memory, which empties quickly. Spaced repetition means reviewing a topic after one day, then three days, then a week, then a month. Each successful recall strengthens the memory, so the topic is still there in June when the exam comes.",
    do: [
      "Give every topic four review slots: day 1, day 3, day 7 and day 30.",
      "Keep one revision sheet per subject and tick the date you last reviewed each topic.",
      "Spend your first 10 minutes of each study session recalling yesterday's topic.",
      "Anything you tick twice with confidence can move to a longer gap; anything shaky stays on the short loop.",
    ],
  },
  {
    title: "4. Learn from every mistake",
    body: "Your mistakes are a personalised revision list. A mistakes notebook collects every question you got wrong, the correct answer, and the reason you went wrong — misread the question, forgot the formula, ran out of time. Before the exam you revise this one thin book instead of three thick textbooks.",
    do: [
      "Keep one notebook (or one notes app folder) purely for mistakes.",
      "For each entry write: the question, your answer, the correct answer, and why you missed it.",
      "Sort entries into 'I did not know', 'I knew but panicked' and 'I misread the question'.",
      "Re-do every mistake question one week later — a mistake you cannot repeat is a mistake you have fixed.",
    ],
  },
  {
    title: "5. Look after your body",
    body: "A rested brain remembers far more than a tired one, and exam day is a physical event as much as a mental one. Students who sleep three hours before an exam score lower on average than students who sleep seven, even after extra study. Your body is part of your study system.",
    do: [
      "Sleep 7–9 hours every night, especially in the last two weeks before the exam.",
      "Study in blocks of 25 minutes with a 5-minute break (a phone timer works fine).",
      "Drink water and eat before you study — a hungry brain loses focus fast.",
      "Walk or exercise for 20 minutes a day; it improves memory and cuts exam anxiety.",
    ],
  },
  {
    title: "6. Answer the way the marking scheme wants",
    body: "Many students know the topic and still lose marks because they answer in the wrong shape. Theory papers are marked point by point, not by how much you wrote. A four-mark question usually wants four distinct, clearly separated points — not one long paragraph. Learn the verbs WAEC uses, because each one demands a different answer: 'state' wants a short fact, 'explain' wants a reason with a because, 'compare' wants similarities and differences in pairs, 'evaluate' wants both strengths and weaknesses with your judgement.",
    do: [
      "Write the command words (state, name, explain, discuss, evaluate, calculate) on one card and keep it on your desk.",
      "For every theory question, count the marks and plan that many points before you write a single word.",
      "Number or bullet your points so the examiner can tick them without hunting.",
      "Use the subject's exact vocabulary — 'osmosis', 'carrying capacity', 'supply and demand' — instead of everyday words.",
      "For calculations, always show the formula, then the substitution, then the answer with its unit. Method marks are given even when the final number is wrong.",
    ],
  },
  {
    title: "7. Build a revision timetable you can actually keep",
    body: "A timetable works because it removes the daily decision of what to study. Build it backwards from your exam dates: write every paper and its date, then count the weeks left, then give each subject the hours it deserves — hardest and weakest subjects get the most, and every subject gets at least one slot a week. Keep each block to one topic plus one past question, and put the whole timetable somewhere you will see it every morning.",
    do: [
      "List your papers with dates, then count the weeks remaining to each one.",
      "Rank your subjects: weak, medium, strong. Give weak subjects 3 slots a week, medium 2, strong 1.",
      "Schedule fixed times you already own — 6:00–7:30am before school, 8:00–9:30pm at home — instead of vague 'I will study later'.",
      "Write the exact topic in the box, not the subject: 'Photosynthesis light reactions', not 'Biology'.",
      "Leave Sunday evening empty as a buffer. If a day slips, the buffer catches it and the plan survives.",
      "Review the timetable every Sunday night: tick what you finished, move what you did not.",
    ],
  },
  {
    title: "8. Play the exam hall game: time, order and marks",
    body: "Knowing the work is only half of exam success; the other half is managing the three hours in the hall. Most mark losses come from running out of time on the last questions, or from spending 20 minutes on a question worth 2 marks. Before the exam, plan your order and your time budget, then practise that plan with full past papers so it becomes automatic.",
    do: [
      "At the start, spend 5 minutes reading the whole paper and marking each question easy, medium or hard.",
      "Do the easy ones first to bank marks, then mediums, then hard ones with what is left.",
      "Budget time by marks: divide your minutes by total marks, then move on when a question passes its budget.",
      "Never leave a blank. Even a formula, a definition or a labelled diagram can pick up a method or part mark.",
      "In objective papers, answer with a pencil, then copy to your answer sheet in one clean pass so you never lose marks to an erasure or a wrong-numbered answer.",
      "Save the last 10 minutes to check that every question is answered and that your candidate number and subject are written correctly.",
    ],
  },
];

export const Route = createFileRoute("/tips")({
  head: () => ({ meta: meta("8 WASSCE Study Tips That Work — WASSCE Prep Hub", "Eight detailed, practical study strategies to help SHS students prepare for and pass the WASSCE.") }),
  component: () => (
    <SiteLayout>
      <article className="prose-page">
        <h1 className="text-3xl font-extrabold">8 WASSCE study strategies that actually work</h1>
        <p className="mt-2">Passing WASSCE isn't about studying all night — it's about studying smart. These are the habits top students use, with a concrete thing to try this week for each one.</p>
        {guides.map((g) => (
          <section key={g.title}>
            <h2>{g.title}</h2>
            <p>{g.body}</p>
            <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-primary">Try this week</h3>
            <ul className="list-disc pl-5">
              {g.do.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>
        ))}
        <h2>Start where you are weakest</h2>
        <p>You do not need to use all eight at once. Pick the one subject that scares you most, take one past question in it today, and add the mistakes notebook tonight. Small, consistent steps beat a perfect plan you never start.</p>
        <p className="mt-6">Ready to practise? Head back home and start a quiz. 💪</p>
      </article>
    </SiteLayout>
  ),
});
