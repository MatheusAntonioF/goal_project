import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(to right, 
    ${(props) => props.theme.investments.default}, 
    ${(props) => props.theme.receipts.default});

  .custom-shape-divider-bottom-1594850540 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1594850540 svg {
      position: relative;
      display: block;
      width: calc(155% + 1.3px);
      height: 225px;
      transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1594850540 .shape-fill {
      fill: #FFFFFF;
  }
`;
