function getOrders() {
    
    axios.get('http://localhost:3000/order-item').then(response => {
        const orders = response.data;
        // Get the container element to display the order items
        document.getElementById('hidden-form').style.display = "none";
        const container = document.getElementById("productContainer");
        container.innerHTML = "";
        container.style.display = "flex";
        // Iterate over each order
        orders.forEach(order => {

            // Create a new div element for each order
            const orderDiv = document.createElement("div");
            orderDiv.classList.add("order-item");

            // Display the order details
            const orderId = document.createElement("h3");
            orderId.textContent = "Order ID: " + order.id;
            orderDiv.appendChild(orderId);

            const items = document.createElement("ul");
            order.products.forEach(item => {
                console.log(item)
                const listItem = document.createElement("li");
                listItem.textContent = item.title + " - Quantity: " + item.orderItem.quantity;
                items.appendChild(listItem);
            });
            orderDiv.appendChild(items);

            // Add the order div to the container
            container.appendChild(orderDiv);
        });
    })
        .catch(error => {
            console.log(error);
        });
}