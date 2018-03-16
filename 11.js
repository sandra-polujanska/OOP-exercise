function Phone (brand, price, color, os) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.os = os;
    
    Phone.prototype.printInfo = function () {
        console.log("The phone brand is " + this.brand + " , the operating system is " + this.os + " , color is " + this.color + " and the price is " + this.price + ".");
    }
}

var samsungGalaxyS6 = new Phone("Samsung", 1900, "black", "Android 5.0");
var iPhone6S = new Phone("Apple", 2200, "silver", "iOS 8");
var onePlusOne = new Phone("One Plus", 1500, "black", "Android 4.4 KitKat");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();

