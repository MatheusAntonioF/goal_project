import React from 'react';

import { MdMonetizationOn } from 'react-icons/md';

import {
  Container,
  Header,
  DivValues,
  Body,
} from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <div className="title">
        <span className="title">Meu Pag!</span>
        <span className="subtitle">Finanças</span>
      </div>
      <DivValues>
        <div className="label">
          <MdMonetizationOn size={32} />
        </div>
        <div className="values">
          <span className="title-invoice">Valor da fatura</span>
          <span className="invoice">R$ 300</span>
        </div>
      </DivValues>
    </Header>
    <Body>
      <span className="title">Receita</span>
    </Body>
    <Body>
      <span className="title">Despesas</span>
    </Body>
  </Container>
);

export default Dashboard;
