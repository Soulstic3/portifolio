import React, { useState, useEffect } from "react";

const Slider = ({ images }) => {
  // Verifica se images existe e é um array, caso contrário usa array vazio
  const safeImages = Array.isArray(images) ? images : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slider automático
  useEffect(() => {
    if (safeImages.length <= 1 || isPaused) return; // Não animar se tiver apenas 1 imagem

    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex === safeImages.length - 1 ? 0 : prevIndex + 1) // Se não houver mais imagens reiniciar
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [safeImages.length, isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Se não houver imagens válidas
  if (safeImages.length === 0) {
    return (
      <div className="screenshot no-images">Nenhuma imagem para exibir</div>
    );
  }

  return (
    <div
      className="screenshot"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {safeImages.map(
        (
          image,
          index // Mapeia as imagens de maneira similar ao carrosel
        ) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img
              src={image.url || image}
              alt={image.alt || `Slide ${index + 1}`}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Slider;
