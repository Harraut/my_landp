import React, { useState, useEffect, useRef, useCallback, memo } from 'react';

// Datos de los miembros del equipo (movidos fuera del componente para evitar recreaciones)
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Ana Martínez",
    role: "CEO & Fundadora",
    image: "/api/placeholder/300/400?text=AnaM", // Cambiado a placeholder seguro
    bio: "Visionaria con más de 15 años de experiencia en el sector tecnológico."
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "CTO",
    image: "/api/placeholder/300/400?text=CarlosR",
    bio: "Ingeniero de software especializado en arquitecturas escalables."
  },
  {
    id: 3,
    name: "Elena Gómez",
    role: "Directora de Diseño",
    image: "/api/placeholder/300/400?text=ElenaG",
    bio: "Apasionada por crear experiencias de usuario intuitivas y atractivas."
  },
  {
    id: 4,
    name: "Miguel López",
    role: "Desarrollador Senior",
    image: "/api/placeholder/300/400?text=MiguelL",
    bio: "Experto en React y arquitecturas frontend modernas."
  },
  {
    id: 5,
    name: "Laura Sánchez",
    role: "Marketing Manager",
    image: "/api/placeholder/300/400?text=LauraS",
    bio: "Estratega digital con enfoque en crecimiento y adquisición de usuarios."
  },
  {
    id: 6,
    name: "David Torres",
    role: "Product Manager",
    image: "/api/placeholder/300/400?text=DavidT",
    bio: "Especialista en desarrollo de productos centrados en el usuario."
  },
  {
    id: 7,
    name: "Sofía Navarro",
    role: "UX Researcher",
    image: "/api/placeholder/300/400?text=SofiaN",
    bio: "Investigadora que transforma datos de usuarios en insights accionables."
  },
  {
    id: 8,
    name: "Pablo Vargas",
    role: "Frontend Developer",
    image: "/api/placeholder/300/400?text=PabloV",
    bio: "Creativo desarrollador con pasión por interfaces elegantes y funcionales."
  },
  {
    id: 9,
    name: "Carmen Ortiz",
    role: "Backend Developer",
    image: "/api/placeholder/300/400?text=CarmenO",
    bio: "Especialista en APIs y sistemas distribuidos de alto rendimiento."
  },
  {
    id: 10,
    name: "Javier Ramos",
    role: "DevOps Engineer",
    image: "/api/placeholder/300/400?text=JavierR",
    bio: "Experto en infraestructura cloud y despliegues automatizados."
  },
  {
    id: 11,
    name: "María Díaz",
    role: "Data Scientist",
    image: "/api/placeholder/300/400?text=MariaD",
    bio: "Analista de datos con enfoque en machine learning e inteligencia artificial."
  },
  {
    id: 12,
    name: "Alejandro Ruiz",
    role: "Customer Success",
    image: "/api/placeholder/300/400?text=AlejandroR",
    bio: "Dedicado a garantizar la mejor experiencia para nuestros clientes."
  }
];

