import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'


function App() {

  return (
    <>
      <div
      className="relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/public/images/Bg-Hero.jpg')",
      }}
    >
      {/* Overlay hitam transparan agar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Konten di atas overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </div>
    </>
  )
}

export default App
