import axios from 'axios';

export default axios.create({
  baseURL: 'https://DogAPI.hllaucode.repl.co/api/v1',
  headers:{
    'Content-type': 'application/json'
  }
})