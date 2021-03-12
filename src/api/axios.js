import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://tinder-clone-backend-api.herokuapp.com/',
});

export default instance;
