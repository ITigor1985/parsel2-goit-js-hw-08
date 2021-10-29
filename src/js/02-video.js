import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let timeUpdate = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(timeUpdate, 1000));
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) player.setCurrentTime(currentTime);
