export function PlantsShow(props) {
  return (
    <div>
      <h1>Plant information</h1>
      <p>Name: {props.plant.name}</p>
      <p>Species: {props.plant.species}</p>
      <img src ={props.plant.plant_image} />
      <p>Sun: {props.plant.sun_amount}</p>
      <p>Water Per Week: {props.plant.days_water}</p>
      <p>Description: {props.plant.description}</p>
    </div>
  );
}