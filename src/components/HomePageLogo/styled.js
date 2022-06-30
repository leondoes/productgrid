import styled from "styled-components";
import { Link } from "react-router-dom";
import { commonlink } from "/src/common/theme";

export const StyledLink = styled(Link)`
  ${commonlink}
`;

export const StyledLogo = styled.div`
  height: auto;
  width: 62px;
`;
