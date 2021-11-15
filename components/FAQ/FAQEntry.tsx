interface FAQEntryProps {
  question: string;
  answer: string;
}

export const FAQEntry = ({ question, answer }: FAQEntryProps) => {
  return (
    <div className="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
      <dt className="text-lg leading-6 font-medium text-gray-900 md:col-span-5">
        {question}
      </dt>
      <dd className="mt-2 md:mt-0 md:col-span-7">
        <p className="text-base leading-6 text-gray-700">{answer}</p>
      </dd>
    </div>
  );
};
