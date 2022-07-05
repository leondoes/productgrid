import React from "react";

import { AdContainer, AdCopy, AdCopySmall, AdImg } from "./styled";

const Advertisement = () => (
  <AdContainer>
    <a href="https://mx8cdx.csb.app/ProductListPage">
      <AdCopy>SPEND $200 GET $40 BONUS CT MONEY</AdCopy>
      <AdCopySmall>
        with Triangle Rewards® on June 9. *Pre-tax purchases. Conditions apply.
      </AdCopySmall>
      <AdImg src={"https://www.fillmurray.com/1440/140"} alt="Hot Sale" />
    </a>
  </AdContainer>
);

export default Advertisement;
