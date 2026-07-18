interface PropertyDescriptionProps {
  description: string;
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
  description,
}) => {
  return (
    <section className="border-b border-gray-200 pb-6">
      <p className="text-sm leading-relaxed text-gray-700">{description}</p>
    </section>
  );
};

export default PropertyDescription;