import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;

  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;

  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  border-radius: 2px;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border: 1px solid #e6e8e9;
  border-right: 4px solid ${(props) => (props.isExpense ? 'red' : 'green')};
  
`;

const TransactionCell = (props) => {
  return (
    <Cell isExpanse={props.payload?.type === 'EXPENSE'}>
      <span>{props.payload.desc}</span>
      <span>${props.payload.amount}</span>
    </Cell>
  );
};

const Transactioncomponent = (props) => {
  return (
    <Container>
      Transaction
      <input placeholder='Search' />
      {props.transactions?.length
        ? props.transactions.map((payload) => (
            <TransactionCell key={payload.id} payload={payload} />
          ))
        : ''}
    </Container>
  );
};

export default Transactioncomponent;
