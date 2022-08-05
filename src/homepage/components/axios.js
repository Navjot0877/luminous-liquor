import axios from "axios";

const instance= axios.create({
    baseURL:'https://luminious-liquor.herokuapp.com'
})

export default instance;