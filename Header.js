import React from 'react'
import styled from 'styled-components'


function header() {


    return (
        <Container>
        <Nav>
            <Logo src="https://www.androidbeat.com/wp-content/uploads/2020/02/Netflix_Logo.png" />
            <NavMenu>
                <a>
                    <span>TV Shows</span>
                </a>
                <a>
                    <span>Movies</span>
                </a>
                <a>
                    <span>Recently Added</span>
                </a>
                <a>
                    
                    <span>My List</span>
                    
                </a>
            </NavMenu>
            <Search>
            <input
                type="text"
                id="header-search"
                placeholder="   TV Shows, Movies..."
                name="Tamil movies" />
            </Search>
            <Icon src="https://img.icons8.com/ios-filled/2x/search--v2.gif" />
        </Nav>
        </Container>
    )
}

export default header

const Container = styled.div`
    
    
    
`

const Nav = styled.div`
    height: 70px;
    width: 100%;
    background-color: black;
    display: flex;
    align-iteams: center;
    padding: 0 20px;
    position: fixe;
   

    button {
        background: black;
        border-color: none;
    }
    
`

const Logo = styled.img`
    height: 70px;
    width: 175px;
    
`

const NavMenu = styled.div`
    display: flex;
    padding: 0 25px;
    flex: 1;

    a {
        display: flex;
        align-items: center; 
        padding: 0 15px;
        
    }

    span {
        font-size: 16px;
        letter-spacing: 1.75px;
        cursor: pointer;
        
        &:hover {
            transform: scale(1.10);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8); 
        }

    }

    @media (max-width: 768px) {
        display: none;
    }
`

const Icon = styled.img`
    height: 40px;
    width: 40px;
    margin-top: 15px;
    cursor: pointer; 
    margin-right: 40px;
    background-color: black;
`
const Search = styled.div`
    display: flex; 
    align-items: center;
    margin-right: 5px;

    input {
        height: 30px;
        width: 300px;
    }
`

