export const CouponValidation = (data: any, amount: Number) => {
  const errors: any = {};
  let couponAmount = 0;

  if (data.type === "flat") {
    if (amount > data.minOrderValue) {
      couponAmount = data.discount;
      //   if (couponAmount > data.maxDiscount) {
      //     couponAmount = data.maxDiscount;
      //   }
    } else {
      errors.discount = `Minimum order should be morethan ${data.minOrderValue}`;
    }
  } else {
    if (amount > data.minOrderValue) {
      couponAmount = (amount as number) * (data.discount / 100);
      if (couponAmount > data.maxDiscount) {
        couponAmount = data.maxDiscount;
      } else {
        errors.discount = `Minimum Order should be morethan ${data.minOrderValue}`;
      }
    }
  }

  return { errors, couponAmount: couponAmount.toFixed(2) };
};
