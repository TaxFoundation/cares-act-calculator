import React from "react";
import styled from "styled-components";

import { statuses } from "../statuses";

interface LabelProps {
  readonly selected: boolean;
}

const FormatLabel = styled.label<LabelProps>`
  border: 1px solid ${props => props.theme.tfBlue};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => (props.selected ? props.theme.tfBlue : "#fff")};
  color: ${props => (props.selected ? "#fff" : props.theme.tfBlue)};
  cursor: pointer;
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.5rem;
  transition: all 0.1s ease-in-out;
  user-select: none;
`;

const FormatRadio = styled.input<LabelProps>`
  cursor: pointer;
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;

  &:focus + label {
    background-color: ${props =>
      props.selected ? props.theme.tfBlue : props.theme.tfBlueHighlight};
  }
`;

interface RadioProps {
  label: string;
  value: string;
  name: string;
  selected: boolean;
  update: (event: keyof statuses) => void;
}

const RadioButton: React.FC<RadioProps> = ({
  label,
  value,
  name,
  selected,
  update
}) => {
  return (
    <>
      <FormatRadio
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={selected}
        selected={selected}
        onChange={e => update(e.target.value as keyof statuses)}
      />
      <FormatLabel selected={selected} htmlFor={value}>
        {label}
      </FormatLabel>
    </>
  );
};

export default RadioButton;
