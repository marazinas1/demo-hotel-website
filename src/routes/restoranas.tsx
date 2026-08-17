import { createFileRoute } from "@tanstack/react-router";

import restoranasImage from "@/assets/restoranas.jpg";
import restoranasImageWebp from "@/assets/restoranas.webp";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero } from "@/components/site/PageHero";
import { PageSection, Prose } from "@/components/site/Prose";
import { Reveal } from "@/components/site/Reveal";
import { restoranas } from "@/content/lt/restoranas";
import { SITE_URL } from "@/data/nav";
import { contact } from "@/data/contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/restoranas")({
  head: () => ({
    ...pageHead({
      path: "/restoranas",
      title: restoranas.seoTitle,
      description: restoranas.seoDescription,
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Baltic Stay restoranas",
          description: restoranas.seoDescription,
          url: `${SITE_URL}/restoranas`,
          telephone: (contact.phones[0] ?? "").replace(/\s/g, ""),
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jūros g. 12",
            addressLocality: "Klaipėda",
            postalCode: "91234",
            addressCountry: "LT",
          },
          servesCuisine: "Lietuviška",
          priceRange: "€€",
        }),
      },
    ],
  }),
  component: RestaurantPage,
});

function RestaurantPage() {
  return (
    <>
      <PageHero
        eyebrow={restoranas.eyebrow}
        title={restoranas.title}
        lead={restoranas.lead}
        image={restoranasImage}
        imageWebp={restoranasImageWebp}
        imageAlt="Šviesi viešbučio restorano salė su ąžuoliniais stalais"
        crumbs={[{ label: "Pagrindinis", to: "/" }, { label: restoranas.title }]}
      />
      <PageSection>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Prose>
            {restoranas.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Prose>
        </Reveal>
        <Reveal className="mt-16" delay={80}>
          <ContactCta title="Rezervuoti staliuką" text={restoranas.lead} />
        </Reveal>
      </PageSection>
    </>
  );
}
