import React, { useState, useEffect } from 'react';

import {
  Container,
  BoxValues,
  BoxLabel,
  Entry,
} from './styles';

import api from '../../../../services/api';

interface PropsEntries {
  pathRequest: string,
}

interface IEntries {
  id: number,
  name: string,
  type: string,
  value: number,
}

const Entries: React.FC<PropsEntries> = ({ pathRequest }) => {
  const [entries, setEntries] = useState<IEntries[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`${pathRequest}`);

      setEntries(data);
    }

    fetchData();
  }, [pathRequest]);

  return (
    <>
      {entries.length !== 0 && (
      <Container>
        <BoxValues>
          {entries.map((entry: IEntries) => (
            <Entry
              key={entry.id}
              color={pathRequest === 'receipts' ? 'investments' : 'debts'}
            >
              <span className="title">
                {entry.name}
              </span>
              <small>{entry.type}</small>
              <span className="value">
                {entry.value.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </Entry>
          ))}
        </BoxValues>
        <BoxLabel color={pathRequest === 'receipts' ? 'investments' : 'debts'}>
          <div className="box">
            <span className="total">TOTAL</span>
          </div>
          <span>
            {entries
              .reduce((total, current) => total + current.value, 0)
              .toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </BoxLabel>
      </Container>
      )}
    </>
  );
};

export default Entries;
