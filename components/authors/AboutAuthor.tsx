import { AuthorFragmentMDX, SectionMetadataMDX } from "../../props";

import { Author } from "./Author";

interface AboutAuthorProps {
  readonly authors: readonly AuthorFragmentMDX[];
  readonly section: SectionMetadataMDX;
}

export const AboutAuthor = ({ authors }: AboutAuthorProps) => {
  return (
    <section className="relative py-16 bg-white">
      <a id="about" className="top-4"></a>
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-8">
        {authors.map((author) => {
          return <Author key={author.id} author={author} />;
        })}
      </div>
    </section>
  );
};
