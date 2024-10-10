import styled from "styled-components";
import BytecoinAmountLogoImage from '../../assets/BytecoinLogo.png';
import MinerLogoImage from '../../assets/rtxpix_byte.png';
import DepositIcon from '../../assets/Deposit.svg'
import BuyEnergyIcon from '../../assets/BuyEnergy.svg'

const Container = styled.div`
    width: 100%;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`;

const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const NameBlock = styled.div`

`

const GradientText = styled.a`
    background: linear-gradient(to right, #9944ff, #14f194);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 50px;
    font-weight: 600;
`

const NameText = styled.a`
    font-size: 50px;
    font-weight: 600;
    color: #fff;
`

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const InfoText = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #a7a7a7;
    display: flex;
    align-items: center;
`

const AmountText = styled.a`
    font-size: 45px;
    font-weight: 500;
    color: #eee;
    display: flex;
    align-items: center;
`

const QuestionBlock = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #252222;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    margin-left: 5px;
    margin-top: -2px;
    cursor: pointer;
`

const FloatText = styled.a`
    font-size: 35px;
    font-weight: 500;
    color: #eee;
`

const BytecoinAmountLogo = styled.img`
    width: 35px;
    height: 35px;
`

const RightBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const MinerBlock = styled.div`
    width: 350px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1d1c1c;
    border-radius: 25px;
    margin-top: 30px;
`

const MinerInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const MinerText = styled.a`
    color: #a7a7a7;
    font-size: 16px;
    font-weight: 500;
    margin-left: 30px;
`

const AmountNFT = styled.a`
    color: #eee;
    font-size: 30px;
    font-weight: 500;
    margin-left: 30px;
    margin-top: 10px;
`

const MinerLogo = styled.img`
    width: 120px;
    height: 55px;
    margin-right: 30px;
`

const MinerInfoText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #eee;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavigationContainer = styled.div`
    width: 400px;
    height: 75px;
    border-radius: 20px;
    margin-top: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: linear-gradient(to right, #9944ff, #14f194);
`

const NavigateBlock = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
`

const NavigateIcon = styled.img`
    width: 30px;
    height: 30px;
`

const NavigateText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #eee;
    white-space: nowrap;
`


export const MainPageOnDesktop = () => {
    return (
        <Container>
            <LeftBlock>
                <NameBlock>
                    <NameText><GradientText>Bytecoin</GradientText> <br /> Miner App</NameText>
                </NameBlock>
                <div>
                    <MinerBlock>
                        <MinerInfoBlock>
                            <MinerText>My Miners</MinerText>
                            <AmountNFT>0 NFT</AmountNFT>
                            <MinerText style={{ marginTop: '10px' }}>0 Bytecoin per day</MinerText>
                        </MinerInfoBlock>
                        <MinerLogo src={MinerLogoImage} />
                    </MinerBlock>
                    <MinerInfoText>0 energy on balance <QuestionBlock>?</QuestionBlock></MinerInfoText>
                </div>
            </LeftBlock>

            <RightBlock>
                <InfoBlock>
                    <InfoText>Your Bytecoin balance</InfoText>
                    <AmountText>0.<FloatText>00 <BytecoinAmountLogo src={BytecoinAmountLogoImage} /></FloatText></AmountText>
                    <InfoText>You`ve mined today: 0 <QuestionBlock>?</QuestionBlock></InfoText>
                </InfoBlock>
                <NavigationContainer>
                    <NavigateBlock>
                        <NavigateIcon src={DepositIcon} />
                        <NavigateText>Deposit Miner</NavigateText>
                    </NavigateBlock>
                    <NavigateBlock>
                        <NavigateIcon src={BuyEnergyIcon} />
                        <NavigateText>Buy energy</NavigateText>
                    </NavigateBlock>
                    <NavigateBlock>
                        <NavigateIcon src={DepositIcon} />
                        <NavigateText>Withdrawal</NavigateText>
                    </NavigateBlock>
                </NavigationContainer>
            </RightBlock>
        </Container>
    )
}   