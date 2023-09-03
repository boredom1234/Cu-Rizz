import React, { useEffect } from "react";
import { Routes, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser);
  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Login <span className="loading loading-ring loading-sm"></span>
            </h1>
            <p className="py-6">ANWESHA.... Your Daily Vlogs Here??</p>
            <button onClick={handleLogin} className="btn btn-primary">
              Login Cutie
            </button>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - Rajdeep Banik</p>
        </aside>
      </footer>
    </>
  );
};

export default Login;
