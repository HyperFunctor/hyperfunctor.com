export function CallToActionSection() {
  return (
    <div className="bg-pink-50 border-t border-b border-pink-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Gotowi na naukę programowania?</span>
          <span className="block text-pink-500">Zarezerwuj miejsce juz dziś</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#buy-course"
              className="button"
            >
              Kup kurs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

