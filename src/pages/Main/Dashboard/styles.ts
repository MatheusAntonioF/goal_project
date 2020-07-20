import styled from 'styled-components';

interface IBodyComponent {
  color: string,
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 70%;
  height: 700px;

  padding: 10px;

  transform: translateY(-20px);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 8px 25px;

  background: ${(props) => props.theme.white.default};
  border-radius: 12px;

  div.title {
    display: flex;
    flex-direction: column;

    span.title {
      font-size: 32px;
      font-weight: 500;
      color: ${(props) => props.theme.investments.default};
    }
    
    span.subtitle {
      font-size: 16px;
      color: ${(props) => props.theme.grafit.hover};
    }   
  }

  img {
    width: 90px;
    height: 90px;
  }
`;

export const DivValues = styled.div`
  display: flex;
  align-items: center;

  width: 250px;
  height: 80px;

  background: ${(props) => props.theme.grafit.disabled};

  border-radius: 8px;

  border: 1px solid ${(props) => props.theme.grafit.default};
  
  
  div.label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;

    background: ${(props) => props.theme.investments.default};

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    svg {
      fill: ${(props) => props.theme.white.default};
    }
  }

  div.values {
    display: flex;
    flex-direction: column;

    width: 150px;

    margin-left: 25px;

    span.invoice {
      font-size: 28px;
      font-weight: bold;
      color: ${(props) => props.theme.investments.default};
    }

    span.title-invoice {
      font-size: 16px;
      color: ${(props) => props.theme.grafit.hover};
    }
  }
`;

export const DivOptions = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  background: ${(props) => props.theme.white.default};

  border-radius: 8px;

  margin-top: 10px;

  padding: 8px 10px;
  
`;

export const Body = styled.div<IBodyComponent>`
  display: flex;
  flex-direction: column;

  margin-top: 10px;

  width: 100%;

  background: ${(props) => props.theme.white.default};

  padding: 10px;

  border-radius: 8px;

  span.title {
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme[props.color].default};
  }

`;
