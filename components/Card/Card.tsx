import Image from "next/image";

interface CardProps {
  title: string;
  location: string;
  description: string;
  src: string;
}

const Card = ({ title, location, description, src }: CardProps) => {
  return (
    <div className="space-y-1 shrink-0 cursor-pointer">
      <Image
        className="w-80 h-72 object-cover rounded-lg pb-2"
        width={540}
        height={405}
        src={src}
        alt=""
      />
      <p className="font-bold">{title}</p>
      <p>{location}</p>
      <p className="font-light text-sm">{description}</p>
    </div>
  );
};

export default Card;
