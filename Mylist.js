import React from 'react'
import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'

function Mylist() {
    return (
        <Container>
            <h1>Most Watch List</h1>
            <ListMovies>
            <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
                <img src="https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"/>
                <img src="https://image.tmdb.org/t/p/w500/yvW9VuHiwfAaTNYjALROI8evNIT.jpg"/>
                <img src="https://icdn.digitaltrends.com/image/digitaltrends/finding-ohana-2021-netflix-poster-500x500.jpg"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGk6_rlXNBGkZDe6F7p_47uq_7wmFJ6g3uaU_kkjI8tIFALE_I009Xc9hL1QKSSzJYI0&usqp=CAU"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7XWqdWKGN_mBY-Z7BfJTbiTDNM59omCNOpQHjJPVIjUoA0AumrJy4unn75FNdrJTsRI&usqp=CAU"/>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-princess-switch-1545158418.jpg"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mUXrCnuTHMpvz6Gr7MnCwmVeo9UnKd6EkVlkjnvfOOJv1WeOeKZyv5AcXU3P1tabmM0&usqp=CAU"/>
                <img src="https://icdn.digitaltrends.com/image/digitaltrends/always-be-my-maybe-2019-netflix-poster-500x500.jpg"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYyxLPiBmkuAcn5DRXylhGcVj0WXrs0jFarz-kSY9Z0_pcLIe4UqIe0du5BzN4ReCBro&usqp=CAU"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZAuWNpOETND5BHE-fJxzrmg5j8jowvgT7Gthj9msTSsYymb9Qk6U500cufmQvmfuWws&usqp=CAU"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmE4aAFeWipsdJxRZVYzvs3SqZXh7L3LdWYzFpFJh4Wz1qX10JaZnc0eVHxOt4BjLuYhM&usqp=CAU"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NHsEtOQL_G6ilVrv0blkV4EQb9SnB-uLVsqqUdYDsUNzKz9mDc43PHdRe7MIJIgXCjw&usqp=CAU"/>
                <img src="https://thebannercsi.files.wordpress.com/2021/03/the-call.jpg"/>
                <img src="https://i.pinimg.com/474x/d7/9f/b1/d79fb13da2aec1cdb5a326246658b3b3.jpg"/>
            </ScrollContainer>
            </ListMovies>
          
        </Container>
    )
}

export default Mylist



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
        margin-Bottom: 40px;
    }
       
    img:hover {
        -ms-transform: scale(1.5);
        -webkit-transform: scale(1.5);
        transform: scale(1.2); 
      }
`

