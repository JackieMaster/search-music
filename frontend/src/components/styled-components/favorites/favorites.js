import styled from 'styled-components';

export const Spinner = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ef9a9a;
  background: linear-gradient(
    to right,
    #ef9a9a 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: spinner 1.4s infinite linear;
  transform: translateZ(0);
  &::before {
    width: 50%;
    height: 50%;
    background: #ef9a9a;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &::after {
    background: white;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
