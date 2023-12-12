import axios from "axios"
import { popularGamesURL,upcomingGamesURL,newGamesURL,searchedGamesURL } from "../api"

export const loadGames = () => async (dispatch) => {
const popularData = await axios.get(popularGamesURL());
const newGamesData = await axios.get(newGamesURL());
const upcomingGamesData = await axios.get(upcomingGamesURL());
dispatch({
    type: "FETCH_GAMES",
    payload:{
        popular: popularData.data.results,
        upcoming: upcomingGamesData.data.results,
        newGames: newGamesData.data.results,
    }
});
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchedData = await axios.get(searchedGamesURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedData.data.results,
        }
    })
}
