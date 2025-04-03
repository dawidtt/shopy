function ProductCard({ title, price, image, rating }) {
  return (
    <div className="rounded-xl shadow-xl p-6">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{rating.rate}</p>
      <p>${price}</p>
    </div>
  );
}

export default ProductCard;
