import styled from "styled-components";
import InputArea from "./Input";
import { useState } from "react";


export default function Main(){
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    return (
        <MainSection>
            <InnerSection>
                <TopText>{topText}</TopText>
                <BottomText>{bottomText}</BottomText>
                <img src="/assets/rock.png" alt="" width={"100%"} height={"60%"}/>
                <InputArea
                 bottomText = {bottomText}
                 topText = {topText}
                 setBottomText = {setBottomText}
                 setTopText = {setTopText}></InputArea>
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
    height: 97%;
    width: 40%;
    font-size: 35px;
    font-weight: 600;
    @media (max-width:760px){
        width: 95%;
        font-size: 30px;
    }
    img{
        margin: 0%;
    }
`
const TopText = styled.div`
    position: absolute;
    width: 35%;
    top: 95px;
    text-align: center;
    word-wrap: break-word;
    left: 32.5%;
    @media (max-width:760px){
        max-width: 85%;
        left: 7%;
    }
`
const BottomText = styled.div`
    position: absolute;
    top:52% ;
    left: 32.5%;
    width: 35%;
    text-align: center;
    word-wrap: break-word;
    @media (max-width:760px){
        max-width: 85%;
        left: 7%;
    }
`