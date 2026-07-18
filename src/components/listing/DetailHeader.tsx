import StarRating from "@/components/shared/StarRating";

interface DetailHeaderProps {
  title: string;
  rating: number;
  reviewsCount: number;
  location: string;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({
  title,
  rating,
  reviewsCount,
  location,
}) => {
  return (
    <section className="border-b border-gray-200 pb-6">
      <h1 className="text-xl font-semibold text-gray-900 md:text-2xl">
        {title}
      </h1>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
        <StarRating rating={rating} reviewsCount={reviewsCount} />
        <span className="text-gray-300">·</span>
        <span className="text-gray-600 underline">{location}</span>
      </div>
    </section>
  );
};

export default DetailHeader;