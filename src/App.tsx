import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { statuses } from "./statuses";
import calculate from "./calculation";
import NumericInput from "./components/NumericInput";
import RadioGroup from "./components/RadioGroup";
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
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
`;

const Notice = styled.div`
  color: #777;
  font-size: 0.8rem;
  font-style: italic;
`;

const Section = styled.div`
  display: block;
  padding: 0.5rem 0;
`;

const NumericInputs = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Result = styled.div`
  background-color: ${props => props.theme.tfBlueHighlight};
  border: 1px solid ${props => props.theme.tfBlueHighlight};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem 0;
  text-align: center;
`;

function App() {
  const [filingStatus, setFilingStatus] = useState<keyof statuses>(
    "individual"
  );
  const [children, setChildren] = useState<string>("0");
  const [AGI, setAGI] = useState<string>("60000");

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Heading>CARES Act Rebate Calculator</Heading>
        <Notice>
          If you have not yet submitted your 2019 tax year filings, please use
          the information from your 2018 tax year filings.
        </Notice>
        <Section>
          <NumericInputs>
            <NumericInput
              id="agi"
              value={AGI}
              label="Adjusted Gross Income"
              update={setAGI}
            />

            <NumericInput
              id="children"
              value={children}
              label="Number of Children"
              update={setChildren}
            />
          </NumericInputs>
        </Section>
        <Section>
          <RadioGroup
            options={[
              { id: "individual", name: "Individual" },
              { id: "joint", name: "Married Filing Jointly" },
              { id: "hoh", name: "Head of Household" }
            ]}
            label="Choose Filing Status"
            selected={filingStatus}
            update={setFilingStatus}
          />
        </Section>
        <Section>
          <Result>
            Rebate Amount:{" "}
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
