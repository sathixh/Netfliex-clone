import React from 'react'
import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'

function Movie() {
    return (
        <Container>
            <h1>Horror Movies</h1>
            <ListMovies>
            <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-6_CmZQC-_81j5qHbCDmdDUN7fNTwsHA97Z8faoC55OJ4u53p6r3TkcavR8YHSVd-wA&usqp=CAU"/>       
                <img src="https://i.pinimg.com/736x/06/17/af/0617af8d240a12b5fabcbdbddc9444e5.jpg"/>
                <img src="https://i.pinimg.com/originals/74/5c/b6/745cb69a8bd749616f20cb342391ca5e.jpg"/>
                <img src="https://i.pinimg.com/474x/76/2f/cd/762fcd51e53f78c5a368a3d9dde42a17--the-eden-good-horror-movies.jpg"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXcpff-x3V5VNF9expIql3POlEUz7GlAIxSZo8mM-KuU0jDuI1QKA30yWDhin20yndtQ&usqp=CAU"/>
                <img src="https://www.gannett-cdn.com/presto/2020/05/22/PDTF/b77f9ffe-230d-4a16-be15-c7e13cbc5774-2.jpg?width=300&height=445&fit=crop&format=pjpg&auto=webp"/>
                <img src="https://m.media-amazon.com/images/M/MV5BZTYxYTZmZWItZjI2My00ZDY3LTg0OWItNzIyZGNhYWZiMGU3XkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_.jpg"/>
                
            </ScrollContainer>
            </ListMovies>
        </Container>
    )
}

export default Movie



const Container = styled.div`
    background-color: black;

    h1 {
        margin-left: 20px;
        font-weight: 600;
    }
`

const ListMovies = styled.div`
    flex-direction: row;
    cursor: pointer;
    

    img {
        height: 250px;
        margin-left: 20px;
        transition: transform .2s;
        object-fit: cover;
        border-radius: 10px;
    }
       
    img:hover {
        -ms-transform: scale(1.5);
        -webkit-transform: scale(1.5);
        transform: scale(1.2); 
      }
`

