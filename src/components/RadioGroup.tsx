import React from "react";
import styled from "styled-components";

import RadioButton from "./RadioButton";
import { statuses } from "../statuses";

const StyledRadioGroup = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

const StyledRadioButtons = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;

type RadioGroupProps = {
  label: string;
  options: { id: string; name: string }[];
  selected: keyof statuses;
  update: (event: keyof statuses) => void;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  label,
  selected,
  update
}) => {
  return (
    <StyledRadioGroup>
      <div>{label}</div>
      <StyledRadioButtons>
        {options.map(status => (
          <RadioButton
            value={status.id}
            label={status.name}
            name="filing-status"
            selected={(status.id as keyof statuses) === selected}
            update={update}
          />
        ))}
      </StyledRadioButtons>
    </StyledRadioGroup>
  );
};

export default RadioGroup;
