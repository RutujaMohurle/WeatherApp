async function getData()
{
	const city=search.value;
	const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location='+city+'&u=c';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '196eaf023fmsh4b6c89f18bf7ae8p1c22a6jsn2c384d7548f5',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

try {
const response=await fetch(url, options);
const data=await response.json();
	console.log(data);
	const temperature =data.current_observation.condition.temperature;
	const humidity=data.current_observation.atmosphere.humidity;
	const windspeed=data.current_observation.wind.speed;
	document.getElementById('temp').innerHTML=temperature;
	document.getElementById('ws').innerHTML=windspeed;
	document.getElementById('hmdty').innerHTML=humidity;
}catch(err){console.error(err);
}
	
}