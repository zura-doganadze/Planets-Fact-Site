import { Link } from "react-router-dom";


import * as HeaderStyles from "./HeaderStyles"; // Adjust the path accordingly

const { Wrapper, Container } = HeaderStyles;

export default function Header() {
  return (
    <Wrapper>
      <h1>the planets</h1>
      <nav>
        <Link to="/mercury">mercury</Link>
        <Link to="/venus">venus</Link>
        <Link to="/earth">earth</Link>
        <Link to="/mars">mars</Link>
        <Link to="/jupiter">jupiter</Link>
        <Link to="/saturn">saturn</Link>
        <Link to="/uranus">uranus</Link>
        <Link to="/neptune">neptune</Link>
      </nav>
      <Container>
        zura
      </Container>
    </Wrapper>
  );
}


 
