import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LearningPointProps {
  point: string;
}

export const LearningPoint = ({ point }: LearningPointProps) => {
  return (
    <li className="py-2">
      <div className="flex items-center">
        <div className="text-sm font-semibold inline-block py-1 px-1 text-gray-800 mr-2">
          <FontAwesomeIcon icon={faCheck} className="text-blue-400 w-3" />
        </div>
        <h4 className="">{point}</h4>
      </div>
    </li>
  );
};
