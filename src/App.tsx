import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { statuses } from "./statuses";
import calculate from "./calculation";
import NumericInput from "./components/NumericInput";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-weight: ${props => props.theme.fontWeight};
    line-height: 1.6;
    padding: 0 0 1px;
    @media screen {
      font-size: ${props => props.theme.fontSize};
    }
    @media print {
      font-size: ${props => props.theme.printSize};
    }
  }
  * {
    font-family: ${props => props.theme.fontFamilies.lato};
  }
`;

function App() {
  const [filingStatus, setFilingStatus] = useState<keyof statuses>(
    "individual"
  );
  const [children, setChildren] = useState<number>(1);
  const [AGI, setAGI] = useState<number>(60000);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <NumericInput
        id="agi"
        value={Number(AGI).toString()}
        label="Adjusted Gross Income"
        update={setAGI}
      />
      <div>
        <input
          type="radio"
          id="individual"
          value={"individual"}
          checked={filingStatus === "individual"}
          onChange={e => setFilingStatus(e.target.value as keyof statuses)}
        />
        <label htmlFor="individual">Individual</label>
        <input
          type="radio"
          id="joint"
          value={"joint"}
          checked={filingStatus === "joint"}
          onChange={e => setFilingStatus(e.target.value as keyof statuses)}
        />
        <label htmlFor="joint">Married Filing Jointly</label>
        <input
          type="radio"
          id="hoh"
          value={"hoh"}
          checked={filingStatus === "hoh"}
          onChange={e => setFilingStatus(e.target.value as keyof statuses)}
        />
        <label htmlFor="hoh">Head of Household</label>
      </div>
      <NumericInput
        id="children"
        value={Number(children).toString()}
        label="Number of Children"
        update={setChildren}
      />
      <p>
        Stimulus payment:{" "}
        {calculate(
          filingStatus,
          children ? +children : 0,
          AGI ? +AGI : 0
        ).toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
    </ThemeProvider>
  );
}

export default App;
