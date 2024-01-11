'use client'

import React from 'react';
import styled from 'styled-components';
import HomeComponent from '@/modules/home';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:30px;
`;
const Header=styled.span`
color:black;
font-size:20px;
font-weight:bold;
margin-top:10px
`;

const Page = () => {
  return (
    <>
      <Container>
    
      <Header>Expense Tracker</Header>
      <HomeComponent/>
      </Container>
    </>
  );
};

export default Page;

