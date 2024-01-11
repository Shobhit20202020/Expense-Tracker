import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import OverviewComponent from '../OverviewComponent';
import Transactioncomponent from '../Transactioncomponent';


const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:30px;
font-family:sanief;
width:360px
`;

 const HomeComponent = (props) => {
  const[transactions,updateTransaction]=useState([]);
  // create an state for the income and expanse
  const[expense,updateExpense]=useState(0);
  const[income,updateIncome]=useState(0);

  const addTransaction=(payload)=>{
    const transactionArray=[...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  const calculateBalanace=()=>{
    let exp=0;
    let inc=0;
    transactions.map((payload)=>{
      payload.type==="EXPENSE"
      ?exp=exp+payload.amount
      :inc=inc+payload.amount
    });
    updateExpense(exp);
    updateIncome(inc);
  };
  useEffect(()=>calculateBalanace(),[transactions]);

  return (
    <>
    <Container>
        <OverviewComponent 
        addTransaction={addTransaction}
        expense={expense}
        income={income}/>
        <Transactioncomponent transactions={transactions}/>
    </Container>

    </>
  )
}
export default HomeComponent;
