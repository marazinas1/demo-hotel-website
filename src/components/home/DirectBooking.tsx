import { RingFrame } from "@/components/site/Ring";
import { Reveal } from "@/components/site/Reveal";

const points = [
  {
    title: "Rezervacija tiesiogiai",
    note: "Užsakymas vyksta mūsų svetainėje – be tarpininkų ir be papildomų komisinių.",
  },
  {
    title: "Aiški kaina",
    note: "Matote galutinę sumą su pasirinktomis paslaugomis dar prieš patvirtinant.",
  },
];

export function DirectBooking() {
  return (
    <section className="bg-warm-white px-6 py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="label-caps text-center text-stone">Rezervacija be tarpininkų</p>

        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 120}>
              <figure className="flex flex-col items-center text-center">
                <RingFrame className="h-20 w-20">
                  <span className="font-display text-xl text-ink">{index + 1}</span>
                </RingFrame>
                <figcaption className="mt-5 text-sm font-medium text-ink">{point.title}</figcaption>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone">{point.note}</p>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
