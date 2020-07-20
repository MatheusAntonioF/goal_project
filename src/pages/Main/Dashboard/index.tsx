import React, { useState, useEffect } from 'react';

import { MdMonetizationOn } from 'react-icons/md';

import {
  Container,
  Header,
  DivValues,
  Body,
  DivOptions,
} from './styles';

import money_icon from '../../../assets/money.svg';

import Loading from '../../../components/Loading';

import api from '../../../services/api';

import Entries from './Entries';

interface IInvoice {
  value: number,
}

const Dashboard: React.FC = () => {
  const [invoice, setInvoice] = useState<IInvoice>({} as IInvoice);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const { data } = await api.get('invoice-value');

      setInvoice(data);

      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {loading
        ? <Loading />
        : (
          <Container>
            <Header>
              <div className="title">
                <span className="title">Meu Pag!</span>
                <span className="subtitle">Finanças</span>
              </div>
              <img src={money_icon} alt="Money Icon" />
              <DivValues>
                <div className="label">
                  <MdMonetizationOn size={32} />
                </div>
                <div className="values">
                  <span className="title-invoice">Valor da fatura</span>
                  <span className="invoice">
                    {invoice.value && invoice.value.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </div>
              </DivValues>
            </Header>
            <DivOptions>teste</DivOptions>
            <Body color="investments">
              <span className="title">
                Receita
              </span>

              <Entries pathRequest="receipts" />
            </Body>
            <Body color="debts">
              <span className="title">
                Despesas
              </span>
              <Entries pathRequest="spendings" />
            </Body>
          </Container>
        )}
    </>
  );
};

export default Dashboard;
