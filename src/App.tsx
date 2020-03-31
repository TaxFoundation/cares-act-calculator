import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Theme, GlobalStyle } from "./Theme";
import { statuses } from "./statuses";
import Container from "./components/Container";
import Section from "./components/Section";
import Heading from "./components/Heading";
import Notice from "./components/Notice";
import NumericInputs from "./components/NumericInputs";
import NumericInput from "./components/NumericInput";
import RadioGroup from "./components/RadioGroup";
import Result from "./components/Result";
import calculate from "./calculation";

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
