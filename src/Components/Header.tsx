import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { Wrapper, TitlesContainer, Line } from "./HeaderStyles";
import React, { useState, useEffect } from "react";

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
                isActive={active === `/${item}`}
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
type StyledLinkProps = {
  isActive: boolean;
  to: string; // Add the 'to' prop here
  children?: React.ReactNode;
};

const StyledLink: React.FC<StyledLinkProps> = styled(Link)<StyledLinkProps>(
  (props) => css`
    border-top: 6px solid ${props.isActive ? "#D14C32" : "none"};
    padding-top: 33px;
    &:hover {
      color: #aba9a9
    }
  `
);


