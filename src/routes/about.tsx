import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: meta("About WASSCE Prep Hub — Independent WASSCE Study Resource", "Learn about WASSCE Prep Hub, our educational mission, the features we offer and our independence from WAEC.") }),
  component: () => (
    <SiteLayout>
      <article className="prose-page">
        <h1 className="text-3xl font-extrabold">About WASSCE Prep Hub</h1>
        <p>WASSCE Prep Hub is an independent, mobile-friendly educational project created to help Senior High School students in Ghana practise, revise and approach the West African Senior School Certificate Examination with greater confidence.</p>
        <h2>Our purpose</h2>
        <p>Many SHS students have strong classroom experience but need repeated, low-cost practice to turn knowledge into exam technique. We provide subject quizzes, immediate teaching explanations, study guides and revision checklists that can be used on a phone, tablet or computer.</p>
        <h2>Who we serve</h2>
        <p>Our resources are designed for SHS one, two and three students, private candidates, teachers seeking revision prompts, parents supporting study at home and learners preparing in rural or data-constrained settings. The writing uses clear explanations and practical Ghanaian examples where appropriate.</p>
        <h2>What the platform includes</h2>
        <ul className="list-disc pl-5">
          <li>Timed and untimed quizzes in Core Mathematics, Integrated Science, English Language and Social Studies.</li>
          <li>Detailed explanations that teach the reasoning behind correct and incorrect options.</li>
          <li>Local high-score tracking stored in the student's own browser.</li>
          <li>Subject guides covering calculation methods, practical work, essay structure and exam strategy.</li>
          <li>A dark and light mode for comfortable study in different settings.</li>
        </ul>
        <h2>Editorial approach</h2>
        <p>We aim for clarity, accuracy and originality. Questions are written as study practice rather than copied official papers. Explanations emphasise method, key vocabulary and common distractors. Learners should still use the current WASSCE syllabus, approved textbooks and guidance from teachers when finalising revision.</p>
        <h2>Independence and support</h2>
        <p>WASSCE Prep Hub is an independent educational project. It is not affiliated with, endorsed by or operated by the West African Examinations Council (WAEC), and it does not publish an official marking scheme or guarantee a pass. Questions or suggestions can be sent to <a href="mailto:codeart2627@gmail.com">codeart2627@gmail.com</a>.</p>
      </article>
    </SiteLayout>
  ),
});
