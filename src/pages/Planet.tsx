import { useParams } from "react-router-dom";

import data from "../data.json";

function Planet() {
  const params = useParams();
  const planetData = data.find(
    (item) => item.name.toLocaleLowerCase() === params.planet
  );

  if (!planetData) {
    return <div>Planet not found</div>;
  }
  return (
    <div>
      {params.planet}
      <div>
        <span>{planetData.name}</span>
        <span>{planetData.radius}</span>
        <img src={planetData.images.planet} alt="" />
      </div>
    </div>
  );
}

export default Planet;
