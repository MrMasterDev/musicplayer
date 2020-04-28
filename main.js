 function Player(music) {
     this.audio = new Audio();
     this.audio.src = music.url;
     this.performer = music.performer
     this.songname = music.songname
     this.event();
 }
 Player.prototype.event = function () {
     let label1 = document.querySelector('.label1')
     let label3 = document.querySelector('.label3')
     let playmusic = document.querySelector('.play');
     let pausemusic  = document.querySelector('.pause');
     let stopmusic  = document.querySelector('.stop');
     
     playmusic.addEventListener('click', function () {
         playmusic.style.display = 'none';
         pausemusic.style.display = 'block';
         label1.style.display = 'none'
         label3.style.display = 'block'
         this.audio.play()
     }.bind(this));

     stopmusic.addEventListener('click', function () {
         pausemusic .style.display = 'none';
         playmusic .style.display = 'block';
         this.audio.pause();
         this.audio.currentTime = 0.0;
     }.bind(this));

     pausemusic.addEventListener('click', function () {
         pausemusic .style.display = 'none';
         playmusic .style.display = 'block';
         label1.style.display = 'block'
         label3.style.display = 'none'
         this.audio.pause()
     }.bind(this));

     document.getElementById('volume').addEventListener("mousemove", function () {
         this.audio.volume = volume.value / 100;
     }.bind(this));

     document.querySelector('.performer').innerText = this.performer;
     document.querySelector('.song').innerText = this.songname;
 }
 music = {
     url: 'http://mp3-top.info/id-3822.mp3',
     performer: 'Bon Jovi',
     songname: 'Its My Life'
 }
 let songs = new Player(music)
