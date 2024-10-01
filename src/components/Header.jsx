import styled from "styled-components";


export default function Header(){
    return(
        <Head>
            OSM MEME - GENERATOR
        </Head>
    )
}

const Head  = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    color: aliceblue;
    font-family: 'Courier New', Courier, monospace;
    font-size: 30px;
    padding-left: 30px;
    height: 7%;
    font-weight: bolder;
    @media (max-width:760px){
        font-size: 19px;
        padding-left: 10px;
    }
`