import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Bridal Lehenga",
    subtitle: "Exquisite designs for your special day",
    bg: "https://zardozipune.com/wp-content/uploads/2024/04/A-23-1-scaled-1.jpg",
    titleStyle: { color: "#ff6a3d", fontFamily: "'Playfair Display', serif", fontSize: "3.5rem" },
    subtitleStyle: { color: "#fff0f5", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
  },
  {
    title: "Designer Sarees",
    subtitle: "Elegant sarees for timeless memories",
    bg: "https://img.weddingbazaar.com/photos/pictures/001/481/667/new_medium/81803191_1061525757514874_7345967283952693797_n.jpg?1581422723",
    titleStyle: { color: "#8b3a62", fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem" },
    subtitleStyle: { color: "#fce4ec", fontFamily: "'Roboto', sans-serif", fontSize: "1.4rem" },
  },
  {
    title: "Groom Wear",
    subtitle: "Stylish outfits for the perfect groom",
    bg:  "https://weddingdresscleaninglaundry.co.uk/wp-content/uploads/2024/07/Groom-Suit-Cleaning-1.png.webp",
    titleStyle: { color: "#3e1f2b", fontFamily: "'Lora', serif", fontSize: "3.2rem" },
    subtitleStyle: { color: "#ffe4e1", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
  },
  {
    title: "Outfits",
    subtitle: "Complete your wedding look",
    bg: "https://i.pinimg.com/736x/a8/ce/4c/a8ce4ce2959b06aa03c67e3fc8a9b26d.jpg",
    titleStyle: { color: "#ff69b4", fontFamily: "'Dancing Script', cursive", fontSize: "3.5rem" },
    subtitleStyle: { color: "#fffaf0", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
  },
  {
    title: "Couples",
    subtitle: "Celebrate love and togetherness",
    bg: "https://cdn0.weddingwire.in/article/1510/original/1280/jpg/10151-indian-wedding-couple-images-photosynthesis-photography-services-best-indian-wedding-couple-images-revealed.jpeg",
    titleStyle: { color: "#ffa500", fontFamily: "'Playfair Display', serif", fontSize: "3.5rem" },
    subtitleStyle: { color: "#fff8dc", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
    },
  {
    title: "Wedding",
    subtitle: "Create your dream wedding moments",
    bg: "https://clairepettibone.com/cdn/shop/collections/Bridal-Accessories-09-2020.jpg?v=1599089947",
    titleStyle: { color: "#ff1493", fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem" },
    subtitleStyle: { color: "#ffe4e1", fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem" },
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        navigate("/home"); 
      }
    }, 5000); 
    return () => clearTimeout(timer);
  }, [currentSlide, navigate]);

  const slide = slides[currentSlide];

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: `url(${slide.bg}) center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        transition: "background 0.8s ease-in-out",
      }}
    >
      <h1
        style={{
          ...slide.titleStyle,
          marginBottom: "15px",
          textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
        }}
      >
        {slide.title}
      </h1>
      <p
        style={{
         ...slide.subtitleStyle,
          maxWidth: "600px",
          textShadow: "1px 1px 8px rgba(0,0,0,0.5)",
        }}
      >
        {slide.subtitle}
      </p>

     
      <div style={{ display: "flex", gap: "8px", marginTop: "30px" }}>
        {slides.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: currentSlide === idx ? "24px" : "12px",
              height: "12px",
              borderRadius: "6px",
              background: currentSlide === idx ? "#ff6a3d" : "#fff",
              opacity: currentSlide === idx ? 1 : 0.5,
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide