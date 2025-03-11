import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <motion.div
        className="login-box"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="login-title">Welcome Back</h2>
        <motion.input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          whileFocus={{ scale: 1.05, boxShadow: "0px 0px 12px cyan" }}
        />
        <motion.input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          whileFocus={{ scale: 1.05, boxShadow: "0px 0px 12px cyan" }}
        />
        <motion.button
          className="login-button"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px cyan" }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
        <p className="login-footer">Forgot Password? | Sign Up</p>
      </motion.div>
    </div>
  );
}

export default Login;
