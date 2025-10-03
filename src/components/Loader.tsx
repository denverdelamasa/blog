import styled from 'styled-components';

const Spinner = styled.div`
  width: 5.6px;
  height: 5.6px;
  animation: spinner-xp626r 1s infinite;
  border-radius: 50%;
  box-shadow: 22.4px 0 0 5.6px #323232, -22.4px 0 0 5.6px #323232;
  
  @keyframes spinner-xp626r {
    to {
        transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return <Spinner />;
}

export default Loader;