import { FaqFragment } from "../../generated/graphql";

import { FAQEntry } from "./FAQEntry";

interface Props {
 faqs: FaqFragment[] 
}

export const FAQ = ({ faqs }: Props) => {
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
          {faqs.map((entry, idx) => (
            <FAQEntry {...entry} key={idx}/>
          ))}
        </dl>
      </div>
    </section>
  );
};
