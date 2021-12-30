import { AgendaWeekFragment } from "../../generated/graphql";

interface AgendaWeekProps {
  item: AgendaWeekFragment;
  number: number;
}

export const AgendaWeek = ({ item, number }: AgendaWeekProps) => {
  return (
    <li className="break-words bg-white w-full hover:bg-gray-50 rounded-lg">
      <div className="px-4 py-5">
        <p className="text-pink-400 font-bold text-base">Tydzień {number}</p>
        <h4 className="text-2xl font-semibold">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.outcome}</p>
      </div>
      <div className="px-4 py-2">
        <ol className="list-decimal list-inside space-y-2 text-gray-600 font-semibold">
          {item.items.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ol>
      </div>
    </li>
  );
};
