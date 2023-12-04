import { Link } from "react-router-dom";

import { Wrapper, TitlesContainer, Line } from "./HeaderStyles";

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
  return (
    <Wrapper>
      <TitlesContainer>
        <h1>the planets</h1>
        <nav>
          {data.map((item) => {
            return (
              <Link key={item} to={`/${item}`}>
                {item}
              </Link>
            );
          })}
        </nav>
      </TitlesContainer>
      <Line></Line>

      {/* <div></div> */}
    </Wrapper>
  );
}
