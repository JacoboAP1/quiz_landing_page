import { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Collar Elegance",
    precio: "$45",
    imagen:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
  },
  {
    id: 2,
    nombre: "Pulsera Golden",
    precio: "$30",
    imagen:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
  },
  {
    id: 3,
    nombre: "Anillo Luxury",
    precio: "$25",
    imagen:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
];

export default function BisuteriaSection() {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % productos.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + productos.length) % productos.length);
  };

  return (
    <div style={styles.container}>
      {/* TITULO */}
      <h1 style={styles.titulo}>Colección Exclusiva</h1>
      <p style={styles.subtitulo}>
        Bisutería elegante diseñada para resaltar tu estilo.
      </p>

      {/* BENEFICIOS */}
      <div style={styles.beneficios}>
        <div style={styles.beneficio}>
          ✨ Diseños exclusivos
        </div>

        <div style={styles.beneficio}>
          🚚 Envíos rápidos
        </div>

        <div style={styles.beneficio}>
          💎 Material premium
        </div>
      </div>

      {/* CARRUSEL */}
      <div style={styles.carousel}>
        <button onClick={anterior} style={styles.boton}>
          ◀
        </button>

        <div style={styles.card}>
          <img
            src={productos[index].imagen}
            alt={productos[index].nombre}
            style={styles.imagen}
          />

          <h2>{productos[index].nombre}</h2>

          <p style={styles.precio}>
            {productos[index].precio}
          </p>

          <button style={styles.comprar}>
            Comprar
          </button>
        </div>

        <button onClick={siguiente} style={styles.boton}>
          ▶
        </button>
      </div>

      {/* CARACTERISTICAS */}
      <div style={styles.features}>
        <div style={styles.featureCard}>
          <h3>Elegancia</h3>
          <p>
            Diseños modernos y sofisticados.
          </p>
        </div>

        <div style={styles.featureCard}>
          <h3>Calidad</h3>
          <p>
            Materiales resistentes y brillantes.
          </p>
        </div>

        <div style={styles.featureCard}>
          <h3>Estilo</h3>
          <p>
            Perfecto para cualquier ocasión.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    background: "#fdf8f5",
    textAlign: "center",
    fontFamily: "Arial",
  },

  titulo: {
    fontSize: "42px",
    color: "#b8860b",
  },

  subtitulo: {
    color: "#555",
    marginBottom: "30px",
  },

  beneficios: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },

  beneficio: {
    background: "white",
    padding: "15px 25px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "50px",
  },

  card: {
    width: "320px",
    background: "white",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
  },

  imagen: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "15px",
  },

  precio: {
    color: "#b8860b",
    fontSize: "22px",
    fontWeight: "bold",
  },

  comprar: {
    background: "#b8860b",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  boton: {
    background: "#b8860b",
    color: "white",
    border: "none",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "18px",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  featureCard: {
    width: "220px",
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};