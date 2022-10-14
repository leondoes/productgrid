import styled from "styled-components";

export const Title = styled.div`
  font: 16px "Brandon Grotesque", Arial, sans-serif;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 57px;
  text-transform: none;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
`;

export const TableContainer = styled.div`
  display: table;
  width: 100%;
`;

export const Label = styled.div`
  font-weight: bold;
`;

export const TableBody = styled.div`
  display: table-row-group;
`;

export const TableRow = styled.div`
  display: table-row;
`;

export const TableCell = styled.div`
  text-align: left;
  display: table-cell;
  padding: 15px 10px;
`;

export const EditButton = styled.button`
  font-family: Arial;
  color: #000000;
  background: #ffffff;
  font-size: 12px;
  padding: 12px 18px 10px 18px;
  border: solid #000000 1px;
  text-decoration: none;
  :hover {
    transition: all 0.3s ease;
    cursor: pointer;
    border: solid #acacac 1px;
    color: #acacac;
  }
`;
