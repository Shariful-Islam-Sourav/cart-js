//Update Each item Cost
function updateVariantCost(initCost, newCost) {
  const itemCost = document.getElementById(initCost);
  itemCost.innerText = newCost;
  return itemCost.innerText;
}

//Update total  & grand total
function updateTotalCost() {
  const ramPrice = parseFloat(document.getElementById("memory-cost").innerText);
  const ssdPrice = parseFloat(
    document.getElementById("storage-cost").innerText
  );
  const deliveryPrice = parseFloat(
    document.getElementById("delivery-cost").innerText
  );
  const totalCost = 1299 + ramPrice + ssdPrice + deliveryPrice;
  document.getElementById("total-cost").innerText = totalCost;

  //Update grand total
  document.getElementById("grand-total").innerText = totalCost;
}
//Ram Price Handler
document.getElementById("ram-8gb-btn").addEventListener("click", function () {
  updateVariantCost("memory-cost", 0);
  updateTotalCost();
});
document
  .getElementById("ram-16gb-btn")
  .addEventListener("click", function ido() {
    updateVariantCost("memory-cost", 180);
    updateTotalCost();
  });
//SSD Price Handler
document
  .getElementById("storage-256gb-btn")
  .addEventListener("click", function () {
    updateVariantCost("storage-cost", 0);
    updateTotalCost();
  });
document
  .getElementById("storage-512gb-btn")
  .addEventListener("click", function () {
    updateVariantCost("storage-cost", 100);
    updateTotalCost();
  });
document
  .getElementById("storage-1tb-btn")
  .addEventListener("click", function () {
    updateVariantCost("storage-cost", 180);
    updateTotalCost();
  });

//Delivery Price Handler
document
  .getElementById("free-delivery-btn")
  .addEventListener("click", function () {
    updateVariantCost("delivery-cost", 0);
    updateTotalCost();
  });
document
  .getElementById("paid-delivery-btn")
  .addEventListener("click", function () {
    updateVariantCost("delivery-cost", 20);
    updateTotalCost();
  });

//Coupon Offer Update Handler
document.getElementById("coupon-btn").addEventListener("click", function () {
  const previousTotalCost = document.getElementById("total-cost").innerText;
  const coupon = document.getElementById("coupon-code");
  const couponCode = coupon.value;
  if (couponCode == "stevekaku") {
    document.getElementById("grand-total").innerText =
      previousTotalCost - previousTotalCost * 0.2;
  } else {
    coupon.value = "";
  }
});

// ------------------------END OF CODE---------------------------