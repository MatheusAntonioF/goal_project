import React from 'react';

import { Container } from './styles';

import loading from '../../assets/loading.svg';

const Loading: React.FC = () => (
  <Container>
    <img src={loading} alt="Loading Icon" />
  </Container>
);

export default Loading;
