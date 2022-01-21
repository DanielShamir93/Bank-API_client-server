import axios from 'axios';

const PORT = process.env.PORT || 5000;
let myUrl = `http://localhost:${PORT}/users`; //development

if (process.env.NODE_ENV === 'production') {
  myUrl = 'users';
}

export default axios.create({
  baseURL: myUrl,
});
