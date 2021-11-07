import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

export const Hero = ({ title, subtitle, summary, joinButton, start }) => {
  return (
    <div className="bg-white pt-8 pb-8 flex content-center items-center justify-center" style={{ minHeight: '50vh' }}>
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl md:text-6xl leading-tight mb-4" dangerouslySetInnerHTML={{ __html: title }}></h1>
            <h2 className="text-3xl text-gray-500 leading-tight" dangerouslySetInnerHTML={{ __html: subtitle }}></h2>
            <ul className="list-none mt-6">
              {summary.map((argument, idx) =>
                <li className="py-2" key={idx + 1}>
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold w-8 h-8 uppercase text-gray-800 bg-green-200 mr-3  inline-flex items-center justify-center rounded-full">
                        <FontAwesomeIcon icon={faCheck} className="text-green-600 w-3" />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-700" dangerouslySetInnerHTML={{ __html: argument }}></h4>
                    </div>
                  </div>
                </li>
              )}
            </ul>

            <div className="mt-10">
              <a href="#buy-course" className="inline-block w-full text-center md:w-auto bg-gray-800 text-gray-100 active:bg-gray-100 text-lg font-bold uppercase px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0">{joinButton}</a>
            </div>
            <div className="mt-6 text-xl font-semibold text-gray-400">
              (Start: <span className="font-bold text-blue-500">{start}</span>)
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col justify-center items-center">
              <div className="my-8 flex flex-col justify-center">
                <Image src="/reactnext.png" width={900} height={600} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
