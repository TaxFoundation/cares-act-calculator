import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  margin-right: 1rem;
`;

const StyledInput = styled.input`
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem;

  &:active,
  &:focus {
    border: 1px solid #0094ff;
  }
`;

type props = {
  id: string;
  label: string;
  value: string;
  update: (event: number) => void;
};

const NumericInput: React.FC<props> = ({ id, value, label, update }) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        inputMode="numeric"
        pattern="[0-9]*"
        id={id}
        value={value}
        onChange={e => update(+e.target.value)}
      />
    </>
  );
};

export default NumericInput;
