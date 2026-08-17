import { createFileRoute } from "@tanstack/react-router";

import spaImage from "@/assets/spa.jpg";
import spaImageWebp from "@/assets/spa.webp";
import { ContactCta } from "@/components/site/ContactCta";
import { PageHero } from "@/components/site/PageHero";
import { PageSection, Prose } from "@/components/site/Prose";
import { Reveal } from "@/components/site/Reveal";
import { spa } from "@/content/lt/spa";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/spa")({
  head: () => pageHead({ path: "/spa", title: spa.seoTitle, description: spa.seoDescription }),
  component: SpaPage,
});

function SpaPage() {
  return (
    <>
      <PageHero
        eyebrow={spa.eyebrow}
        title={spa.title}
        lead={spa.lead}
        image={spaImage}
        imageWebp={spaImageWebp}
        imageAlt="Viešbučio pirtis su medine sėdima dalimi ir švelniu apšvietimu"
        crumbs={[{ label: "Pagrindinis", to: "/" }, { label: spa.eyebrow }]}
      />
      <PageSection>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Prose>
            {spa.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Prose>
        </Reveal>
        <Reveal className="mt-16" delay={80}>
          <ContactCta title="Užsakyti pirtį" text={spa.lead} />
        </Reveal>
      </PageSection>
    </>
  );
}
