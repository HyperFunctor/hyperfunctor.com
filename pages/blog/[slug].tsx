import { Layout } from "../../components/layout/Layout";

export default function Post() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <header className="text-center py-8 xl:pb-16">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-5xl md:leading-xl">
                Garlic bread with cheese: What the science tells us
              </h1>
            </div>
          </header>
          <div className="grid grid-cols-4">
            <div></div>
            <div className="col-span-3">
              <main className="prose lg:prose-lg max-w-none">
                <p>
                  For years parents have espoused the health benefits of eating garlic bread with cheese to their
                  children, with the food earning such an iconic status in our culture that kids will often dress
                  up as warm, cheesy loaf for Halloween.
                </p>
                <p>
                  But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                  springing up around the country.
                </p>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}