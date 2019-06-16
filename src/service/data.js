const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=25';

const data = () => fetch(ENDPOINT).then(res => res.json())

export {data};