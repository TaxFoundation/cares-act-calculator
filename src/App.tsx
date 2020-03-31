import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { statuses } from "./statuses";
import calculate from "./calculation";
import NumericInput from "./components/NumericInput";
import RadioButton from "./components/RadioButton";
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

const Section = styled.div`
  display: block;
  margin: 0.5rem;
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
      <Section>
        <NumericInput
          id="agi"
          value={Number(AGI).toString()}
          label="Adjusted Gross Income"
          update={setAGI}
        />
      </Section>
      <Section>
        Choose Filing Status
        {[
          { id: "individual", name: "Individual" },
          { id: "joint", name: "Married Filing Jointly" },
          { id: "hoh", name: "Head of Household" }
        ].map(status => (
          <RadioButton
            value={status.id}
            label={status.name}
            selected={(status.id as keyof statuses) === filingStatus}
            update={setFilingStatus}
          />
        ))}
      </Section>
      <Section>
        <NumericInput
          id="children"
          value={Number(children).toString()}
          label="Number of Children"
          update={setChildren}
        />
      </Section>
      <Section>
        Stimulus payment:{" "}
        {calculate(
          filingStatus,
          children ? +children : 0,
          AGI ? +AGI : 0
        ).toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </Section>
    </ThemeProvider>
  );
}

export default App;
