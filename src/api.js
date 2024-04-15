// BASE URL
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`;
const base_detail_url = `https://api.rawg.io/api/`;

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}

// Full date year/month/day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// PopularGames
const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcomingGames = `&dates=${currentDate},${nextYear}&ordering=-adding&page_size=10`
const newGames = `&dates=${currentDate},${nextYear}&ordering=-released&page_size=10`
 
export const popularGamesURL = () => `${base_url}${popularGames}`
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`
export const newGamesURL = () => `${base_url}${newGames}`

// GAME DETAIL
export const gameDetailsURL = (game_id) => `${base_detail_url}games/${game_id}.json?&key=${process.env.REACT_APP_API_KEY}`
export const gameScreenshotURL = (game_id) =>`${base_detail_url}games/${game_id}/screenshots?&key=${process.env.REACT_APP_API_KEY}`;

// SEARCHED GAME
export const searchGameUrl = (game_name) => `${base_detail_url}games?key=${process.env.REACT_APP_API_KEY}&search=${game_name}&page_size=9`

getCurrentMonth();