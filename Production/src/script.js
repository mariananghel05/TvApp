document.documentElement.style.cssText = "--background: #212130; --button: #dd4124; --text: white; " + "--width: " + innerWidth +"px; --height: " + innerHeight + "px;"

window.addEventListener('resize', ()=>{
    document.documentElement.style.cssText +="--width: " + innerWidth +"px; --height: " + innerHeight  + "px;" 
})
