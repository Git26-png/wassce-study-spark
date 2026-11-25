import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: meta("About — WASSCE Prep Hub", "WASSCE Prep Hub is a free practice site built to help SHS students prepare for the WASSCE.") }),
  component: () => (
    <SiteLayout>
      <article className="prose-page">
        <h1 className="text-3xl font-extrabold">About WASSCE Prep Hub</h1>
        <p className="mt-2">WASSCE Prep Hub is a free, mobile-friendly practice site for Senior High School students preparing for the West African Senior School Certificate Examination.</p>
        <h2>Why we built it</h2>
        <p>Many students study on phones with limited data. This site loads fast, works on slow connections and lets you practise anywhere — on the trotro, at home or during break.</p>
        <h2>What you can do</h2>
        <ul className="list-disc pl-5"><li>Take timed or relaxed practice quizzes</li><li>See instant explanations for every answer</li><li>Track your best score per subject</li><li>Share your results with friends</li></ul>
        <h2>Contact</h2>
        <p>Questions or suggestions? Email us at <strong>hello@wassceprephub.com</strong>.</p>
        <p className="text-xs">WASSCE Prep Hub is an independent study tool and is not affiliated with WAEC.</p>
      </article>
    </SiteLayout>
  ),
});
