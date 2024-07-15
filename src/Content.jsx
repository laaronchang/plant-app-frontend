import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsNew } from "./PlantsNew";
import { PlantsShow } from "./PlantsShow";
import { Modal } from "./Modal";


export function Content() {
  const [plants, setPlants] = useState([]);
  const [isPlantsShowVisible, setIsPlantsShowVisible] = useState(false);
  const [currentPlant, setCurrentPlant] = useState({});

  const handlePlantsIndex = () => {
    console.log("handlePlantsIndex");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  }

  const handleCreatePlant = (params, successCallback) => {
    console.log("handleCreatePlant", params);
    axios.post("http://localhost:3000/plants.json", params).then((response) => {
      setPlants([...plants, response.data]);
      successCallback();
    });
  };

  const handleShowPlant = (plant) => {
    console.log("handleShowPlant", plant);
    setIsPlantsShowVisible(true);
    setCurrentPlant(plant);
  };

  const handlUpdatePlant = (id, params, successCallback) => {
    console.log("handleUpdatePlant", params);
    axios.patch("http://localhost:3000/plants/${id}.json", params).then((response) => {
      setPlants(
        plants.map((plant) => {
          if (plant.id === response.data.id) {
            return response.data;
          } else {
            return plant;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyPlant = (id) => {
    console.log("handleDestroyPlant", id);
    axios.delete("http://localhost:3000/plants/${id}.json").then((response) => {
      setPlants(plants.filter((plant) => plant.id !== id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPlantsShowVisible(false);
  };

  useEffect(handlePlantsIndex, []);

  return (
    <div>
      <h1>Welcome to Plants! Content.jsx</h1>
      <PlantsNew onCreatePlant={handleCreatePlant} />
      <PlantsIndex plants={plants} onShowPlant={handleShowPlant} />
      <Modal show={isPlantsShowVisible} onClose={handleClose}>
        <PlantsShow plant={currentPlant} onUpdatePlant={handlUpdatePlant} onDestroyPlant={handleDestroyPlant} />
      </Modal>
    </div>
  )
}