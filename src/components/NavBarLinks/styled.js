import styled from "styled-components";
import { Link } from "react-router-dom";
import { commonlink } from "/src/common/theme";

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledLink = styled(Link)`
  ${commonlink}
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
