import {useState,useEffect} from 'react'
import {Cards,Chart,CountryPicker} from  './components';
import styles  from './App.module.css';
import {fetchData} from './api';

import coronaImage from './images/image.png';

const App = () => {

	const [data,setData] = useState([]);
	const [country,setCountry] = useState('');

	useEffect(() => {

		const dataCall = async () => {
			const data = await fetchData();

			setData(data);
		}

		dataCall();

	},[])

	const handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);

		setData(fetchedData);
		setCountry(country);
	}

	return (
		<div className={styles.container}>
			<img src={coronaImage} className={styles.image} alt='COVID-19' />
			<Cards data={data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
			<Chart data={data} country={country} />
		</div>
		)
}

export default App;