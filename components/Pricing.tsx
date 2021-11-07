import { Newsletter } from './Newsletter';
import { PricingPackage } from './PricingPackage';

export const Pricing = ({ pricing }) => {
  return (
    <div id="buy-course">
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-800">
        <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              {pricing.title}
            </h2>
            <p
              className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                {pricing.choose}
            </p>
            <p
              className="text-xl leading-9 font-regular text-white sm:text-2xl sm:leading-8 lg:text-3xl lg:leading-none mt-4">
                {pricing.presale}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-12 bg-gray-50 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-12 sm:mx-auto">
        <div className="z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md lg:max-w-5xl lg:items-center lg:flex lg:flex-row-reverse justify-center mx-auto">
            <PricingPackage className="rounded-lg shadow-lg max-w-md lg:min-w-0 lg:w-3/5" pkg={pricing.full}/>
            <PricingPackage className="lg:w-2/5 shadow lg:rounded-r-none" pkg={pricing.basic}/>
          </div>
          <div className="text-center mt-4">
            <div className="text-sm text-gray-500">{pricing.info}</div>
          </div>
        </div>
        <div className="max-w-screen-md mx-auto my-12 text-center">
          <p className="text-center prose-xl">Enter your email for updates.</p>
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
