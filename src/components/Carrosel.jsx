import React, { useState, useRef } from "react";

const Carrosel = ({ images = [] }) => {
  const [slideAtual, setSlideAtual] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const carroselRef = useRef(null);

  const proximoSlide = () => { // Avançar slide com botão
    setSlideAtual((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const slideAnterior = () => { // Voltar slide com botão
    setSlideAtual((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => { // Mapear toque para capturar movimento
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    // Limiar para considerar como swipe
    if (Math.abs(diff) > 50) { 
      if (diff > 0) {
        proximoSlide(); // Swipe para esquerda
      } else {
        slideAnterior(); // Swipe para direita
      }
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => { // Parar de capturar movimento
    setIsSwiping(false);
  };

  if (images.length === 0) {
    return <div>Nenhuma imagem disponível</div>;
  }

  return (
    <div
      className="carrosel"
      ref={carroselRef}
      onTouchStart={handleTouchStart} // Chama a função dentro do elemento para mudar o slide apenas dentro do elemento
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button onClick={slideAnterior} className="carrosel-button"> 
        &lt;
      </button>

      <div className="carrosel-container">
        {images.map((image, index) => ( // Mapear array para pegar imagens e index
          <div
            key={index} // Usa index como indentificador para exibir slide
            className={`slide ${index === slideAtual ? "ativo" : ""}`}
          >
            {index === slideAtual && (
              <img 
                src={image.url} // Pega url da imagem no json
                alt={`Slide ${index}`}
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>
        ))}
      </div>

      <button onClick={proximoSlide} className="carrosel-button">
        &gt;
      </button>

      <div className="indicadores">
        {images.map((_, index) => ( // Cria um identificador para cada imagem usando o index como base
          <button
            key={index}
            className={`indicador ${index === slideAtual ? "ativo" : ""}`} // Define o slide ativo equivalente ao identificador caso for clicado
            onClick={() => setSlideAtual(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrosel;
