import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/mercury");
  });
  return <div>home</div>;
}
export default Home;
