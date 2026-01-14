export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Abdell Design",
    description:
      "Professional thumbnail designer specializing in crypto, trading, lifestyle, and podcast thumbnails for YouTube creators",
    url: "https://abdelldesign.vercel.app",
    logo: "https://abdelldesign.vercel.app/logo.png",
    image: "https://abdelldesign.vercel.app/og-image.jpg",
    telephone: "+212644157042", // Replace with your actual phone
    email: "abdelldesign2001@gmail.com", // Replace with your actual email
    address: {
      "@type": "PostalAddress",
      addressCountry: "US", // Replace with your country
    },
    sameAs: [
      "https://twitter.com/yourhandle",
      "https://www.instagram.com/yourhandle",
    ],
    priceRange: "$$",
    serviceType: ["Graphic Design", "Thumbnail Design", "YouTube Marketing"],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };

  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdell",
    jobTitle: "Professional Thumbnail Designer",
    description:
      "Experienced thumbnail designer helping YouTube creators increase their click-through rates",
    url: "https://abdelldesign.vercel.app",
    image: "https://abdelldesign.vercel.app/profile-image.jpg",
    sameAs: [
      "https://twitter.com/yourhandle",
    ],
    knowsAbout: [
      "Graphic Design",
      "Thumbnail Design",
      "YouTube Marketing",
      "Visual Design",
      "Adobe Photoshop",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abdell Design",
    url: "https://abdelldesign.vercel.app",
    description:
      "Professional thumbnail design portfolio showcasing work for YouTube creators",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://abdelldesign.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
