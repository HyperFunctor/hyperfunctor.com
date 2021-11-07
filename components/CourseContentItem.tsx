import Image from 'next/image';

export const CourseContentItem = ({ image, title, direction = "", description }) => {
  return (
    <div className={`flex ${direction == 'reverse' ? "flex-row-reverse" : ""} flex-wrap items-center`}>
      <div className="w-full md:w-1/2 pb-4 flex justify-center">
        <img
          src={image}
          alt="Picture of the author"
          width={360}
          height={360}
        />
      </div>
      <div className="w-full md:w-1/2 pb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
}
