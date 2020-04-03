 function Player(music) {
     this.audio = new Audio();
     this.audio.src = music.url;
     this.performer = music.performer
     this.songname = music.songname
     this.event();
 }
 Player.prototype.event = function () {
     let lb1 = document.querySelector('.lb1')
     let lb3 = document.querySelector('.lb3')
     let playmusic = document.querySelector('.playm');
     let pausemusic  = document.querySelector('.pausem');
     let stopmusic  = document.querySelector('.stopm');
     
     playmusic.addEventListener('click', function () {
         playmusic .style.display = 'none';
         pausemusic .style.display = 'block';
         lb1.style.display = 'none'
         lb3.style.display = 'block'
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
         lb1.style.display = 'block'
         lb3.style.display = 'none'
         this.audio.pause()
     }.bind(this));

     document.getElementById("volumein").addEventListener("mousemove", function () {
         this.audio.volume = volumein.value / 100;
     }.bind(this));

     document.querySelector('.performer').innerText = this.performer;
     document.querySelector('.songname').innerText = this.songname;
 }
 music = {
     url: 'http://mp3-top.info/id-3822.mp3',
     performer: 'Bon Jovi',
     songname: 'Its My Life'
 }
 let songs = new Player(music)
