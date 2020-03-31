import React, { useState } from "react";

import { statuses } from "./statuses";
import calculate from "./calculation";
import NumericInput from "./components/NumericInput";

function App() {
  const [filingStatus, setFilingStatus] = useState<keyof statuses>(
    "individual"
  );
  const [children, setChildren] = useState<number>(1);
  const [AGI, setAGI] = useState<number>(60000);

  return (
    <div>
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
      <p>{calculate(filingStatus, children ? +children : 0, AGI ? +AGI : 0)}</p>
    </div>
  );
}

export default App;
