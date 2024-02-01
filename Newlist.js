import React from 'react'
import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'

function Newlist() {
    return (
        <Container>
            <h1>Popular on Netflix</h1>
            <ListMovies>
            <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
                <img src="https://media.gqindia.com/wp-content/uploads/2020/06/Gunjan-Saxena.jpg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4x5g8cgl8_hzOs1CKHmDO-KWGaPYh8Y2YHb9pFUH68panKCjn0FUwf5NePGsqn_wsnvk&usqp=CAU" />
                <img src="https://i.pinimg.com/736x/e0/35/74/e035743d29b8271616b9d8470077fa03.jpg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMUYQn_DvnAd2I6ytye24mEFabWt9XhqbRHAwFAkF-9jZtDuUxsFWvLySNLzCoPnGPf0&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsurKddiWiwTuquR4YFAm3XHlKvj9OvE3B4f78efdcRLS9cMQ7IPEJP6EAvrHNCWvy9c8&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPL4pMqL1_z04lF3f-RodQLzfW7bLjIbYxinooHHal68kkok4kUkCWfThVBa0i8_cTP8&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY59KPlS4uQ51PfXs-Lca86mzrFVsEX0OtdA&usqp=CAU" />
            </ScrollContainer>
            </ListMovies>
          
        </Container>
    )
}

export default Newlist



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


