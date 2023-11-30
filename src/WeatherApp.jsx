import { RouterProvider } from 'react-router-dom';
import { Weather } from './Components/Weather';
import router from './router';
import AppProvider from './Components/context/AppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function WeatherApp() {
	return (
		<>
			<AppProvider>
				<ToastContainer />
				<RouterProvider router={router} />
			</AppProvider>
		</>
	);
}
