import { useParams } from "react-router-dom";

function Planet() {
  const params = useParams();
  console.log(params);
  return <div>{params.planet}</div>;
}

export default Planet;
