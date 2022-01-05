class Player{
	constructor(){
	}
	init(){
	}

	create(){
		this.audio = new Audio();

		this.container = new Element('div');
		this.prev = new Element('button');
		this.play = new Element('button');
		this.next = new Element('button');
		this.trackButton = new Element('button');
		this.trackList = new Element('ul');	
		this.progressBar = new Element('progress');	
		this.title = new Element('span');
	}

	start(){
		this.prev.addClass("prev");
		this.play.addClass("play");
		this.next.addClass("next");
		this.trackButton.addClass("trackButton");
		this.progressBar.addClass("progressBar");
		this.title.addClass("title");
		this.trackList.addClass("trackList");

		this.prev.setText("prev");
		this.play.setText("play");
		this.next.setText("next");
		this.trackButton.setText("trackButton");
		this.title.setText("title");
		
		this.play.onClick(()=>{
			this.audio.play();
		});

		document.body.appendChild(this.container.element);
		this.container.addChild(this.prev.element);
		this.container.addChild(this.play.element);
		this.container.addChild(this.next.element);
		this.container.addChild(this.trackButton.element);
		this.container.addChild(this.progressBar.element);
		this.container.addChild(this.title.element);
		this.loadTrack();
	}

	async loadData(){	
		var getRequest = new Request();	
		return	await getRequest.sendRequest();
	}

	async loadTrack(){
		var data = await this.loadData();
		if(data.message)
			this.title.setText(`${data.message}`);
		else
			this.audio.src = data.link + data.audios[3];
			this.title.setText(data.audios[3].split('.')[0]);
	}
}



class Request{
	constructor(request="GET" ,url="https://mariananghel05.github.io/TvApp/config/playlist.json"){
		this.url = url
		this.request = request;
	}
	async sendRequest(request, url){
		if(request == null && url == null){
			var request = this.request;
			var url = this.url;
		}
		try{
			return await $.ajax({
				type: request,
				url: url,
				success: function(data, status) {
				},
				error: function(xhr, status, error) {
				}
			});
		}
		catch{
			return new Error(`${request} method failed on url: ${url}`);
		}
	}
}


class Element{
	constructor(elementType){
		this.element = document.createElement(elementType);
		Element.instances.push(this.element);
	}
	
	addClass(className){
		this.element.classList.add(className);
	}
	removeClass(className){
		this.element.classList.remove(className);
	}
	hasClass(className){
		this.element.classList.contains(className);
	}
	setText(text){
		this.element.textContent=text;
	}
	appendText(text){
		this.element.textContent+=text;
	}
	setHTML(HTML){
		this.element.innerHTML = HTML;
	}
	appendHTML(HTML){
		this.element.innerHTML += HTML;
	}
	addChild(element){
		this.element.appendChild(element);
	}
	onClick(implementation){
		this.element.addEventListener("click", implementation);
	}

}
Element.instances = [];
Element.prototype.getInstances = function (){
		return Element.instances;
}

