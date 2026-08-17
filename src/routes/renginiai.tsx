import { createFileRoute } from "@tanstack/react-router";

import eventsImage from "@/assets/renginiai.jpg";
import eventsImageWebp from "@/assets/renginiai.webp";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero } from "@/components/site/PageHero";
import { PageSection, Prose } from "@/components/site/Prose";
import { Reveal } from "@/components/site/Reveal";
import { renginiai } from "@/content/lt/renginiai";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/renginiai")({
  head: () =>
    pageHead({
      path: "/renginiai",
      title: renginiai.seoTitle,
      description: renginiai.seoDescription,
    }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow={renginiai.eyebrow}
        title={renginiai.title}
        lead={renginiai.lead}
        image={eventsImage}
        imageWebp={eventsImageWebp}
        imageAlt="Renginių salė su ilgais stalais ir šiltu apšvietimu"
        crumbs={[{ label: "Pagrindinis", to: "/" }, { label: renginiai.title }]}
      />
      <PageSection>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Prose>
            {renginiai.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Prose>
        </Reveal>
        <Reveal className="mt-16" delay={80}>
          <ContactCta title="Teiraukitės dėl datos" text={renginiai.lead} />
        </Reveal>
      </PageSection>
    </>
  );
}
