import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import { loadDetail } from '../actions/detailAction';

// Components 
import Game from '../components/Game';
import GameDetail from '../components/gameDetail'

// style and animation
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {useLocation} from 'react-router-dom'

// animations
import {fadeIn} from '../animation'

function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames()).then(() => {
      if (pathId) {
        dispatch(loadDetail(pathId));
      }
    });
  }, [dispatch]);

  // current Location
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]

    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    // Get that data back
    const {popular, newGames, upcoming, searched} = useSelector((state) => state.games)

  return (
    <Gamelist variants={fadeIn} initial="hidden" animate="show">
      <AnimatePresence>
        {pathId && <GameDetail pathId={pathId}/> }
      </AnimatePresence>
        
        {searched.length ? (
        <div className="searched">
        <h2>Searched Games</h2>
          <Games>
            {searched?.map(game => (
              <Game name={game.name} released={game.released} id={game.id} 
              image={game.background_image} key={game.id} />
            ))}
          </Games>
        </div>
        ) : ''}

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map(game => (
            <Game name={game.name} released={game.released} id={game.id} 
            image={game.background_image} key={game.id} />
          ))}
        </Games>

        
        <h2>Popular Games</h2>
        <Games>
          {popular.map(game => (
            <Game name={game.name} released={game.released} id={game.id} 
            image={game.background_image} key={game.id} />
          ))}
        </Games>

        
        <h2>New Games</h2>
        <Games>
          {newGames.map(game => (
            <Game name={game.name} released={game.released} id={game.id} 
            image={game.background_image} key={game.id} />
          ))}
        </Games>
    </Gamelist>
  )
};

const Gamelist = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }

  @media screen and (max-width: 911px) {
        padding: 0rem 2rem;
        text-align: center;
        
        h2 {
          font-size: 2.2rem;
        }
    }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 4rem 1.5rem;

  @media screen and (max-width: 911px) {
        gap: 4rem 0rem;
        grid-template-columns: 1fr;
    }
`;

export default Home