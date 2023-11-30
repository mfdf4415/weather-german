import { createBrowserRouter } from 'react-router-dom';
import { Weather } from './Components/Weather';
import Layout from './Components/layout/Layout';
import Favorite from './Components/Favorite';
 
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				element: <Weather />,
				index: true,
			},
			{
				element: <Favorite />,
				path: '/favorite',
			},
		],
	},
]);

export default router