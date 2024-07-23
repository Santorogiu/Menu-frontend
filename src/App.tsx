import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/card";
import useFoodData from "./hooks/useFoodData";
import { CreateModal } from "./components/card/create-modal/create-modal";

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <div className="header">
        <div className="titulo">
          <img src="../public/cook-svgrepo-com.svg" alt="cookBook" />
          <h1>Cardápio</h1>
        </div>

        <button onClick={handleOpenModal} className="Btn">
          <div className="sign">+</div>
          <div className="text">Adicionar</div>
        </button>
      </div>

      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            key={foodData.id}
            id={foodData.id}
            price={foodData.price}
            title={foodData.title}
            description={foodData.description}
            image={foodData.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
