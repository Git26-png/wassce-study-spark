import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: meta("Privacy Policy — WASSCE Prep Hub", "How WASSCE Prep Hub handles your data, cookies and third-party advertising.") }),
  component: () => (
    <SiteLayout>
      <article className="prose-page">
        <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
        <p className="mt-2">Last updated: {new Date().getFullYear()}</p>
        <h2>Information we store</h2>
        <p>We do not ask for your name, email or account. Your quiz high scores and theme choice are saved only on your own device (in your browser's local storage) and never sent to us.</p>
        <h2>Cookies and advertising</h2>
        <p>We may use Google AdSense to show ads. Third-party vendors, including Google, use cookies to serve ads based on your previous visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visits.</p>
        <p>You can opt out of personalised advertising by visiting Google Ads Settings (adssettings.google.com) or www.aboutads.info.</p>
        <h2>Analytics</h2>
        <p>We may use anonymous analytics to understand how many people visit and which pages are popular. This data does not identify you personally.</p>
        <h2>Children's privacy</h2>
        <p>Our site is meant for students. We do not knowingly collect personal information from anyone.</p>
        <h2>Contact</h2>
        <p>For privacy questions, email <strong>hello@wassceprephub.com</strong>.</p>
      </article>
    </SiteLayout>
  ),
});
