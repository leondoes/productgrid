import React from "react";
import { Link } from "react-router-dom";
import { AdContainer, AdCopy, AdCopySmall, AdImg } from "./styled";

const Advertisement = () => (
  <AdContainer>
    <Link to="/ProductListPage">
      <AdCopy>SPEND $200 GET $40 BONUS CT MONEY</AdCopy>
      <AdCopySmall>
        with Triangle Rewards® on June 9. *Pre-tax purchases. Conditions apply.
      </AdCopySmall>
      <AdImg src={"https://via.placeholder.com/800x200"} alt="Hot Sale" />
    </Link>
  </AdContainer>
);

export default Advertisement;
