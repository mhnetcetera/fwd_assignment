// **List Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "CPU", harga: 4000000 },
  { id: 4, nama: "Keyboard", harga: 1000000 },
  { id: 5, nama: "Mouse", harga: 300000 }
];

// **Menambahkan Produk dengan Spread Operator**
function addProduct(id, nama, harga) {
  const newProduct = { id, nama, harga };
  produkList = [...produkList, newProduct];
  console.log(`Produk "${nama}" berhasil ditambahkan ke list produk.`);
}

// **Menghapus Produk dengan Rest Parameter**
function removeProduct(...id_List) {
  produkList = produkList.filter(produk => !id_List.includes(produk.id));
  console.log(`Produk dengan id [${id_List.join(", ")}] berhasil dihapus dari list produk.`);
}

// **Menampilkan Produk dengan Destructuring**
function showProduct() {
  console.log("Daftar Produk toko:");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`id: ${id}, Nama: ${nama}, Harga: Rp${harga.toLocaleString()}`);
  });
}

// **Event Handler**
const eventHandler = {
  add: addProduct,
  remove: removeProduct,
  show: showProduct
};

// Contoh fungsi ketika diuji coba

eventHandler.show(); // Menampilkan daftar produk pada list awal

// Menambahkan produk baru
eventHandler.add(6, "Monitor", 3500000);
eventHandler.add(7, "Speaker", 7500000);
eventHandler.add(8, "Webcam", 500000);

// Menampilkan daftar produk terupdate
eventHandler.show();

// Menghapus produk dengan id 1 dan 5
eventHandler.remove(1, 5);

// Menampilkan daftar produk terupdate
eventHandler.show();
