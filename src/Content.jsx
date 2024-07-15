import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsNew } from "./PlantsNew";
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
    setIsPlantsShowVisible(false);
    setCurrentPlant(plant);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPlantsShowVisible(true);
  };

  useEffect(handlePlantsIndex, []);

  return (
    <main>
      <h1>Welcome to Plants! Content.jsx</h1>
      <PlantsNew onCreatePlant={handleCreatePlant} />
      <PlantsIndex plants={plants} onShowPlant={handleShowPlant} />
      <Modal show={isPlantsShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </main>
  )
}