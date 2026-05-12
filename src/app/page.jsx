import LandingPage from './LandingPage.jsx';
export const metadata = {
  title: "Axis Home Healthcare LLC",
  description: "You can count on Axis Home Healthcare to guide you on the right path towards a sustainable, secure, and independent future right in the comfort of your own home.",
  openGraph: {
    siteName: "Axis Home Healthcare LLC",
    title: "Axis Home Healthcare LLC",
    description: "You can count on Axis Home Healthcare to guide you on the right path towards a sustainable, secure, and independent future right in the comfort of your own home.",
    url: "https://www.axishealthmn.com/",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Axis Home Healthcare LLC",
            "alternateName": ["Axis Home Healthcare", "Axis Health MN"],
            "url": "https://www.axishealthmn.com/"
          })
        }}
      />
      <LandingPage />
    </>
  );
}