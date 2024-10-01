import { useEffect } from "react";
import styled from "styled-components";

export default function InputArea(props){
    async function getMeme(){
        const getData = await fetch("https://api.imgflip.com/get_memes")
        const jsonData  = await getData.json()
        const memes = jsonData.data.memes
        const randomIndex = Math.floor(Math.random() * memes.length);
        const meme = memes[randomIndex]
        console.log(meme)
        props.setMemeImg(meme.url)
        }
    useEffect(()=>{
        getMeme()
    },[])
    return (
        <InputSec>
            <input type="text" 
            placeholder="Top Text"
            value={props.topText}
            onChange={(e)=> props.setTopText(e.target.value)}/>
            <input type="text" 
            placeholder="Bottom Text"
            value={props.bottomText}
            onChange={(e)=> props.setBottomText(e.target.value)}/>
            <button onClick={getMeme} >Generate Meme</button>
        </InputSec>
    )
}

const InputSec = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
    input{
        width: 90%;
        height: 20%;
        border-radius: 10px;
        border-style: none;
        padding-left: 20px;
        background-color: #85888b;
        color: aliceblue;
        font-size: 20px;
        @media (max-width: 760px){
            width: 90%;
        }
    }
    button{
        width: 50%;
        height: 20%;
        border-radius: 10px;
        border-style: none;
        background-color: #0400ff;
        font-size: 20px;
        font-weight: bolder;
        @media (max-width: 760px){
            width: 50%;
        }
    }
`