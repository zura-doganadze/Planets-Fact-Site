import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Wrapper, TitlesContainer, Line } from "./HeaderStyles";
import { useState, useEffect } from "react";

// const [active, setActive] = useState(false)

export default function Header() {
  const data: string[] = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  const [active, setActive] = useState<String | undefined>();
  const location = useLocation();

  useEffect(() => {
    const currentPath: string = location.pathname;

    setActive(currentPath);
  }, [location]);
  console.log(active);

  return (
    <Wrapper>
      <TitlesContainer>
        <h1>the planets</h1>
        <Nav>
          {data.map((item) => {
            return (
              <Link key={item} to={`/${item}`}>
                {item}
              </Link>
            );
          })}
        </Nav>
      </TitlesContainer>
      <Line></Line>
    </Wrapper>
  );
}

const Nav = styled.nav`
  a.active {
    border-top: 2px solid white;
    /* Add any other styles for the active link */
  }
`;
