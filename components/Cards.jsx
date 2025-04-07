import { Mail } from "lucide-react";
import Link from "next/link";

export default function CardListing() {
  const cards = [
    {
      image: "/images/1.jpg",
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit tenetur fugiat quasi voluptatum odit labore corrupti nobis ipsum deleniti laudantium ducimus iure eius possimus voluptates placeat, error autem ex?",
      link: "/web-developement",
    },
    {
      image: "/images/2.jpg",
      title: "Mobile App Development",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit tenetur fugiat quasi voluptatum odit labore corrupti nobis ipsum deleniti laudantium ducimus iure eius possimus voluptates placeat, error autem ex?",
      link: "/mobile-developement",
    },
    {
      image: "/images/laptop.jpg",
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit tenetur fugiat quasi voluptatum odit labore corrupti nobis ipsum deleniti laudantium ducimus iure eius possimus voluptates placeat, error autem ex?",
      link: "/ux",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-4 bg-gray-200 p-8 max-w-7xl mx-auto ">
      {cards.map((card) => {
        return (
          <div className="bg-white text-black p-4 rounded-lg">
            <img src={card.image} className="w-24" alt="" />
            <h2 className="text-xl font-bold ">{card.title}</h2>
            <p className="line-clamp-2 text-sm">{card.description}</p>
            <Link className="text-blue-600" href={card.link}>
              Learn More
            </Link>
          </div>
        );
      })}
    </div>
  );
}
