import React from "react";
import { useHistory } from "react-router-dom";

//Bootsrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card"
import Accordion from "react-bootstrap/Accordion"

//Custom components
import Checking from "./Checking";
import Savings from "./Savings";
import Debt from "./Debt";
import PrizeList from "./PrizeList";
import SavingsOpen from "./SavingsOpen";
import Income from "./Income";

import Transfer from "./Transfer";
import Welcome from "./Welcome";
import "../../styles/MonthlyView.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementDebt,
  decrementRound,
  accrueSavingsInterest,
  incrementChecking,
  decrementChecking,
} from "../../redux/actions";

export default function MonthlyView( {firstName} ) {
  const round = useSelector((state) => state.round);
  const debt = useSelector((state) => state.debt);
  const savingsAmt = useSelector((state) => state.savingsAmt);
  const checkingAmt = useSelector((state) => state.checkingAmt);

  let isSavingsOpen = round === 0;
  const MONTHLY_INCOME = 750;
  const MAX_DEBT = 800;
  const MONTHLY_DEBT = 600;
  let history = useHistory();

  // const converter = 1;
  // const roundNumber = round / converter;

  // useEffect(() => {
  //   fetch("http://localhost:9090/test").then(async (res) =>
  //     console.log(await res.text())
  //   );
  // }, []);

  const dispatch = useDispatch();

  const advanceMonth = () => {
    dispatch(incrementDebt());
    dispatch(decrementRound());
    dispatch(accrueSavingsInterest());

    earnIncome();
    checkLost();
    accrueDebt();
  };

  const earnIncome = () => {
    let i;
    for (i = 0; i < MONTHLY_INCOME; i++) {
      dispatch(incrementChecking());
    }
  };

  const accrueDebt = () => {
    let i;
    for (i = 0; i < MONTHLY_DEBT; i++) dispatch(incrementDebt());
  };

  const checkLost = () => {
    if (debt > MAX_DEBT) {
      console.log("lost");
      history.push("/lose");
    }
  };

  return (
    <div>
      <div>
        <Container>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>The difference between checking accounts and saving accounts is very noticable ! Checking accounts earn lower interest rates than saving accounts, however they have access to debit card and check writing acceses. Saving accounts are still useful though ! The higher interest that one can gain from them is very useful for long term gains !</p>
                  <p>Debt and bills can be very scary if not mindful ! Good use of your savings and checking accounts and keeping a wary eye on those bills is a pathway to a debt free life !</p>
                  <p>Over 51% of students who learn how to manage their money well before college tend to pay for college by themselves ! Using mindful techniques and saving account plans can be the savior of student debt !</p>
                  <p>Always maintain a secure financial identity for yourself ! Keeping good preventative measures on your new shiny credit card will help keep identy theft away ! Always make sure to maintain secure accounts by trackign all transactions and chaning login passwords.</p>
                  <p>Never be afraid to ask ! Advice from friends and family will always come in handy , especially if they themselves mantain a good track record for financial spending.</p>

                
                
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Row style={{ paddingTop: "20px", paddingBottom: "70px" }}>
            <Checking checkingAmt={checkingAmt} />
            <Income
              advanceMonth={advanceMonth}
              MONTHLY_INCOME={MONTHLY_INCOME}
            />
            <Savings savingsAmt={savingsAmt} />
          </Row>

          <SavingsOpen isSavingsOpen={isSavingsOpen} round={round} />

          <Debt MAX_DEBT={MAX_DEBT} />

          <Welcome firstName={firstName}/>

          <PrizeList />
        </Container>
      </div>
    </div>
  );
}
