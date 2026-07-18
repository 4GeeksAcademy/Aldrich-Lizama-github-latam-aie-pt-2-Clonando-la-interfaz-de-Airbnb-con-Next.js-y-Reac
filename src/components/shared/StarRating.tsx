interface StarRatingProps {
  rating: number;
  reviewsCount: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, reviewsCount }) => {
  return (
    <span className="flex items-center gap-1 text-sm">
      <svg className="h-3 w-3 fill-current" viewBox="0 0 16 16">
        <path d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8l-4.2 2.2.8-4.7L1.2 6l4.7-.7L8 1z" />
      </svg>
      <span className="font-semibold">{rating}</span>
      <span className="text-gray-500">({reviewsCount})</span>
    </span>
  );
};

export default StarRating;
