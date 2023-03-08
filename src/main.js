import './css/main.scss';
import logo from './images/box-model.svg';
import packageJson from '../package.json';

import './js/boxmodel';

/* prettier-ignore */
console.log('%c┌─────────────────────────────────────────┐\n  CSS BOX MODEL\n  https://github.com/macx/css-box-model\n└─────────────────────────────────────────┘', 'background: black; color: #89b3be');

document.querySelector('.logo__image').innerHTML = `<img src="${logo}" alt="">`;
document.querySelector('.version').innerHTML = packageJson.version;
