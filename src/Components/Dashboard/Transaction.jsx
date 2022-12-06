import React from 'react'
import styled from 'styled-components'


const TransactionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Text = styled.p`
    font-size: 14px;
    color: #1A1A1A;
`

export default function Transaction() {
  return (
    <TransactionContainer>
        <Text>hello@gmail.com</Text>
        <Text>CR</Text>
        <Text>N3000</Text>
    </TransactionContainer>
  )
}
