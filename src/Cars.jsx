import React from "react";
import "./Cars.css";
import { motion } from "framer-motion";
import Hero from "./assets/heroimage.webp"

const carVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, transition: {  duration: 0.1 } },
};

const Cars = () => {
  return (

    // <section className="img-demo">
    //     <img src={Hero}></img>
    
    <motion.div 
      className="cars-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="cars-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Our Featured Cars
      </motion.h1>

      <motion.div 
        className="cars-list"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {[
          {
            name: "Tesla Model S",
            image: "https://4kwallpapers.com/images/wallpapers/tesla-cybertruck-2880x1800-17459.jpg",
            description: "A luxurious electric car with cutting-edge technology.",
          },
          {
            name: "TESLA BENZ",
            image: "https://i.pinimg.com/736x/b9/1b/62/b91b62fdebe2972b21cb2c001f48c828.jpg",
            description: "High-performance sports car with a powerful V12 engine.",
          },
          {
            name: "CYBERBEAST",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBz4meaLed9td7qyQyu83WYhThJxRjW1A1CQ&s",
            description: "A sporty coupe with advanced driving dynamics and luxury.",
          }
        ].map((car, index) => (
          <motion.div 
            className="car-card"
            key={index}
            variants={carVariants}
            whileHover="hover"
          >
            <img src={car.image} alt={car.name} className="car-image" />
            <h2 className="car-name">{car.name}</h2>
            <p className="car-description">{car.description}</p>
            <motion.button 
              className="order-now"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Order Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    // </section>
  );
};

export default Cars;
