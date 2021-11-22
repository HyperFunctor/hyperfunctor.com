import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LearningPointProps {
  point: string;
}

export const LearningPoint = ({ point }: LearningPointProps) => {
  return (
    <li className="">
      <div className="flex items-center">
        <div className="">
          <FontAwesomeIcon icon={faCheck} className="text-blue-400 w-3" />
        </div>
        <span className="">{point}</span>
      </div>
    </li>
  );
};
