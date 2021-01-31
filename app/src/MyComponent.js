import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";

const { ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      
      <div className="section">
        <h1>The Forum</h1>
        <h2>Ask to the comunity</h2>
        <p>
          There is a form where you can ask a question to the comunity
        </p>
        <p>
          <strong>Ask your question : </strong>

          <ContractForm
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="ApplyProblem"
            method="postPb"
          />

        </p>

      </div>

      <div className="section">
        <h2>Problems : </h2>
        <p>
          There is a form where you can answer the question of the comunity
        </p>
        <p>
          <strong>Search the problem</strong>
          <br/>
          <p>
            <ContractForm
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="ApplyProblem"
                method="data"
                toUtf8
            />
          </p>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ApplyProblem"
              method="data"
              toUtf8
            />
        </p>

        
      </div>

      <div className="section">
        <h2>Resolved ? : </h2>
        <p>
          If you are the owner of the problem aswked, you can click to confim that the problem is resolved
        </p>
        <p>
          <strong>There are the problems</strong>
          <br/>
          <p>
            <ContractForm
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="ApplyProblem"
                method="resolved"
                toUtf8
            />
          </p>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ApplyProblem"
              method="data"
              toUtf8
            />
        </p>

        
      </div>

    </div>
  );
};
