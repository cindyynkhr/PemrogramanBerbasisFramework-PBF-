const MainSection = () => {
  const dummyProducts = [
    { id: 1, name: "Laptop", price: "Rp 8.000.000", image: "💻" },
    { id: 2, name: "Mouse", price: "Rp 150.000", image: "🖱️" },
    { id: 3, name: "Keyboard", price: "Rp 500.000", image: "⌨️" },
    { id: 4, name: "Monitor", price: "Rp 1.500.000", image: "🖥️" },
    { id: 5, name: "Headset", price: "Rp 300.000", image: "🎧" },
  ];

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Daftar Produk</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition">
            <div className="text-5xl mb-4">{product.image}</div>
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
              Tambah Keranjang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
