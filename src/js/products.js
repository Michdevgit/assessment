/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  // Existing products...

  {
    id: "204",
    title: "Ferrari F8 Tributo",
    description:
      "The Ferrari F8 Tributo is a mid-engine supercar that pays homage to the brand's most powerful V8 models. With its 3.9-liter twin-turbo V8 engine producing 710 horsepower and advanced aerodynamics, it offers breathtaking performance and agility.",
    price: 550000,
    discontinued: false,
    categories: ["FER-SUPERCAR"],
    imageUrl: "https://www.ferrari.com/en-EN/auto/f8-tributo" 
  },

  {
    id: "205",
    title: "Ferrari Roma",
    description:
      "The Ferrari Roma is a modern masterpiece that combines timeless design with cutting-edge technology. Its 3.9-liter V8 engine produces 612 horsepower, and the car's streamlined bodywork exudes elegance and style.",
    price: 280000,
    discontinued: false,
    categories: ["FER-GT"],
    imageUrl: "https://images.app.goo.gl/wcjTRNpj5Een8a6j9" 
  },

  {
    id: "206",
    title: "Ferrari 488 Pista Spider",
    description:
      "The Ferrari 488 Pista Spider is a limited-edition convertible version of the 488 Pista. Its 3.9-liter twin-turbo V8 engine produces 710 horsepower and allows it to accelerate from 0 to 60 mph in just 2.85 seconds.",
    price: 650000,
    discontinued: false,
    categories: ["FER-CONVERTIBLE", "FER-SUPERCAR"],
    imageUrl: "https://images.app.goo.gl/VGVH7RhQB4ZzRXzGA" 
  },
];
