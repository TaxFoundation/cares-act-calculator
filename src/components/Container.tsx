import styled from "styled-components";

const Container = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  margin: 0 auto;
  max-width: 674px;
  padding: 1rem;
`;

export default Container;
