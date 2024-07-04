import React from "react";

// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { smallImage } from '../util'

// import images icons
import playstation from '../imgs/playstation.svg'
import nintendo from '../imgs/nintendo.svg'
import steam from '../imgs/steam.svg'
import xbox from '../imgs/xbox.svg'
import apple from '../imgs/apple.svg'
import gamepad from '../imgs/gamepad.svg'

// stars images
import starEmpty from '../imgs/star-empty.png'
import starFull from '../imgs/star-full.png'

const GameDetail = ({pathId}) => {

    const navigate = useNavigate();

    // Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target

        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            navigate('/ignite');
        }
    }

    // get stars
    const getStars = () => {
        const stars =[];
        const rating = Math.floor(game.rating);
        for(let i = 1; i <= 5; i++){
            if(i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull} />)
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty} />)
            }
        }
        return stars;
    }

    // get platform images
    const getPlatform = (platform) => {
        switch(platform) {
            case "PlayStation 4":
            case "PlayStation 5":
                return playstation;
            case "Xbox Series S/X":
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
            case "macOS":
                return apple;
            default:
                return gamepad;
        }
    }

    // DATA
    const {game, screen, isLoading} = useSelector((state) => state.detail)

    return(
        <>
        {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <p>Rating: {game.rating}</p>
                            {getStars()}
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms?.map(data => (
                                    <div>
                                        <img
                                        alt={data.platform.name}
                                        key={data.platform.id}
                                        src={getPlatform(data.platform.name)}
                                        title={data.platform.name}>
                                        </img>
                                        <h3>{data.platform.name}</h3>
                                    </div>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt="image" />
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screen.results?.map((item) => (
                            <img src={smallImage(item.image, 1280)} key={item.id} alt="image" />
                        ))}
                    </div>
                </Detail>
            </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background: #ff7676
    }

    &::-webkit-scrollbar-track {
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 2rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

const Info = styled(motion.div)`
  text-align: center;
    width: 100%;
`

const Platforms = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    div {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-left: 1rem;
        height: 100%;
        padding: 5px 15px;

        img {
            width: 4rem;
        }
    }


`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`
 
const Description = styled(motion.div)`
    margin: 5rem 0;
`

export default GameDetail