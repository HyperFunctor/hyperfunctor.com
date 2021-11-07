const navigation = [
  { name: 'Dla Kogo', href: '#dlakogo' },
  { name: 'Agenda', href: '#agenda' },
  { name: 'FAQ', href: '#faq' },
  { name: 'O autorach', href: '#autorzy' },
]

export function Nav() {
  return (
    <header className="bg-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between border-b border-gray-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Zaiste, Programuj!</span>
            </a>
            <div className="hidden mr-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
