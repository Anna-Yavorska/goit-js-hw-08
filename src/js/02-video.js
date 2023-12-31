import Player from "@vimeo/player"

import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const KEY_STORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(event => {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(event.seconds));
    }, 1000)
);

const stoppedTime = localStorage.getItem(KEY_STORAGE);

if (stoppedTime !== null) {
    player.setCurrentTime(stoppedTime);
};
