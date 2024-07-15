import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { PlantsNew } from "./PlantsNew";
import { PlantsShow } from "./PlantsShow";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";

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

  const handleClose = () => {
    console.log("handleClose");
    setIsPlantsShowVisible(false);
  };

  const handleUpdatePlant = (id, params, successCallback) => {
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

  useEffect(handlePlantsIndex, []);

  // return (
  //   <div>
  //     <h1>Welcome to Plants! Content.jsx</h1>
  //     <PlantsNew onCreatePlant={handleCreatePlant} />
  //     <PlantsIndex plants={plants} onShowPlant={handleShowPlant} />
  //     <Modal show={isPlantsShowVisible} onClose={handleClose}>
  //       <PlantsShow plant={currentPlant} onUpdatePlant={handleUpdatePlant} onDestroyPlant={handleDestroyPlant} />
  //     </Modal>
  //   </div>
  // )

  return (
    <div>
      <Routes>
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} /> */}
        <Route path="/" element={<PlantsIndex plants={plants} onShowPlant={handleShowPlant} />} />
        <Route path="/plants/new" element={<PlantsNew />} />
        <Route path="/plants" element={<PlantsIndex plants={plants} onShowPlant={handleShowPlant} />} />
      </Routes>

      <Modal show={isPlantsShowVisible} onClose={handleClose}>
        {/* <PlantsShow plant={currentPlant} onClose={handleClose} /> */}
        <h2>{currentPlant.name}</h2>
        <p>Species: {currentPlant.species}</p>
        <img src ={currentPlant.plant_image} />
        <p>Sun: {currentPlant.sun_amount}</p>
        <p>Water Per Week: {currentPlant.days_water}</p>
        <p>Description: {currentPlant.description}</p>
      </Modal>
    </div>
  );
}