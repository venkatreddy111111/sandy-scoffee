function customizeOrder(item) {
    let customization = prompt(`Customize your ${item}. Please specify any additions or changes:`);
    addToOrder(item, customization);
}

function addToOrder(item, customization) {
    let orderDetails = document.getElementById('order-details');
    let orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `<strong>${item}</strong>: ${customization}`;
    orderDetails.appendChild(orderItem);
}
