import { useParams } from "react-router-dom";
import styled from "styled-components";

import data from "../data.json";

//img
import linkIcon from ".././assets/external-link-icon.svg";

function Planet() {
  const ButtonData = ["OVERVIEW", "Internal Structure", "Surface Geology"];
  const params = useParams();
  const planetData = data.find(
    (item) => item.name.toLocaleLowerCase() === params.planet
  );

  if (!planetData) {
    return <div>Planet not found</div>;
  }
  return (
    <Main>
      <MainContainer>
        <PlanetContentContainer>
          <PlanetImgContainer>
            <img src={planetData.images.planet} alt="svg" />
          </PlanetImgContainer>

          <MainInfoContainer>
            <h1>{planetData.name}</h1>
            <p>{planetData.overview.content}</p>
            <div>
              <span>Source</span>
              <a href={planetData.overview.source}>Wikipedia</a>{" "}
              <img src={linkIcon} alt="link icon img" />
            </div>
            <ButtonsContainer>
              {ButtonData.map((item) => {
                return <div key={item}>{item}</div>;
              })}
            </ButtonsContainer>
          </MainInfoContainer>
        </PlanetContentContainer>
        <DetailsWrapper>
          <div>
            <span>ROTATION TIME</span>
            <span>{planetData.rotation}</span>
          </div>
          <div>
            <span>REVOLUTION TIME</span>
            <span>{planetData.revolution}</span>
          </div>
          <div>
            <span>radius</span>
            <span>{planetData.radius}</span>
          </div>
          <div>
            <span>AVERAGE TEMP.</span>
            <span>{planetData.temperature}</span>
          </div>
        </DetailsWrapper>
      </MainContainer>
    </Main>
  );
}

export default Planet;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainContainer = styled.div`
  width: 100%;
  max-width: 80%;
`;
const PlanetContentContainer = styled.div`
  margin: 126px 0 87px 10%;
  display: flex;
  justify-content: space-between;
`;
const PlanetImgContainer = styled.div`
  max-width: 290px;
  width: 100%;
  height: 290px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const MainInfoContainer = styled.div`
  max-width: 350px;
  width: 100%;
  text-align: start;
  h1 {
    color: #fff;
    font-size: 80px;
    text-transform: uppercase;
  }
  p {
    color: #fff;
    font-size: 14px;
    line-height: 25px; /* 178.571% */
    text-align: start;
    margin: 24px 0;
  }
  div {
    display: flex;
    align-items: center;
  }
  span {
    color: #fff;
    font-size: 14px;
    line-height: 25px; /* 178.571% */
  }
  a {
    opacity: 0.5;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-decoration-line: underline;
    margin: 0 9px;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//DetailsWrapper
const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    max-width: 355px;
    width: 100%;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 20px 0 27px 23px;

    :first-child {
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      line-height: 25px; /* 227.273% */
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 15px;
      opacity: 0.2;
    }
    :nth-child(2) {
      color: #fff;
      font-size: 40px;
      font-weight: 400;
      letter-spacing: -1.5px;
      text-transform: uppercase;
    }
  }
`;
