import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Default akun lokal
    const defaultUser = { username: "admin", password: "admin123" };

    if (
      username === defaultUser.username &&
      password === defaultUser.password
    ) {
      // Simpan token dummy biar keliatan "logged in"
      localStorage.setItem("token", "dummy-token");
      navigate("/Home");
    } else {
      setError("Username / Password salah");
    }
  };

  return (
    <div className="flex h-screen bg-black">
      <div className="flex-1 flex items-center justify-start">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-6 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-white text-xl mb-15 text-start">
          Log in
        </h2>
         <h2 className="text-white text-xl mb-15 text-start">
          Username : admin<br>
          Password : admin123</br>
        </h2>
        <h3 className="text-white text-md text-start mb-2">
          Username
        </h3>
        <input
          type="text"
          placeholder=" Enter Your Username"
          className="w-full p-2 mb-3 rounded bg-black text-white outline-none border border-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3 className="text-white text-md text-start mb-2">
          Password
        </h3>
        <input
          type="password"
          placeholder=" Enter Your Password"
          className="w-full p-2 mb-3 rounded bg-black text-white outline-none border border-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Sign in
        </button>
      </form>
      </div>
    <div className="flex-1 bg-[url('/src/assets/Background.png')] bg-contain bg-no-repeat bg-center flex items-center justify-center">
    <img src='/src/assets/Roket.png' alt="Roket" className="m-40 w-100 h-100"/>
        </div>
    </div>
  );
}





