import Image from "next/image";

export const LogoCloud = ({}) => {
  return (
    <div className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase text-gray-700 tracking-wide">
          Programistyczne staże dostarczane przez:
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
              width={105}
              height={48}
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
              width={138}
              height={48}
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
              width={127}
              height={48}
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
            <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
            <Image
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
              width={180}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
