export default function(price) {
  price = String(price);
  if (price.length > 3) {
    let priceArr = price.split("").reverse();
    priceArr = priceArr.map((item, index) => {
      if (index % 3 === 0) {
        return (item = item + " ");
      } else {
        return item;
      }
    });
    return priceArr.reverse().join("");
  }
}
