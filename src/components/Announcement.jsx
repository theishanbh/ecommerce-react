import styled from "styled-components"

const Container = styled.div`
    height: 2rem;
    background-color: teal;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
`

function Announcement() {
    return (
        <Container>
            Super Deal! Free shipping on orders over 50$
        </Container>
    )
}

export default Announcement
