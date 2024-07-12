export function PlantsIndex(props) {
  return (
    <div>
      <h1>All Plants - PlantsIndex.jsx</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
        <h2>{plant.name}</h2>
        <p>species: {plant.species}</p>
        <p>image: {plant.plant_image}</p>
        <p>sun: {plant.sun_amount}</p>
        <p>water: {plant.days_water}</p>
        <p>description: {plant.description}</p>
        </div>
      ))}
    </div>
  );
}