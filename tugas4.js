//Membuat class pelanggan
class customer {
  constructor(name, cellphoneNumber, vehicleRented) {
    this.name = name; //Nama pelanggan
    this.cellphoneNumber =cellphoneNumber; //Nomor Telepon Pelanggan
    this.vehicleRented = vehicleRented; //Kendaraan yang disewa pelanggan
  }

//Menampilkan informasi pelanggan
info() {
    return `${this.name} (${this.cellphoneNumber}) rented ${this.vehicleRented.info()}`;
  }
}

//Membuat class kendaraan
class vehicle{
  constructor(brand, type) {
    this.brand = brand;      // Contoh: NMAX, Avanza, dll
  }

//Menampilkan informasi kendaraan
info() {
    return `${this.brand}`;
  }
}

//Membuat class sistem rental
class rentalSystem {
  constructor() {
    this.customerList = [];  // Menyimpan data pelanggan
  }

//Menambahkan data pelanggan baru
  addCustomer(customer) {
    this.customerList.push(customer);
  }

//Menampilkan data pelanggan yang sudah bertransaksi maupun ketika belum ada pelanggan
  showCustomerlist() {
    if (this.customerList.length === 0) {
      console.log("No one has rented the vehicle.");
      return;
    }
    this.customerList.forEach(customer => {
      console.log(customer.info());
    });
  }
}

//Data kendaraan
let Avanza = new vehicle("Avanza");
let Brio = new vehicle("Brio");
let NMAX = new vehicle("NMAX");
let Aerox = new vehicle("Aerox");

//Membuat sistem rental
let system = new rentalSystem();

//Uji coba sistem

//Menambahkan data pelanggan
let customer1 = new customer("Imelda", "08987654321", Avanza);
let customer2 = new customer("Kiky", "089876543333", NMAX);
let customer3 = new customer("Joan", "08987654322", Aerox);

// Menambahkan pelanggan ke dalam sistem rental yang telah dibuat
system.addCustomer(customer1);
system.addCustomer(customer2);
system.addCustomer(customer3);

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan
console.log("Our current customers list: ");
system.showCustomerlist();
