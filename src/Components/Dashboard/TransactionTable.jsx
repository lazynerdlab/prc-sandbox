import styled from 'styled-components'
import Transaction from './Transaction';


const TransTableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 60%;
  background: red;
`

const TransactionTable = ({ transactions }) => {
  return (
   <TransTableContainer>
      <Transaction />
   </TransTableContainer>
  );
};

export default TransactionTable;
