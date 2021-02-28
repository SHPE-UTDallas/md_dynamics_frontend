import React from "react";

//Bootsrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Custom components
import Checking from "./Checking";
import Savings from "./Savings";
import Debt from "./Debt";

import "../../styles/MonthlyView.css";

export default function MonthlyView() {
  const savingsAmt = 2555;
  const checkingAmt = 1354;
  const debt = 10240;

  return (
    <div>
      <div>
        <Container>
          <Row style={{ paddingTop: "20px", paddingBottom: "70px" }}>
            <Savings savingsAmt={savingsAmt} />
            <Checking checkingAmt={checkingAmt} />
          </Row>

          <Debt debt={debt}/>

          <div className="advanceButtonContainer">
            <Button className="advanceButton">Advance Month</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
