import Loader from "../../utils/Loader";
import styled from 'styled-components'
import Img from "../../assets/cardblackH.jpg";
import { useGetBalanceQuery } from "../../features/api/balanceApiSlice";
import Transactions from "./Transactions";
import TransactionTable from "./TransactionTable";



const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 4% 0 22%;
  flex-direction: column;
  width: 100%;
`
const Section = styled.section`
  display: flex;
  align-items: center;
  justiy-content: flex-start;
  width: 100%;
`
const SectionOne = styled(Section)`
  align-items: flex-end;
`
const SectionOneDivOne = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
`
const HelloText = styled.h1`
  color: #1A1A1A;
  font-size: 35px;
`
const BalanceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  color: #FFF;
  // flex-direction: column;
  margin: 20px 0 0;
  width: 400px;
  border-radius: 10px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  background: #1a1a1a80;
`
const BalanceCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const BalanceCardDivOne = styled(BalanceCardDiv)`
  justify-content: flex-start;
` 
const BalanceCaerDivTwo = styled(BalanceCardDiv)`
  justify-content: flex-end;
`
const SmallHeader= styled.h3`
  font-size: 18px;
  text-align: left;
  width: 100%;
`
const LargeHeader = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 40px;

`
const SectionOneDivTwo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 15px 30px; 
`
// const LatestTransDiv = styled.div`
//   // display: flex;
//   // align-items: fle;
// `
const LastTransLabel = styled(SmallHeader)`
  color: #1A1A1A;
  font-size: 14px;
`
const MediumText = styled.p`
  font-size: 25px;
  width: 100%;
  text-align: left;

`
const SectionTwo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`
const TransferBtn = styled.button`
  cursor: pointer;
  // width: 140px;
  padding: 10px 10px;
  font-size: 14px;
  background: #001DB8;
  color: #FFF;
  font-weight: 300;
`
const Divider = styled.hr`
  // color: red;
  border: 1px #1A1A1A solid;
  width: 100%;
  margin: 0 0 10px;
`
const Dashboard = () => {
  // const { data: balance, isLoading } = useGetBalanceQuery();
  return (
    <DashboardContainer>
      <SectionOne>
        <SectionOneDivOne>
          <HelloText>Hello, Lorem Ipsum</HelloText>
          <BalanceCard>
            <BalanceCardDivOne>
              <SmallHeader>Balance</SmallHeader>
              <LargeHeader>N20,000</LargeHeader>
            </BalanceCardDivOne>
            <BalanceCaerDivTwo>
              <TransferBtn>
                Transfer Money
              </TransferBtn>
            </BalanceCaerDivTwo>
          </BalanceCard>
        </SectionOneDivOne>
        <SectionOneDivTwo>
          <LastTransLabel>Last Sent</LastTransLabel>
          <MediumText>N3000</MediumText>
          <Divider></Divider>
          <LastTransLabel>Last Recieved</LastTransLabel>
          <MediumText>N3000</MediumText>
        </SectionOneDivTwo>
      </SectionOne>
      <SectionTwo>
        <TransactionTable></TransactionTable>
      </SectionTwo>
    </DashboardContainer>
  );
};

export default Dashboard;
