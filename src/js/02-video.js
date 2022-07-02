
import { throttle } from 'lodash';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');

if(videoplayerCurrentTime)
    player.setCurrentTime(videoplayerCurrentTime);