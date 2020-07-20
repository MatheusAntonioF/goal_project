import styled, { css } from 'styled-components';

interface IProps {
  color: string,
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  margin-top: 10px;
`;

export const BoxValues = styled.div`
  /* display: grid;

  grid-template-columns: repeat(auto-fit, minmax(100px, 140px));

  gap: 25px; */

  display: flex;
  align-items: center;

  & > div + div {
    margin-left: 15px;
  }

  overflow-x: scroll;
  overflow-y: hidden; 

  width: 85%;
  height: 165px;
  
  padding: 20px 10px 20px;

  background: ${(props) => props.theme.grafit.disabled};

`;

export const BoxLabel = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 15%;
  min-height: 165px;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  ${(props) => (props.color === 'investments'
    ? css`
      background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, 
        rgba(0,199,145,1) 100%, 
        rgba(0,212,255,1) 100%);
    `
    : css`
    background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, 
      rgba(247,25,47,1) 100%, 
      rgba(0,212,255,1) 100%);
    `
  )}

  span.total {
    font-size: 28px;
    font-weight: 700;
    color: ${(props) => props.theme.white.default};

  }
  
  span {
    font-size: 24px;
    margin-top: 5px;
    color: ${(props) => props.theme.white.default};
  }
`;

export const Entry = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.white.default};


  width: 123.25px;
  height: 130px;

  border-radius: 5px;

  padding: 5px;

  transition: 200ms ease;

  span.title {
    font-size: 18px;

    color: ${(props) => props.theme.grafit.hover}
  }

  small {
    color: ${(props) => props.theme.grafit.default};
    text-align: center;
  }

  span.value {
    font-size: 20px;
    font-weight: 600;
    
    color: ${(props) => props.theme[props.color].default};
  }

  &:hover {
    transform: scale(1.1);
  }
`;
