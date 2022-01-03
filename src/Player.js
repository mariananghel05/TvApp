var Player = {
//Attributes
	playlistLink 					: "https://mariananghel05.github.io/TvApp/config/playlist.json",
	playlist						: function () { return $.get(this.playlistLink, function(data){})},
	index							: 0,
	
	stylesheetLink					: "https://mariananghel05.github.io/TvApp/config/stylesheet.css",
	stylesheet						: function () { return $.get(this.stylesheetLink, function(data){})},
	
	playButton						: document.createElement('button'),
	next							: document.createElement('button'),
	prev							: document.createElement('button'),
	TrackList						: document.createElement('button'),
	container						: document.createElement('div'),
	list 							: document.createElement('ul'),
	style							: document.createElement('style'),
	progressBar						: document.createElement('progress'),
	title							: document.createElement('span'),
	
	selectableElements 				: [],
	selectableListElements			: [],
	
	audioPlayer						: new Audio(),
		
		
//Methodes
	init							: function (){		
										//Load components
										$("mediaPlayer").replaceWith(this.container);
										this.container.appendChild(this.prev);
										this.container.appendChild(this.playButton);
										this.container.appendChild(this.next);
										this.container.appendChild(this.TrackList);
										this.container.appendChild(this.progressBar);
										this.container.appendChild(this.title);
										this.container.appendChild(this.style);
										
										//add styling
										this.stylesheet().done(((data)=>{
											$(this.style).text(data);
										}));
										
										//Adding classes and id's for components
										this.playButton.setAttribute("id", "playButton");
										this.playButton.setAttribute("class", "play");
										this.prev.setAttribute("id", "prev");
										this.next.setAttribute("id", "next");
										this.TrackList.setAttribute("id", "TrackList");
										this.style.setAttribute("id", "style");
										this.title.setAttribute("id", "title");
										this.progressBar.setAttribute("id", "progressBar");
										this.progressBar.setAttribute("value", "0");
										this.progressBar.setAttribute("max", "50");
										
										//Adding events on components
										this.playButton.addEventListener('click', ()=>{
											if($(this.playButton).hasClass("play")){
												this.play();
												$(this.playButton).removeClass("play");
												$(this.playButton).addClass("pause");
											}
											else{
												this.pause();
												$(this.playButton).removeClass("pause");
												$(this.playButton).addClass("play");
											}
												
										});
										this.prev.addEventListener('click', ()=>{this.prevTrack();});
										this.next.addEventListener('click', ()=>{this.nextTrack();});
										
										
										//Load a track and save components handles
										this.loadTrack();
										this.setPlayerTime();
										
										this.selectableElements.push(prev);
										this.selectableElements.push(playButton);
										this.selectableElements.push(next);
										this.selectableElements.push(TrackList);
									},
	setPlayerTime					: function (){
										setTimeout(() => {
											this.progressBar.setAttribute("max", ""+this.audioPlayer.duration);
											this.progressBar.setAttribute("value", ""+this.audioPlayer.currentTime);
											this.playlist().done((data)=>{
												if(!this.audioPlayer.error)
													this.title.innerHTML = data.audios[this.index];
												else
													this.title.innerHTML = this.audioPlayer.error.message;
												});
											this.setPlayerTime();
											console.log(this.index);
											console.log(this.audioPlayer.error);
										}, 1000);
										
									},
	play							: function (){
										if(!this.audioPlayer.error)
											this.audioPlayer.play();
									},
    pause							: function (){
    									this.audioPlayer.pause();
    								},
    loadTrack   					: function (){
    									this.playlist().done((data)=>{
    										this.audioPlayer.src = data.link + data.audios[this.index];
    										if($(this.playButton).hasClass("pause"))
    											this.play();
										});
    								},
	nextTrack						: function (){
										this.index++;
										this.checkIndex();
										this.loadTrack();
									},
	prevTrack						: function (){
										this.index--;
										this.checkIndex();
										this.loadTrack();
									},
	checkIndex						: function (){
										this.playlist().done((data)=>{
											if(this.index < 0)
												this.index = 0;
											if(this.index > data.audios.length - 1)
												this.index = data.audios.length - 1;
										});
									},
	beautify						: function (){},
	getComponentsHandles			: function (){
										return this.selectableElements;
									},
	volumeUp						: function(value){
										if(this.audioPlayer.volume += value/100 > 1)
											this.audioPlayer.volume += value/100;
									},
	volumeDown						: function(value){
										if(this.audioPlayer.volume -= value/100 < 0)
											this.audioPlayer.volume -= value/100;
									},
	mute							: function(){
										this.audioPlayer.muted = !this.audioPlayer.muted;
									},
//Test
	getData							: function (){ this.playlist().done(
													function (data){
														console.log(data.audios);
														console.log(data.link);
													}
												);},
		
}