// Componente de tarjeta de miembro optimizado con memo
const MemberCard = memo(({ member, isActive, cardPosition, onClick }) => {
  // Función para determinar la clase de transformación según la posición
  const getCardTransform = () => {
    if (cardPosition === 0) return 'card-active';
    if (Math.abs(cardPosition) === 1) return cardPosition < 0 ? 'card-prev' : 'card-next';
    if (Math.abs(cardPosition) === 2) return cardPosition < 0 ? 'card-far-prev' : 'card-far-next';
    return 'card-hidden';
  };

  return (
    <div
  className={`min-w-full sm:min-w-1/2 md:min-w-1/3 px-4 snap-center ${getCardTransform()}`}>
      <div 
        className={`
          perspective-1000 group cursor-pointer
          w-full max-w-sm mx-auto transition-all duration-500
          transform-style-3d
          ${isActive ? 'z-10 scale-100' : 'scale-90'}
          ${Math.abs(cardPosition) <= 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClick}
      >
        <div className="relative w-full rounded-xl shadow-xl transition-all duration-500 transform group-hover:rotate-y-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transform z-10 transition-all duration-500 opacity-70 group-hover:opacity-90"></div>
          
          {/* Frontal de la tarjeta */}
          <div className="relative z-20 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden p-6 flex flex-col h-96 border border-white border-opacity-20">
            <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white card-image-container">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 card-image"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-blue-200 font-medium mb-2">{member.role}</p>
            <p className="text-blue-100 text-sm flex-grow">{member.bio}</p>
            
            <div className="flex justify-center space-x-4 mt-4">
              <button className="w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 flex items-center justify-center transition-all">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 flex items-center justify-center transition-all">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.33 10.33 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 flex items-center justify-center transition-all">
                <span className="sr-only">Email</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

MemberCard.displayName = 'MemberCard';

// Componente principal
const Members = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  // Reiniciar el intervalo de autodesplazamiento cuando cambia dragging
  useEffect(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    if (!dragging) {
      autoScrollRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % TEAM_MEMBERS.length);
      }, 5000);
    }
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [dragging]);

  // Actualizar la posición del carrusel cuando cambia el índice activo
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  // Manejadores de eventos para arrastrar (drag) usando useCallback
  const handleMouseDown = useCallback((e) => {
    setDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  }, []);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
    
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 3;
      const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), TEAM_MEMBERS.length - 1));
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!dragging) return;
    e.preventDefault();
    
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador para ajustar la sensibilidad
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }, [dragging, startX, scrollLeft]);

  const handleTouchStart = useCallback((e) => {
    setDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!dragging) return;
    
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }, [dragging, startX, scrollLeft]);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TEAM_MEMBERS.length - 1));
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-blue-900 to-indigo-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Conoce al increíble equipo que hace posible nuestra misión día a día.
          </p>
        </div>
        
        {/* Carrusel 3D */}
        <div className="relative overflow-hidden py-8">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory overflow-x-hidden"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {TEAM_MEMBERS.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                isActive={index === activeIndex}
                cardPosition={index - activeIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          {/* Controles de navegación */}
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center z-30 focus:outline-none transition-all"
            onClick={goToPrevSlide}
            aria-label="Anterior miembro"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center z-30 focus:outline-none transition-all"
            onClick={goToNextSlide}
            aria-label="Siguiente miembro"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {TEAM_MEMBERS.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-30 hover:bg-opacity-50'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al miembro ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Estilos CSS */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        /* Clases para las posiciones del carrusel */
        .card-active {
          z-index: 20;
          transform: translateX(0) scale(1);
          opacity: 1;
        }
        .card-prev {
          z-index: 10;
          transform: translateX(-30%) scale(0.9) rotateY(-10deg);
          opacity: 0.9;
        }
        .card-next {
          z-index: 10;
          transform: translateX(30%) scale(0.9) rotateY(10deg);
          opacity: 0.9;
        }
        .card-far-prev {
          z-index: 5;
          transform: translateX(-60%) scale(0.8) rotateY(-20deg);
          opacity: 0.7;
        }
        .card-far-next {
          z-index: 5;
          transform: translateX(60%) scale(0.8) rotateY(20deg);
          opacity: 0.7;
        }
        .card-hidden {
          opacity: 0;
          pointer-events: none;
        }

        .card-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 50%;
          border: 4px solid white;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease-in-out;
        }

        .group:hover .card-image {
          transform: scale(1.1) rotateZ(5deg);
        }

        @media (max-width: 768px) {
          .card-prev, .card-next {
            transform: translateX(0) scale(0.95) rotateY(0);
            opacity: 1;
          }
          .card-far-prev, .card-far-next {
            transform: translateX(0) scale(0.85) rotateY(0);
            opacity: 0.7;
          }
          .md\\:min-w-1\\/3 {
            min-width: 50%;
          }
          .sm\\:min-w-1\\/2 {
            min-width: 80%;
          }
          .min-w-full {
            min-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .card-prev, .card-next, .card-far-prev, .card-far-next {
            transform: translateX(0) scale(1) rotateY(0);
            opacity: 1;
          }
          .md\\:min-w-1\\/3 {
            min-width: 100%;
          }
          .sm\\:min-w-1\\/2 {
            min-width: 100%;
          }
          .min-w-full {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Members;