import React, {useState} from "react";

// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from '../imgs/logo.svg'

// Redux and Routes
import {fetchSearch} from '../actions/gamesAction'
import { useDispatch } from "react-redux";

// import animations
import { fadeIn } from "../animation";

const Nav = () => {

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('')

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput))
        setTextInput('')
    }

    const clearSearch = () => {
        dispatch({type: 'CLEAR_SEARCHED'})
    }

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }

    @media screen and (max-width: 1500px) {
        input {
            width: 50%;
        }
    }

    @media screen and (max-width: 911px) {
        input {
            width: 70%;
        }
    }

    @media screen and (max-width: 630px) {
        input {
            width: 50%;
        }
    }

    @media screen and (max-width: 444px) {
        display: flex;
        flex-direction: column;
        input {
            width: 100%;
            margin-bottom: 15px;
        }
        button {
            width: 100%;
        }
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;

    img {
        width: 2rem;
        height: 2rem;
    }
`

export default Nav