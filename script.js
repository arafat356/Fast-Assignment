//8GB memory
document.getElementById('first-memory').addEventListener('click', function () {
    updateExtraCostValue('memory-cost', 0)
});

//16GB memory
document.getElementById('second-memory').addEventListener('click', function () {
    updateExtraCostValue('memory-cost', 180)
});

//256GB storage
document.getElementById('first-storage').addEventListener('click', function () {
    updateExtraCostValue('storage-cost', 0)
});

//512GB storage
document.getElementById('second-storage').addEventListener('click', function () {
    updateExtraCostValue('storage-cost', 100)
});

//1TB  storage
document.getElementById('third-storage').addEventListener('click', function () {
    updateExtraCostValue('storage-cost', 180)
});

//Free delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    updateExtraCostValue('delivery-cost', 0)
});

//Delivery-charge
document.getElementById('delivery-charge').addEventListener('click', function () {
    updateExtraCostValue('delivery-cost', 20)
});


// Extra-cost 
function updateExtraCostValue(id, value) {
    const costElement = document.getElementById(id)
    costElement.innerText = value;
    updateTotal()
}


//Function  update 
function updateTotal() {
    const bestPriceElement = document.getElementById('best-price')
    const bestPrice = Number(bestPriceElement.innerText)

    const extraMemoryElement = document.getElementById('memory-cost')
    const extraMemoryCost = Number(extraMemoryElement.innerText)

    const extraStorageElement = document.getElementById('storage-cost')
    const extraStorageCost = Number(extraStorageElement.innerText)

    const extraDeliveryElement = document.getElementById('delivery-cost')
    const extraDeliveryCost = Number(extraDeliveryElement.innerText)

    const extraTotalCost = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;

    const extraTotalElement = document.getElementById('extra-total-money')
    const inTotalElement = document.getElementById('in-total')

    extraTotalElement.innerText = extraTotalCost;
    inTotalElement.innerText = extraTotalCost;
}

// Promo Apply
document.getElementById('apply').addEventListener('click', function () {
    const totalElement = document.getElementById('extra-total-money')
    const inTotalElement = document.getElementById('in-total')
    const promoInput = document.getElementById('promo-code')
    const promoValue = promoInput.value
    const totalAmount = Number(totalElement.innerText)

    if (promoValue == 'stevekaku') {
        const discount = (totalAmount / 100) * 20;
        inTotalElement.innerText = totalAmount - discount;
        document.getElementById('wrong-promo').classList.add("d-none")
    } else {
        document.getElementById('wrong-promo').classList.remove("d-none")
    }
    promoInput.value = ''
});