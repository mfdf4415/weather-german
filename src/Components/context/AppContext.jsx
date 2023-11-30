import { createContext, useContext, useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';

const reducer = (state, action) => {
	switch (action.type) {
		case 'showAside':
			return { ...state, showAside: action.payload };
		case 'addFavorite': {
			const repeat = state.favorite.find(
				(item) => item.name === action.payload.name
			);
			if (repeat) {
				toast.error(`${action.payload.name} was added to favorite`);
				return state;
			} else {
				toast.success(`${action.payload.name} add to favorite`);
				return { ...state, favorite: [...state.favorite, action.payload] };
			}
		}
		case 'removeFavorite': {
			const upadatedFavorit = state.favorite.filter(
				(item) => item.id !== action.payload
			);
			toast.warning(`removed from favorite`);
			return { ...state, favorite: upadatedFavorit };
		}
		default:
			return state;
	}
};

const AppContext = createContext();
const initeilaState = {
	favorite: JSON.parse(localStorage.getItem('favorite')) || [],
	showAside: false,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initeilaState);

	const changeShowAside = (show) => {
		dispatch({ type: 'showAside', payload: show });
	};

	const addFavoriteItem = (value) => {
		dispatch({ type: 'addFavorite', payload: value });
	};

	const removeFavoriteItem = (value) => {
		dispatch({ type: 'removeFavorite', payload: value });
	};

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(state.favorite));
	}, [state.favorite]);

	return (
		<AppContext.Provider
			value={{ ...state, changeShowAside, addFavoriteItem, removeFavoriteItem }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
