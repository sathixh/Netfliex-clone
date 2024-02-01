import React from 'react'
import styled from 'styled-components'

function Banner() {
    return (
        <Container>
            <BackgroundImg>
                    <img src="https://images2.alphacoders.com/118/thumb-1920-1181149.png" />  
            </BackgroundImg>
            <Reader>
                <ImgSeries>
                    <img src="https://img.icons8.com/ios-filled/2x/fa314a/n.png" ></img>
                    <p>SERIES</p>
               </ImgSeries>
               <Name>
                   <img src="http://cdn.shopify.com/s/files/1/0600/3641/5746/files/download_1_ae7fc0d2-846e-42f3-b114-2d6414662844_1200x1200.png?v=1633246170" />
               </Name>
                <MovieName>
                    <p>He drew on a version of tag he played as a boy called squid game, named after the various squid-bodypart shapes that were drawn on to whatever field it was played on. “I used to be good at fighting my way to the squid's head,” Hwang says. Squid Game is a South Korean survival drama television series created by Hwang Dong-hyuk for Netflix. </p>
                </MovieName>
                
                <Bottuns>
                   <Play>
                    <img src="https://img.icons8.com/ios-glyphs/2x/play.png" />
                    <span>Play</span>
                   </Play>
                   <MyList>
                    <img src="https://img.icons8.com/android/2x/ffffff/plus.png" />
                    <span>My List</span>
                   </MyList>
                </Bottuns>
                <Net>
                <img src="https://www.androidbeat.com/wp-content/uploads/2020/02/Netflix_Logo.png" />
                </Net>
            </Reader>
        </Container>
    )
}

export default Banner

const Container = styled.div`
    height: 480px;
    cursor: pointer;

`

const BackgroundImg = styled.div`
    height: 500px;
    width: 100%; 
    opacity: 0.5;
    position: relative;
 
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        margin-top: 0px;
    }

`

const Reader = styled.div`
    position: absolute;
    top: 8px;
    left: 50px;
    margin-top: 80px;
    
    img {
        height: 50px;
        width: 175px;
        opacity: 0.8;
    }
    
    

`
const ImgSeries = styled.div`
    display: flex;
    align-items: center;
    
    img {
        
        height: 60px;
        width: 50px;
        opacity: 0.7;
       
    }

    p {
        font-size: 17px;
        letter-spacing: 5.50px;
        margin-top: 30px;
    }
`

const MovieName = styled.div`
    margin-right: 500px;

    p {
        opacity: 0.9;
    }
`

const Bottuns = styled.div`
    display: flex;
    align-items: center;
 
`

const Play = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 50px;
    width: 100px;
    border-radius: 10px;
    margin-right: 20px;
    cursor: pointer;

    img {
        height: 20px;
        width: 20px;
        opacity: 5.5;
        margin-right: 5px;
       
    }

    span {
        color: black;
        letter-spacing: 2.5px;
        font-weight:bold;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const MyList = styled(Play)`
    width: 150px;

    
    span {
        color: white;
    }

    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const Name = styled.div`
    img {
        height: 150px;
        width: 400px;
    }
`
const Net = styled.div`
    margin-left: 1000px;

    img {
        height: 80px;
    }
`

