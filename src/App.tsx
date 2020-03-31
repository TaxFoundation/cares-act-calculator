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

const Container = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  margin: 0 auto;
  max-width: 674px;
  padding: 1rem;
`;

const Heading = styled.h1`
  margin: 0;
`;

const Section = styled.div`
  display: block;
  margin: 0.5rem 0;
`;

const Result = styled.div`
  background-color: ${props => props.theme.tfBlueHighlight};
  border 1px solid ${props => props.theme.tfBlueHighlight};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1rem 0 0;
  padding: 0.5rem 0;
  text-align: center;
`;

function App() {
  const [filingStatus, setFilingStatus] = useState<keyof statuses>(
    "individual"
  );
  const [children, setChildren] = useState<string>("1");
  const [AGI, setAGI] = useState<string>("60000");

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Heading>CARES Act Stimulus Payment Calculator</Heading>
        <p>
          If you have not yet submitted your 2019 tax year filings, please use
          the information from your 2018 tax year filings.
        </p>
        <Section>
          <NumericInput
            id="agi"
            value={AGI}
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
              name="filing-status"
              selected={(status.id as keyof statuses) === filingStatus}
              update={setFilingStatus}
            />
          ))}
        </Section>
        <Section>
          <NumericInput
            id="children"
            value={children}
            label="Number of Children"
            update={setChildren}
          />
        </Section>
        <Section>
          <Result>
            Stimulus payment:{" "}
            {calculate(
              filingStatus,
              children ? +children.replace(/[$,]/g, "") : 0,
              AGI ? +AGI.replace(/[$,]/g, "") : 0
            )}
          </Result>
        </Section>
      </Container>
    </ThemeProvider>
  );
}

export default App;
