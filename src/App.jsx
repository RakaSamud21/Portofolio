import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function HomePage() {
  return (
    <div className="min-h-screen items-center justify-center bg-black text-white p-5 space-y-10">
      <div className="w-[90%] mx-auto mt-10 p-10 rounded-3xl border border-white backdrop-blur-md bg-[url('/Elipse.png')] bg-cover bg-end bg-no-repeat m-5">
        <div className="flex gap-6 mb-6 justify-end">
          <span className="px-4 py-1 rounded-full bg-purple-600 text-white text-sm font-semibold">
            Report
          </span>
          <span className="text-gray-200">Stock</span>
          <span className="text-gray-200">Crypto</span>
        </div>

        <h1 className="text-white text-3xl font-coolveticarg leading-relaxed text-center p-20 mb-20">
          Be <span className="bg-red-500 text-white px-2">Fearful</span> when
          others are Greedy <br /> and{" "}
          <span className="bg-green-500 text-white px-2">Greedy</span> when
          others are Fearful
        </h1>
      </div>

      <div className="w-[90%] mx-auto mt-10 p-10 rounded-3xl border border-gray-400/50 backdrop-blur-md bg-white/5 shadow-xl m-5">
        <h1 className="text-white text-3xl font-coolveticarg leading-relaxed text-center p-20 mb-20">
          Investasi itu penting, tapi{" "}
          <span className="bg-blue-500 text-white px-2">jangan lupa</span> untuk
          tetap Bersedekah
        </h1>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<HomePage />} />
    </Routes>
  );
}
