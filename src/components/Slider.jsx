import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    
`

const Arrow = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex; 
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "0.5rem"};
    right: ${props => props.direction === "right" && "0.5rem"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;
const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;
const ImgContainer = styled.div`
    height: 100%;
    flex:1;
`;

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`;

function Slider() {
    return (
        <Container>
            <Arrow direction = "left">
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src = "https://wallpaperaccess.com/full/1496231.jpg"></Image>
                    </ImgContainer>
                    <InfoContainer></InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction = "right">
                <ArrowRightOutlined></ArrowRightOutlined>
            </Arrow>
        </Container>
    )
}

export default Slider
