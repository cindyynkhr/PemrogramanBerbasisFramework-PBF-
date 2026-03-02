interface HeroSectionProps {
  onLogout: () => void;
}

const HeroSection = ({ onLogout }: HeroSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">Produk User Page</h1>
      <p className="text-gray-600 mb-6">Anda sudah login dan dapat mengakses halaman ini</p>
      <button 
        onClick={onLogout} 
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Kembali ke Login
      </button>
    </div>
  );
};

export default HeroSection;
