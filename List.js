import React from 'react'
import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'

function List() {
    return (
        <Container>
            <h1>Popular on Netflix</h1>
            <ListMovies>
            <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vikram-et00138591-22-07-2021-11-45-18.jpg"/>
                <img src="https://www.sify.com/uploads/doctor_2_vjcj9Sgjdjadf.jpeg"/>
                <img src="https://pbs.twimg.com/media/ESBiCHTUcAIUw4p.jpg"/>
                <img src="https://1.bp.blogspot.com/-EMPkiAfoEyQ/YQFrDLJuAWI/AAAAAAAAbOQ/hlB6XyghHlwEtmIsTXg4oxehreSw68jugCLcBGAsYHQ/w680/Jai-Bhim-Tamil-Movie-Box-Office.jpg"/>
                <img src="https://pbs.twimg.com/media/E6BVxFGXMAo_qI7.jpg"/>
                <img src="https://m.media-amazon.com/images/M/MV5BMmFiYjI3ZDAtNDZkNS00MjY4LThmYzAtMDk1OTAzNTRjNWIzXkEyXkFqcGdeQXVyMTE2NjQ5MDI4._V1_.jpg"/>
                <img src="https://m.media-amazon.com/images/M/MV5BOWQ1MDRiNmUtNDM5Yy00NmI1LTgxZjYtNmQ3YTY3YzA4ODZjXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_.jpg"/>
            </ScrollContainer>
            </ListMovies>
          
        </Container>
    )
}

export default List



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

