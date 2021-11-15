export const AgendaWeek = ({ number, title, unit, points = [] }) => {
  return (
    <div className="">
      <div className="flex flex-col min-w-0 break-words bg-white w-full hover:bg-gray-50 rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <div className="text-pink-400 font-bold text-base">
            Tydzień {number}
          </div>
          <div className="">
            <h6 className="text-2xl font-semibold">{title}</h6>
          </div>
        </div>
        <div className="px-4 py-2">
          <ul className="list-decimal list-inside space-y-2 text-gray-600 font-semibold">
            {points.map((point, idx) => (
              <li key={idx + 1}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
