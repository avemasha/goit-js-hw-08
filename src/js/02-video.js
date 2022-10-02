import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const videoDuration = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(videoDuration, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));


const currentTime = localStorage.getItem(videoDuration);
if (currentTime) {
  player.setCurrentTime(currentTime);
}