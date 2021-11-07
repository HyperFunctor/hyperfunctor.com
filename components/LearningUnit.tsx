import { LearningPoint } from './LearningPoint';

export const LearningUnit = ({ index, name, description, points = [] }) => {
  return (
    <div className="">
      <div className="flex flex-col min-w-0 break-words bg-white w-full border border-gray-100 hover:shadow-2xl hover:border-gray-300 rounded-sm">
        <div className="px-4 py-5 flex-auto border-t-4 border-blue-400">
          <div className="flex items-center mb-3">
            <h6 className="text-xl font-semibold">{name}</h6>
          </div>
          <p className="mt-2 text-gray-800 leading-relaxed h-12">
            {description}
          </p>
        </div>
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <ul className="list-none">
            {points.map((point, idx) => <LearningPoint point={point} key={idx}/>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
