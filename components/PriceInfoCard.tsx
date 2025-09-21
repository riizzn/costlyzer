import Image from "next/image";

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  return (
    <div className="flex flex-col gap-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 shadow-md hover:shadow-lg transition">
      <p className="text-sm text-gray-500 tracking-tight">{title}</p>
      <div className="flex items-center gap-2">
        <div className="p-2 bg-white rounded-lg shadow-sm">
          <Image src={iconSrc} alt={title} width={22} height={22} />
        </div>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
