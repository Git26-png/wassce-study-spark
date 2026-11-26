import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: meta("Contact & Terms — WASSCE Prep Hub", "Contact WASSCE Prep Hub and read the website terms of use.") }),
  component: () => (
    <SiteLayout>
      <article className="prose-page">
        <h1 className="text-3xl font-extrabold">Contact & Terms</h1>

        <h2>Contact us</h2>
        <p>For questions, corrections, accessibility issues or privacy requests, email <a href="mailto:codeart2627@gmail.com">codeart2627@gmail.com</a>.</p>

        <h2>Fair use</h2>
        <p>You may use this website for personal study and classroom preparation. Please do not scrape, copy, redistribute or republish the site as your own or use it to mislead users.</p>

        <h2>Educational limitations</h2>
        <p>Questions and explanations are study aids, not official WAEC past questions or an examination guarantee. Always consult current official syllabuses, approved textbooks and examination instructions.</p>

        <h2>External links and advertising</h2>
        <p>External websites are governed by their own terms and privacy policies. If advertisements are displayed, ads do not constitute recommendations or endorsements by WASSCE Prep Hub.</p>

        <h2>No warranties</h2>
        <p>The site is provided on an “as is” basis. We aim for accuracy and availability but do not guarantee that every question or service will always be correct or uninterrupted.</p>

        <h2>Copyright complaints</h2>
        <p>If you believe material on this site infringes your rights, email <a href="mailto:codeart2627@gmail.com">codeart2627@gmail.com</a> with the relevant URL, ownership details and requested action.</p>
      </article>
    </SiteLayout>
  ),
});
