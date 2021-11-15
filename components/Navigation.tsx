import Link from "next/link";

export const Navigation = ({ navigation }) => {
  return (
    <nav className="z-50 w-full flex flex-wrap sticky top-0 translucent items-center justify-between py-3 navbar-expand-lg bg-white border-t-8 border-b border-gray-200">
      <div className="container mx-auto px-8 flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-sm font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">
              <span className="text-blue-400 font-extrabold">
                React.js + Next.js
              </span>{" "}
              od <span className="font-extrabold">A</span> do{" "}
              <span className="font-extrabold">Z</span>
            </a>
          </Link>
        </div>
        <div
          className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {navigation.map(({ name, href }, idx) => (
              <li className="flex items-center" key={idx}>
                <a
                  className="hover:text-gray-500 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href={href}
                >
                  <span className="inline-block ml-2">{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
