import Image from "next/image";

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  // Determine shadow color based on title for visual hierarchy
  const getShadowStyle = (title: string) => {
    switch (title.toLowerCase()) {
      case 'current price':
        return 'shadow-[3px_0_0_0_rgba(81,23,100,0.3)] bg-gradient-to-r from-primary/5 to-primary/10';
      case 'average price':
        return 'shadow-[3px_0_0_0_rgba(59,130,246,0.3)] bg-gradient-to-r from-blue-50 to-blue-100';
      case 'highest price':
        return 'shadow-[3px_0_0_0_rgba(239,68,68,0.3)] bg-gradient-to-r from-red-50 to-red-100';
      case 'lowest price':
        return 'shadow-[3px_0_0_0_rgba(34,197,94,0.3)] bg-gradient-to-r from-green-50 to-green-100';
      default:
        return 'shadow-[3px_0_0_0_rgba(156,163,175,0.3)] bg-gradient-to-r from-gray-50 to-gray-100';
    }
  };

  return (
    <div className={`price-info_card hover:shadow-md transition-all duration-300 group ${getShadowStyle(title)}`}>
      <p className="text-black/70 tracking-tight">{title}</p>
      <div className="flex gap-1">
        <Image 
          src={iconSrc} 
          alt={title} 
          width={24} 
          height={24}
          className="group-hover:scale-110 transition-transform duration-200"
        />
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;