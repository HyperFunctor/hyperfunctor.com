import { DeepReadonly } from "ts-essentials";

import { FaqFragment } from "../../generated/graphql";
import { SectionMetadata } from "../../types";

import { FAQEntry } from "./FAQEntry";

interface FaqProps {
  faqs: DeepReadonly<FaqFragment[]>;
  readonly section: SectionMetadata;
}

export const FAQ = ({ faqs, section }: FaqProps) => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="text-4xl mb-8 font-semibold tracking-wider text-center"
          id="faq"
        >
          {section.title}
        </h2>

        <dl>
          {faqs.map((entry, idx) => (
            <FAQEntry {...entry} key={idx} />
          ))}
        </dl>
      </div>
    </section>
  );
};
