import styled from "styled-components";

const Container = styled.div`
  width: 50rem;
  max-width: 100%;
  margin: 0 auto;
  padding: ${({ padd = '0 20px'}) => padd}
`

export default Container