export function PlantsShow(props) {
  return (
    <div>
      <h1>Plant information</h1>
      <p>Name: {props.photo.name}</p>
      <p>Species: {plant.species}</p>
      <img src ={plant.plant_image} />
      <p>Sun: {plant.sun_amount}</p>
      <p>Water Per Week: {plant.days_water}</p>
      <p>Description: {plant.description}</p>
    </div>
  );
}