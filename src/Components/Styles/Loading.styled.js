import styled from "styled-components";

export const LoadingStyles = styled.p`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  top: 0;
  left: 0%;
  z-index: 9999;
`

export const WrapperLoad = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  padding-left: 5px;
`