export function PlantsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlant(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Plant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Species: <input name="species" type="text" />
        </div>
        <div>
          Image Url: <input name="plant_image" type="text" />
        </div>
        <div>
          Amount of Sun: <input name="sun_amount" type="text" />
        </div>
        <div>
          Days to Water: <input name="days_water" type="integer" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create Plant</button>
      </form>
    </div>
  );
}