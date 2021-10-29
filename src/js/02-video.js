import Player from '@vimeo/player';
// const player = new Player('vimeo-player', {
//   width: 320,
// });

// player.on('play', function () {
//   console.log('played the video!');
// });

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(iframe);
player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

let timeUpdate = event => console.log(event.seconds);

player.on('timeupdate', timeUpdate);
