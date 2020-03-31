import styled from "styled-components";

const Result = styled.div`
  background-color: ${props => props.theme.tfBlueHighlight};
  border: 1px solid ${props => props.theme.tfBlueHighlight};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem 0;
  text-align: center;
`;

export default Result;
