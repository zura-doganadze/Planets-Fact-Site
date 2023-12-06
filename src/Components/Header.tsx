import { useLocation } from "react-router-dom";

import { Wrapper, TitlesContainer, Line, StyledLink } from "./HeaderStyles";
import { useState, useEffect } from "react";


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
    console.log(active);
  }, [location]);

  return (
    <Wrapper>
      <TitlesContainer>
        <h1>the planets</h1>
        <nav>
          {data.map((item) => {
            return (
              <StyledLink
                key={item}
                to={`/${item}`}
                isactive={active === `/${item}`}
              >
                {item}
              </StyledLink>
            );
          })}
        </nav>
      </TitlesContainer>
      <Line></Line>
    </Wrapper>
  );
}
 


