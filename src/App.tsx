import React, { useState } from "react";

import { statuses } from "./statuses";
import calculate from "./calculation";

function App() {
  const [filingStatus, setFilingStatus] = useState<keyof statuses>(
    "individual"
  );
  const [children, setChildren] = useState(1);
  const [AGI, setAGI] = useState(60000);

  return (
    <div>
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
      <p>{calculate(filingStatus, children, AGI)}</p>
    </div>
  );
}

export default App;
