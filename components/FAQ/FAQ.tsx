import { FaqFragment } from "../../generated/graphql";
import { FAQEntry } from "./FAQEntry";

export const FAQ = ({ faqs }: { faqs: FaqFragment[] }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="text-4xl mb-8 font-semibold tracking-wider text-center"
          id="faq"
        >
          FAQ (Często Zadawane Pytania)
        </h2>

        <dl>
          {faqs.map((entry) => (
            <FAQEntry
              {...entry}
            />
          ))}
        </dl>
      </div>
    </section>
  );
};
