import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../LIb/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="w-full">
      <ToastContainer />
      <section className="w-full h-[300px] flex flex-col justify-center items-center bg-gray-100 relative">
        <h1 className="text-4xl font-bold text-gray-900">Account</h1>
        <p className="mt-2 text-gray-500">
          <Link to={"/"}>Home</Link> / Account
        </p>
      </section>

      <section className="w-full flex justify-center py-20 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between mb-1">
                <label className="text-gray-700 font-medium">Password</label>
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
              >
                Sign In
              </button>
              <Link
                to={"/register"}
                className="text-sm text-gray-500 hover:underline"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
