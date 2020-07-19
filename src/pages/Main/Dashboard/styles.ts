import styled from 'styled-components';

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

  padding: 8px;

  background: ${(props) => props.theme.white.default};
  border-radius: 12px;

  div.title {
    display: flex;
    flex-direction: column;

    span.title {
      font-size: 32px;
      font-weight: 500;
      color: ${(props) => props.theme.receipts.default};
    }
    
    span.subtitle {
      font-size: 16px;
      color: ${(props) => props.theme.grafit.hover};
    }   
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

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;

  width: 100%;

  background: ${(props) => props.theme.white.default};

  padding: 5px;

  border-radius: 8px;

  span.title {
    font-size: 20px;
    font-weight: 600;
  }

`;
