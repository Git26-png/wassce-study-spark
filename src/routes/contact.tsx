import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: meta("Contact WASSCE Prep Hub & Terms of Use", "Contact WASSCE Prep Hub for corrections or support and review the website terms, educational disclaimer and copyright policy.") }),
  component: () => (
    <SiteLayout>
      <article className="prose-page">
        <h1 className="text-3xl font-extrabold">Contact & Terms</h1>
        <h2>Contact us</h2>
        <p>For questions, corrections, accessibility feedback, advertising concerns or privacy requests, email <a href="mailto:codeart2627@gmail.com">codeart2627@gmail.com</a>. Please include the relevant page URL and do not send passwords or sensitive exam details.</p>
        <h2>Use of the site</h2>
        <p>Individuals, students and teachers may use the quizzes and study guides for lawful personal learning or classroom preparation. Reproducing, scraping or republishing substantial portions as original material is not permitted without written permission.</p>
        <h2>Educational disclaimer</h2>
        <p>WASSCE Prep Hub is an independent educational project and is not affiliated with, endorsed by or operated by the West African Examinations Council (WAEC). Study materials are original preparation aids and are not official WASSCE questions, guaranteed solutions or an official marking scheme. Students should check the current syllabus and approved resources.</p>
        <h2>Accuracy and availability</h2>
        <p>We work to keep content clear and accurate, but syllabuses and examination formats can change. We do not guarantee that every explanation is error-free or that the service will remain uninterrupted. Report suspected errors and we will review them.</p>
        <h2>Advertising and external websites</h2>
        <p>Advertisements, when enabled, are separate from editorial content and do not represent recommendations or endorsements. External sites linked from this website have their own privacy and terms policies, which apply when you leave WASSCE Prep Hub.</p>
        <h2>Copyright notices</h2>
        <p>If you believe a page infringes your copyright, send us the URL, a description of the work, proof of ownership and the requested correction. We will review valid notices promptly and may remove or update disputed material.</n        </p>
        <h2>Acceptance of terms</h2>
        <p>By using this website, you accept these terms and the Privacy Policy. You are responsible for any decisions made from the educational materials and should consult a qualified teacher or official source where certainty is required.</p>
      </article>
    </SiteLayout>
  ),
});
