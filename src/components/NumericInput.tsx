import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: ${props => props.theme.fontSize};
  margin-right: 1rem;
`;

const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: ${props => props.theme.fontSize};
  padding: 0.5rem;
  width: 100%;

  &:active,
  &:focus {
    border: 1px solid ${props => props.theme.tfBlue};
  }
`;

type props = {
  id: string;
  label: string;
  value: string;
  update: (event: string) => void;
};

const NumericInput: React.FC<props> = ({ id, value, label, update }) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        id={id}
        value={value}
        onChange={e => update(e.target.value)}
      />
    </div>
  );
};

export default NumericInput;
