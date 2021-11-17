// TODO: add and export your own actions
import cities from '../../data/cities';


export function setCities() {
  // TODO: Api call! For now, simulate a DB
  return {
  type: 'SET_CITIES',
  payload: cities
  }
 }

 export function selectCity(city) {
  // TODO: Api call! For now, simulate a DB
  // console.log(city.name)
  // const url = `https://kitt.lewagon.com/placeholder/cities/${city.name}`;
  // const request = await fetch(url);
  // const data = await request.json();
  // console.log(data);
  // city['imageUrl']= url;
  return {
  type: 'SELECT_CITY',
  payload: city
  }
 }
