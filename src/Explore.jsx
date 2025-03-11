import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Explore.css";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="explore-container">
      <h1 className="explore-title">Explore Our Collection</h1>
      <div className="explore-list">
        {[
          {
            name: "TESLA CYBERTRUCK",
            img: "https://wallpapers.com/images/hd/tesla-cybertruck-m829kw36tvhlo9kv.jpg",
            desc: "Futuristic design with all-electric power and insane durability.",
          },
          {
            name: "TESLA",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
            desc: "Tesla, Inc. is an American multinational automotive and clean energy company.",
          },
          {
            name: "CYBERTRUCK MODEL S",
            img: "https://t4.ftcdn.net/jpg/09/67/83/65/360_F_967836598_LDV3yG9WeVBaVssOUYDCQywJQ65L6kjL.jpg",
            desc: "Hybrid supercar with an innovative aerodynamic design.",
          },
        ].map((car, index) => (
          <motion.div
            key={index}
            className="explore-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <img src={car.img} alt={car.name} className="explore-image" />
            <h2 className="explore-name">{car.name}</h2>
            <p className="explore-description">{car.desc}</p>
            <button className="explore-btn" onClick={() => navigate("/discover")}>
              Discover
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
