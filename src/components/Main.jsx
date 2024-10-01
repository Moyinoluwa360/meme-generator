import styled from "styled-components";

export default function Main(){
    return (
        <MainSection>
            <InnerSection>

            </InnerSection>
        </MainSection>
    )
}

const MainSection = styled.div`
    background-color: #272727;
    height: 93%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InnerSection = styled.div`
    background-color: #707070;
    height: 95%;
    width: 60%;
    @media (max-width:760px){
        width: 95%;
    }
`