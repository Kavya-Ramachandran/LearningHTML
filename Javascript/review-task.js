async function getuserdata(id) {
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData;
        }
        return Promise.reject(new Error(response.statusText));
    }
    catch (error) {
        console.error(error.message);
    }
}
Promise.all([getuserdata(1), getuserdata(2), getuserdata(1703)])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

Promise.allSettled([getuserdata(1), getuserdata(2), getuserdata(103)])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

Promise.any([getuserdata(1), getuserdata(2), getuserdata(103)])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

Promise.race([getuserdata(1), getuserdata(2), getuserdata(103)])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

//rest parameter

class Student {
    constructor(name, ...grades) {
        this.name = name;
        this.grades = grades;
    }
    average() {
        const total = this.grades.reduce((sum, g) => sum + g, 0);
        return total / this.grades.length;
    }
}
const Studentname = new Student("Kavya", 80, 90, 95);
console.log(`${Studentname.name}'s average:`, Studentname.average());

//Classes

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addProduct(product, quantity = 1) {
        const item = this.items.find(item => item.product.id === product.id);
        if (item) {
            item.quantity += quantity;
        }
        else {
            this.items.push(new Cart(product, quantity));
        }
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalAmount() {
        return this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
    }

    showCart() {
        if (this.items.length === 0) {
            console.log("Your cart is empty");
            return;
        }
        console.log("Cart Items:");
        this.items.forEach(item => {
            console.log(`${item.product.name}x${item.quantity}=₹${item.getTotalPrice()}`);
        });

        console.log(`Total:₹${this.getTotalAmount()}`);
    }
}

const productOne = new Product(1, "Laptop", 30000);
const productTwo = new Product(2, "Bluetooth", 40000);
const productThree = new Product(3, "Watch", 12000);

const cart = new ShoppingCart();

cart.addProduct(productOne);
cart.addProduct(productTwo, 2);
cart.addProduct(productThree, 3);

cart.showCart();
console.log("Remove bluetooth");
cart.removeProduct(2);

cart.showCart();

//Destructuring:

const storeData = {
    storeName: "Tech Bazaar",
    location: {
        city: "Bangalore",
        country: "India",
        coordinates: {
            lat: 12.9716,
            lng: 77.5946
        }
    },
    categories: [
        {
            id: 1,
            name: "Electronics",
            products: [
                {
                    id: 101,
                    name: "Laptop",
                    price: 55000,
                    specs: {
                        brand: "Dell",
                        ram: "16GB",
                        storage: ["512GB SSD", "1TB HDD"],
                        warranty: {
                            period: "2 years",
                            provider: "Dell Service Center"
                        }
                    },
                    reviews: [
                        { user: "Alice", rating: 4.5, comments: ["Good performance", "Battery life decent"] },
                        { user: "Bob", rating: 3.8, comments: ["Slightly heavy", "Display is sharp"] }
                    ]
                },
                {
                    id: 102,
                    name: "Smartphone",
                    price: 30000,
                    specs: {
                        brand: "Samsung",
                        ram: "8GB",
                        storage: ["128GB", "256GB"],
                        warranty: {
                            period: "1 year",
                            provider: "Samsung Care"
                        }
                    },
                    reviews: []
                }
            ]
        },
        {
            id: 2,
            name: "Books",
            products: [
                {
                    id: 201,
                    name: "JavaScript Mastery",
                    price: 999,
                    authors: [
                        { name: "John Doe", nationality: "US" },
                        { name: "Anita Sharma", nationality: "India" }
                    ],
                    tags: ["Programming", "JavaScript", "Web Development"]
                }
            ]
        }
    ],
    customers: [
        {
            id: "C1",
            name: "Ravi Kumar",
            orders: [
                {
                    orderId: "O1001",
                    items: [
                        { productId: 101, qty: 1 },
                        { productId: 201, qty: 2 }
                    ],
                    shippingAddress: {
                        street: "MG Road",
                        city: "Bangalore",
                        pincode: "560001"
                    },
                    status: "Delivered"
                }
            ]
        },
        {
            id: "C2",
            name: "Sophia Lee",
            orders: []
        }
    ]
};

const { storeName, location, categories, customers } = storeData;
console.log(storeName);

const {
    location: {
        city,
        country,
        coordinates: { lat, lng }
    }
} = storeData;
console.log(city);
console.log(lat);
console.log(lng);

const {
    categories: [
        {
            name: firstCategoryName,
            products: [
                {
                    name: firstProductName,
                    price: firstProductPrice,
                    specs: {
                        brand,
                        ram,
                        storage,
                        warranty: { period, provider }
                    }, reviews }]
        }] } = storeData;
console.log(firstCategoryName);
console.log(firstProductName);
console.log(firstProductPrice);
console.log(brand);
console.log(ram);
console.log(storage);
console.log(period);
console.log(provider);

const {
    categories: [, { products: [book] }]
} = storeData;
const {
    name: bookName,
    authors,
    tags
} = book;
console.log(bookName);
console.log(authors[0].name);
console.log(authors[1].name);
console.log(tags);

//iterator and generator
const valus = ["kavya", "sundhar", "welcome"]
function gettingvalue() {
    for (const names of valus)
        yield names
}

const yielding = gettingvalue()
console.log((yielding().next()));

let value = [1, 2, 3, 4]
let iterator = {
    data: value,
    index: 0,
    next() {
        if (this.data > this.index) {
            return this.data[this.index++]
        }
        else {
            return "false";
        }
    }

}
console.log(iterator.next());

