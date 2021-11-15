import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface ForWhomItemProps {
  text: string;
  reason: string;
}

export const ForWhomItem = ({ text, reason }: ForWhomItemProps) => {
  return (
    <li className="py-2">
      <div className="flex items-center">
        <div>
          <span
            className={clsx(
              "text-xs font-semibold w-8 h-8 uppercase text-gray-800 mr-3 inline-flex items-center justify-center rounded-full",
              {
                "bg-green-200": reason === "yes",
                "bg-red-200": reason === "no",
              }
            )}
          >
            {reason === "yes" ? (
              <FontAwesomeIcon icon={faCheck} className="text-green-500 w-3" />
            ) : (
              <FontAwesomeIcon icon={faTimes} className="text-red-400 w-3" />
            )}
          </span>
        </div>
        <div>
          <h4 className="text-gray-700">{text}</h4>
        </div>
      </div>
    </li>
  );
};
