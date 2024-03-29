import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

export const TitlesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 41px 0 41px;
  h1 {
    margin-top: 33px;
    color: #fff;
    font-size: 28px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
  }
  nav {
    display: flex;
    column-gap: 33px;
  }
  a {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px; /* 227.273% */
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }
  &a.ctive {
    border-top: 2px solid white;
    color: red;
  }
`;
export const Line = styled.div`
  height: 1px;
  background-color: #fff;
  position: absolute;
  top: 83px;
  left: 0;
  right: 0;
`;

type StyledLinkProps = {
  isactive: boolean;
  to: string; // Add the 'to' prop here
  children?: React.ReactNode;
};

export const StyledLink: React.FC<StyledLinkProps> = styled(
  Link
)<StyledLinkProps>(
  (props) => css`
    border-top: 6px solid ${props.isactive ? "#D14C32" : "none"};
    padding-top: 33px;
    &:hover {
      color: #aba9a9;
    }
  `
);
