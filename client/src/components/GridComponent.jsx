const GridComponent = () => {
  const cards = [
    {
      title: "Lilo & Stitch toys & more",
      description: "Shop now",
      image: "https://via.placeholder.com/300x200?text=Lilo+&+Stitch",
      bgColor: "bg-green-600",
      textColor: "text-white",
    },
    {
      title: "Hot July 4th savings",
      description: "Shop now",
      image: "https://via.placeholder.com/300x200?text=July+4th",
      bgColor: "bg-blue-300",
      textColor: "text-white",
    },
    {
      title: "Save on La Roche-Posay Anthelios",
      description: "Shop now",
      image: "https://via.placeholder.com/300x200?text=La+Roche-Posay",
      bgColor: "bg-gray-200",
      textColor: "text-black",
    },
    {
      title: "Hot new arrivals",
      description: "Shop now",
      image: "https://via.placeholder.com/300x200?text=New+Arrivals",
      bgColor: "bg-green-700",
      textColor: "text-white",
    },
    {
      title: "Up to 55% off",
      description: "Shop now",
      image: "https://via.placeholder.com/300x200?text=55%25+Off",
      bgColor: "bg-yellow-300",
      textColor: "text-black",
    },
    {
      title: "Flash Deals",
      description: "Shop now",
      image: "https://via.placeholder.com/300x200?text=Flash+Deals",
      bgColor: "bg-yellow-400",
      textColor: "text-black",
    },
    {
      title: "Last-minute July 4th faves",
      description: "Shop now",
      image: "https://via.placeholder.com/300x200?text=July+4th+Faves",
      bgColor: "bg-blue-200",
      textColor: "text-black",
    },
    {
      title: "Save big on hundreds of pet picks!",
      description: "Shop now",
      image: "https://via.placeholder.com/300x200?text=Pet+Picks",
      bgColor: "bg-blue-100",
      textColor: "text-black",
    },
    {
      title: "Hot, new beauty from $10",
      description: "Shop now",
      image: "https://via.placeholder.com/300x200?text=Beauty+$10",
      bgColor: "bg-orange-100",
      textColor: "text-black",
    },
    {
      title: "Get groceries & more delivered free with Walmart+",
      description: "Try Walmart+ for free",
      image: "https://via.placeholder.com/300x200?text=Walmart+",
      bgColor: "bg-yellow-200",
      textColor: "text-black",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${card.bgColor} ${card.textColor} flex flex-col justify-between`}
          >
            <div>
              <img src={card.image} alt={card.title} className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
            <button className="mt-2 text-blue-600 hover:underline">{card.description}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;