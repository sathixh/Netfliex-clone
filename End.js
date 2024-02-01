import React from 'react'
import styled from 'styled-components'

function End() {
    return (
        <Container>
            <Nav>
                <One>
                   <li>Home</li>
                   <li>About</li>
                   <li>Read</li>
                   <li>Classic</li>
                   <li>Note</li>
                </One>
                <Two>
                <li>Play</li>
                <li>Report</li>
                <li>CopyRight</li>
                <li>What?</li>
                </Two>
                <Three>
                <li>More</li>
                <li>Email</li>
                <li>.com</li>
                </Three>
            </Nav>
            <ListEnd>
                <p>All you need to do is visit netflix.com/watch-free to see what is available to watch free. Once you open this site, you just need to click on the 'Watch Now' button after choosing your favourite content. We were able to watch the content for free on a PC or laptop, but not on a mobile phone.</p>
            </ListEnd>
        </Container>
    )
}

export default End


const Container = styled.div`
    height: 400px;
    background-color: #222222;
    margin-top: 60px;
    border-top-left-radius: 100px;
    border-top-right-radius:100px;
`

const Nav = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
const One = styled.div`
    margin-top: 70px;
    cursor: pointer;

    li {
        margin-bottom: 20px;

        &:hover {
            transform: scale(1.55);
        box-shadow: rgb(0 0 0 / 50%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8); 
        }
    }
    

`
const Two = styled(One)`
margin-left: 300px;
`
const Three = styled(One)`
margin-left: 300px;
`
const ListEnd = styled.div`
    margin-left: 80px;
    margin-right: 80px;
`