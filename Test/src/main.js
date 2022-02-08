var ordin = document.querySelector("#img");
var stop = 7;
var time = 1000;
var i=1;


var ord = async ()=>{
	console.log(i);
	setTimeout(()=>{
		console.log('setTimeout'+1);
		ordin.classList.remove("out");
		ordin.classList.add("in");
		ordin.src = "./Ordin/"+i+".png";
		setTimeout(()=>{
			ordin.classList.add("out");
			ordin.classList.remove("in");
		},800)
		
		i = i+1;
		if(i>7)
			i=1;
		ord();
	}, time);
}

ord();




