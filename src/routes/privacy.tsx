import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: meta("Privacy Policy — WASSCE Prep Hub", "Read how WASSCE Prep Hub handles browser storage, cookies, advertising and privacy choices.") }),
  component: () => (
    <SiteLayout>
      <article className="prose-page">
        <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
        <p>Effective date: 26 November 2026</p>

        <h2>Overview</h2>
        <p>WASSCE Prep Hub provides free educational practice quizzes and study information. We do not request a student account or ask users to submit their name, school record or exam number.</p>

        <h2>Information stored on your device</h2>
        <p>Quiz scores and your light or dark theme preference may be stored in your browser using local storage. This information stays on the device and browser you use. You can remove it by clearing this site's browser data.</p>

        <h2>Advertising cookies</h2>
        <p>If advertising is enabled, Google and its advertising partners may use cookies or similar technologies to deliver, limit and measure ads, and to prevent fraud. Google may use cookies to serve ads based on this or other websites you have visited.</p>
        <p>To learn more, visit Google's <a href="https://policies.google.com/technologies/ads" rel="nofollow">Advertising Policies and Technologies</a>. You can manage personalised advertising at <a href="https://adssettings.google.com" rel="nofollow">Google Ads Settings</a> or opt out of participating third-party vendors at <a href="https://optout.aboutads.info" rel="nofollow">aboutads.info</a>.</p>

        <h2>Analytics and hosting</h2>
        <p>Our hosting provider or an analytics service may process limited technical information such as IP address, browser type, device type and page requested for security and service improvement. We do not use this information to create an account profile or sell personal data.</p>

        <h2>Children and students</h2>
        <p>WASSCE Prep Hub is designed for educational use. We do not knowingly collect personal information directly from children. Visitors should not submit sensitive personal or exam information in a quiz or message.</p>

        <h2>Your choices</h2>
        <p>You can disable cookies in your browser, clear local storage, or use available advertising opt-out controls. Blocking some cookies may affect advertising or non-essential features.</p>

        <h2>Contact</h2>
        <p>For privacy questions or data requests, email <a href="mailto:codeart2627@gmail.com">codeart2627@gmail.com</a>. Please do not include sensitive personal information in your message.</p>

        <h2>Policy changes</h2>
        <p>We may update this policy when our practices or applicable requirements change. The effective date above will show when the latest revision was published.</p>
      </article>
    </SiteLayout>
  ),
});
