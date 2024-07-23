export const getDiscountedPricePercentage = (orginalPrice, discountedPrice) => {
  const discount = orginalPrice - discountedPrice;

  const discountPercentage = (discount / orginalPrice) * 100;

  return discountPercentage.toFixed(2);
};
