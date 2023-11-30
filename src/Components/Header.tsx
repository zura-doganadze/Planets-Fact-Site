import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Header() {
  return (
    <Wrapeer>
      <nav>
        <Link to="/mercury">mercury</Link>
        <Link to="/earth">mercury</Link>
        <Link to="/venus">mercury</Link>
      </nav>
    </Wrapeer>
  );
}

const Wrapeer = styled.div`
  font-size: 44px;
  a {
    margin-right: 22px;
  }
`;
