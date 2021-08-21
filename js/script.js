//Update item Cost
function updateVariant(initCost, newCost) {
  const itemCost = document.getElementById(initCost);
  itemCost.innerText = newCost;
  return itemCost.innerText;
}

//Update total cost
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
}
//Ram Price Update
document.getElementById("ram-8gb-btn").addEventListener("click", function () {
  updateVariant("memory-cost", 0);
  updateTotalCost();
});
document
  .getElementById("ram-16gb-btn")
  .addEventListener("click", function ido() {
    updateVariant("memory-cost", 180);
    updateTotalCost();
  });
//SSD Price Update
document
  .getElementById("storage-256gb-btn")
  .addEventListener("click", function () {
    updateVariant("storage-cost", 0);
    updateTotalCost();
  });
document
  .getElementById("storage-512gb-btn")
  .addEventListener("click", function () {
    updateVariant("storage-cost", 100);
    updateTotalCost();
  });
document
  .getElementById("storage-1tb-btn")
  .addEventListener("click", function () {
    updateVariant("storage-cost", 180);
    updateTotalCost();
  });

//Delivery Price Update
document
  .getElementById("free-delivery-btn")
  .addEventListener("click", function () {
    updateVariant("delivery-cost", 0);
    updateTotalCost();
  });
document
  .getElementById("paid-delivery-btn")
  .addEventListener("click", function () {
    updateVariant("delivery-cost", 20);
    updateTotalCost();
  });
