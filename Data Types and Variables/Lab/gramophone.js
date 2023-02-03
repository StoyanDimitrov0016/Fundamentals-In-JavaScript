function gramophone(bandName, albumName, songName) {
    songDuration = albumName.length * bandName.length * songName.length / 2;
    let rotations = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
// One rotation of the gramophone’s plate is 2.5 seconds and the result has to round up
