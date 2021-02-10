export default function(rating) {
  const gradientSize = (rating * 100) / 5;
  const y = Math.asin(2 * (gradientSize / 100) - 1) / Math.PI + 0.5;
  return (y * 100).toFixed(0);
}
