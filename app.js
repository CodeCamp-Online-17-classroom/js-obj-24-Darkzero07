class Sale {
  constructor(name) {
    this.name = name;
    this.name = name;
    this.name = name;
    this.name = name;
  }
  calcPrice(price, discount) {
    return price * (1 - discount);
  }
}
class Beverage extends Sale {
  constructor(name, amount, price, discount) {
    super(name);
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
}

const beverage = new Beverage("Pepsi", 3, 19, 0.1);
const discountedPrice = beverage.calcPrice(beverage.price, beverage.discount);

console.log(discountedPrice);
