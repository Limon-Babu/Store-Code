class Store {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.stock = {};
    this.prices = {};
    this.totalSales = 0;
  }
  isItemAvaiable(name) {
    var itemIndex = this.items.indexOf(name);
    if (itemIndex == -1) {
      return false
    } else {
      return true
    }
  }
  getprice(name) {
    var isAvailAble = this.isItemavilable(name);
    if (isAvailAble == true) {
      var price = this.prices[name];
      return price
    } else {
      console.log("Sorry, We do not have", name);
    }
  }
  getTotalSales() {
    return this.totalSales;
  }
  sellItem(name, quantity) {
    var available = this.stock[name];
    if (available < quantity) {
      console.log("Sorry, We do not have enough");
      return
    } else {
      var itemPrice = this.getprice(name);
      var currentSale = itemPrice * quantity;
      this.totalSales = this.totalSales + currentSale;
      var remaining = available - quantity;
      this.stock[name] = remaining;
      console.log("Thank You for your purchase");
    }
  }