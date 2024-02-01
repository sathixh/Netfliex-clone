import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import List from './List'
import Movie from './Movie'
import Mylist from './Mylist'
import Newlist from './Newlist'
import End from './End'

function Home() {
    return (
        <Container>
            <Banner />
            <List/>
            <Movie />
            <Mylist />
            <Newlist />
            <End />
        </Container>
    )
}

export default Home
 
const Container = styled.div`
    background-color: black;
`