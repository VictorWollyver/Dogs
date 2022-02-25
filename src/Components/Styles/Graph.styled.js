import styled from "styled-components";

export const Graph = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media(max-width: 800px) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
  }
`

export const GraphItem = styled.div`
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  border-radius: .2rem;
  display: grid;
  align-items: center;
  
 

  ${({primary}) => primary && 'grid-column: 1/-1; padding: 2rem; font-size: 2rem;'};

`