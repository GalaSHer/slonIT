function sumUpPurchases(purchasesArr) {
  let totalAmount = 0;
  purchasesArr.forEach(purchase => {
    totalAmount += purchase;
  });
  return totalAmount;
}

let topBuyersPurchases = [10000, 20000, 30000];
console.log(sumUpPurchases(topBuyersPurchases));