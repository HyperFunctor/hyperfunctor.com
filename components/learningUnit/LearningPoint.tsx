interface LearningPointProps {
  point: string;
}

export const LearningPoint = ({ point }: LearningPointProps) => {
  return (
    <li className="">
      <div className="flex items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-blue-400 w-3"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M173.9 439.4 7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0l112.1 112 240.1-240c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z"
            />
          </svg>
        </div>
        <span className="">{point}</span>
      </div>
    </li>
  );
};
