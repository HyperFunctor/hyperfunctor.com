import { FAQEntry } from "./FAQEntry";

export const FAQ = ({ faq, faq_title }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="text-4xl mb-8 font-semibold tracking-wider text-center"
          id="faq"
        >
          {faq_title}
        </h2>

        <dl>
          {faq.map((entry, idx) => (
            <FAQEntry {...entry} key={idx} />
          ))}
        </dl>
      </div>
    </section>
  );
};
