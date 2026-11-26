import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: meta("Privacy Policy — WASSCE Prep Hub", "Read WASSCE Prep Hub's policy on local storage, cookies, Google advertising, analytics and student privacy.") }),
  component: () => (
    <SiteLayout>
      <article className="prose-page">
        <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
        <p>Effective date: 26 November 2026</p>
        <h2>Overview</h2>
        <p>WASSCE Prep Hub is a free educational website for SHS students and candidates. We do not require account registration and do not ask visitors to submit exam numbers, school records or other sensitive personal information to use the quizzes or study guides.</p>
        <h2>Information stored on your device</h2>
        <p>The website uses browser local storage to remember high scores for each subject and the selected light or dark theme. This data is stored on the device and browser you are using. It is not used to identify you to us. You may remove it at any time by clearing this site's storage through your browser settings.</p>
        <h2>Google advertising and cookies</h2>
        <p>Third-party vendors, including Google, may use cookies or similar technologies to serve advertising, measure advertisements, provide fraud prevention and limit repeated ads. Google's use of advertising cookies enables it and its partners to serve ads based on visits to this and other websites.</p>
        <p>Third-party ad providers may collect limited identifiers and usage information according to their own privacy policies. Personalised advertising is controlled by the visitor's Google and device settings. Learn more in <a href="https://policies.google.com/technologies/ads" rel="nofollow noopener noreferrer" target="_blank">Google's advertising policies</a>, manage choices in <a href="https://adssettings.google.com" rel="nofollow noopener noreferrer" target="_blank">Google Ads Settings</a>, or visit <a href="https://optout.aboutads.info" rel="nofollow noopener noreferrer" target="_blank">aboutads.info</a>.</p>
        <h2>Analytics and hosting</h2>
        <p>Our hosting provider may process technical information such as IP address, browser type, device type, pages requested, request time and referring page for security, reliability and aggregate reporting. We use such information only to operate and improve the service and do not sell student personal data.</p>
        <h2>Children and student privacy</h2>
        <p>The site is intended to support general educational use. We do not knowingly invite children or students to submit names, contact details or sensitive information. Parents or guardians who believe a child has provided personal information should contact us so it can be removed.</p>
        <h2>Your privacy choices</h2>
        <p>You may block or delete cookies in browser settings, clear local storage and disable personalised advertising through your available provider controls. Blocking essential cookies or storage may affect advertising or preferences, but the core study pages should remain usable.</p>
        <h2>Contact and requests</h2>
        <p>For privacy questions, correction requests or a data concern, email <a href="mailto:codeart2627@gmail.com">codeart2627@gmail.com</a>. Please do not send passwords, examination records or unnecessary personal information.</p>
        <h2>Changes to this policy</h2>
        <p>We may revise this policy when advertising, technology or legal practices change. The effective date at the top identifies the latest revision. Continued use after a revision means you accept the updated notice.</p>
      </article>
    </SiteLayout>
  ),
});
