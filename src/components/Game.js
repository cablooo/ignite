import React, {useEffect} from "react";

// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";

// REDUX
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from "react-router-dom";
import { smallImage } from "../util";

// import animations
import { popup } from "../animation";

const Game = ({name, released, id, image}) => {

    const stringPathId = id.toString()

    // LOAD DETAIL
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id))
    }

    return(
        <Styledgame variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </Styledgame>
    )
}

const Styledgame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
`

export default Game;