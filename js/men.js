function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    document.getElementById('current-time').textContent = timeString;
}
setInterval(updateTime, 1000); 
updateTime(); 




const products = {
    tshirt: [
        { name: "T-shirt 1", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 2", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 3", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 4", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg"},
        { name: "T-shirt 5", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 6", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 7", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 8", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 9", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 10", price: "Rs 500", inStock: true, img:"./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 11", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 12", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 13", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 14", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg"},
        { name: "T-shirt 15", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 16", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 17", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 18", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 19", price: "Rs 500", inStock: true, img: "./images-men/T-shirtmen.jpg" },
        { name: "T-shirt 20", price: "Rs 500", inStock: true, img:"./images-men/T-shirtmen.jpg" },
    ],
    jeans: [
        { name: "Jeans 1", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 2", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 3", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 4", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 5", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 6", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 7", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 8", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 9", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 10", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 11", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 12", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 13", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 14", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 15", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 16", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 17", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 18", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 19", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
        { name: "Jeans 20", price: "Rs 500", inStock: true, img: "./images-men/jeansmen.jpg" },
    ],
    jackets: [
        { name: "Jacket 1", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 2", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 3", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 4", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 5", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 6", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 7", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 8", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 9", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 10", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 11", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 12", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 13", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 14", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 15", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 16", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 17", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 18", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 19", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
        { name: "Jacket 20", price: "Rs 500", inStock: true, img: "./images-men/jacketsbanner.jpg" },
    ],
    shirts: [
        { name: "Shirt 1", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 2", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 3", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 4", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 5", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 6", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 7", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 8", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 9", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 10", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 11", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 12", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 13", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 14", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 15", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 16", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 17", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 18", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 19", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
        { name: "Shirt 20", price: "Rs 500", inStock: true, img: "./images-men/shirtsmen.jpg" },
    ],
    shoes: [
        { name: "Shoe 1", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 2", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 3", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 4", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 5", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 6", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 7", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 8", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 9", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 10", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 11", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 12", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 13", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 14", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 15", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 16", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 17", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 18", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 19", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
        { name: "Shoe 20", price: "Rs 500", inStock: true, img: "./images-men/shoesbanner.jpg" },
    ],
};



const bannerImages = {
    'tshirt': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images-men/t-shirtsbanner.jpg")',
    'jeans': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images-men/jeansbanner.jpg")',
    'jackets': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images-men/jacketsbanner.jpg")',
    'shirts': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images-men/shirtbanner.jpg")',
    'shoes': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images-men/shoesbanner.jpg")'
};



function showProducts(category) {
    const productCards = document.getElementById("productCards");
    productCards.innerHTML = ""; 

    if (bannerImages[category]) {
        banner.style.backgroundImage = bannerImages[category];
    }

    products[category].forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="card-img-top">
            <div class="card-body">
                <h4 class="card-title">${product.name}</h4>
                <p class="card-text">Price: ${product.price}</p>
                <p class="stock-info">In Stock: ${product.inStock ? "Yes" : "No"}</p>
                <button class="shop-now" data-bs-toggle="modal" data-bs-target="#customModal" data-name="${product.name}" data-price="${product.price}" data-img="${product.img}">Shop Now</button>
            </div>
            <a href="#" class="cart-icon">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-tooltip">Add to Cart</span>
            </a>
        `;

        productCards.appendChild(card); 
    });

  
    attachShopNowListeners();
}

function attachShopNowListeners() {
    document.querySelectorAll('.shop-now').forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.currentTarget.getAttribute('data-name');
            basePrice = parseInt(e.currentTarget.getAttribute('data-price').replace("Rs ", "")); 
            const productImg = e.currentTarget.getAttribute('data-img');

       
            document.getElementById('productImage').src = productImg;
            document.getElementById('quantity').value = 1; 
            document.getElementById('priceValue').textContent = basePrice; 
        });
    });
}


attachShopNowListeners();




showProducts('tshirt');


const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const category = e.currentTarget.getAttribute('data-filter');
        showProducts(category);
    });
});


showProducts('tshirt');





// Modal functionality


let basePrice; 

document.querySelectorAll('.shop-now').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.currentTarget.getAttribute('data-name');
        basePrice = parseInt(e.currentTarget.getAttribute('data-price').replace("Rs ", "")); 
        const productImg = e.currentTarget.getAttribute('data-img');


        document.getElementById('productImage').src = productImg;
        document.getElementById('quantity').value = 1; 
        document.getElementById('priceValue').textContent = basePrice; 
    });
});



function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = basePrice * quantity;
    document.getElementById('priceValue').textContent = totalPrice; 
}

document.getElementById('increment').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
});

document.getElementById('decrement').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateTotalPrice();
    }
});

document.getElementById('place-order').addEventListener('click', () => {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    if (!address) {
        alert("Please enter your address.");
        return;
    }

    console.log(`Order placed: ${quantity} x ${size}, Total: Rs ${basePrice * quantity}, Address: ${address}`);

    $('#customModal').modal('hide');

   
    const animationContainer = document.getElementById('animationContainer');
    animationContainer.style.display = 'flex'; 

 
    setTimeout(() => {
        animationContainer.style.display = 'none'; 
    }, 4000);
});
