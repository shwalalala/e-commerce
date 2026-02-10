
const productList = document.getElementById("productList");

// Reusable Product Card
class ProductCard {
    constructor(name, category, price, image) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
    }

    render() {
        return `
            <div class="product">
                <img src="${this.image}" alt="${this.name}">
                <h4>${this.name}</h4>
                <p>${this.price}</p>
            </div>
        `;
    }
}

// Product list using reusable cards
const products = [
    new ProductCard("T-SKY ELITE FF MT 3", "men", "₱ 9,490.00", "images/1.jpg"),
    new ProductCard("GEL-CONTEND 9", "men", "₱4,590.00", "images/2.jpg"),
    new ProductCard("HYPERSPRINT 8", "sports", "₱6,290.00", "images/3.jpg"),
    new ProductCard("UPCOURT 6", "men", "₱4,190.00", "images/4.jpg"),
    new ProductCard("GEL-RESOLUTION X GS", "kids", "₱5,690.00", "images/5.jpg"),
    new ProductCard("GEL-KAYANO 32 ATC", "women", "₱10,990.00", "images/6.jpg"),
    new ProductCard("LYTE CLASSIC", "sportstyle", "₱5,590.00", "images/7.jpg"),
    new ProductCard("GEL-KAYANO 32 ATC", "sports", "₱10,990.00", "images/8.jpg"),
    new ProductCard("Face COURT CONTROL FF 3", "women", "₱8,690.00", "images/9.jpg"),
    new ProductCard("SKYHAND OG", "sportstyle", "₱6,590.00", "images/10.jpg")
];

function displayProducts(items) {
    productList.innerHTML = "";
    items.forEach(card => {
        productList.innerHTML += card.render();
    });
}

function filterProducts(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(
            card => card.category === category
        );
        displayProducts(filtered);
    }
}

// Initial load
displayProducts(products);