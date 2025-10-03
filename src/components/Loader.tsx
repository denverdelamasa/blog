import styled from 'styled-components';

const Spinner = styled.div`
  position: relative;
  width: 32px;
  height: 32px;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    animation: spinner-b4c8mmsm 0.5s backwards, spinner-49opz7sm 1.25s 0.5s infinite ease;
    border: 4px solid #474bff;
    border-radius: 50%;
    box-shadow: 0 -24px 0 -4px #474bff;
    position: absolute;
  }

  &::after {
    animation-delay: 0s, 1.25s;
  }

  @keyframes spinner-b4c8mmsm {
    from {
      box-shadow: 0 0 0 -4px #474bff;
    }
  }

  @keyframes spinner-49opz7sm {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return <Spinner />;
}

export default Loader;