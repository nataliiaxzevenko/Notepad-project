import axious from 'axios';

const instance = axious.create({
    baseURL: 'https://notepad-project-50d22.firebaseio.com/'
});

export default instance;