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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-green-500 w-3"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M173.9 439.4 7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0l112.1 112 240.1-240c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-red-400 w-3"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="m242.7 256 100-100a31.5 31.5 0 0 0 0-44.5l-22.2-22.3a31.5 31.5 0 0 0-44.4 0L176 189.2 76 89.3a31.5 31.5 0 0 0-44.5 0L9.2 111.5a31.5 31.5 0 0 0 0 44.4l100 100.1-100 100a31.5 31.5 0 0 0 0 44.5l22.3 22.3a31.5 31.5 0 0 0 44.4 0l100.1-100 100 100a31.5 31.5 0 0 0 44.5 0l22.3-22.2a31.5 31.5 0 0 0 0-44.5L242.8 256z"
                />
              </svg>
            )}
          </span>
        </div>
        <span className="text-gray-700">{text}</span>
      </div>
    </li>
  );
};
