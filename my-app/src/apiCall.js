import axios from 'axios';
async function apiCall () {
    const api = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip=40172,us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4");
    return (api)
}
export default apiCall