import { Post } from "./post";
import './styles/style.css';
import photo from './assets/images/image.png';
import _ from 'lodash';

const post = new Post('Webpack Post Title')

console.log('Post to string:', post.toString())

const img = document.createElement('img');
img.src = photo;
img.alt = 'Demo image';

document.body.append(img);

const numbers = [10, 20, 30, 40];
const sum = _.sum(numbers);

const text = document.createElement('p');
text.textContent = `Сума чисел: ${sum}`;

document.body.append(text);

