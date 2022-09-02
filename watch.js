 function watchDigital() {
     const watch = document.getElementsByClassName("watch")[0]
     const currenttime = new Date().toLocaleTimeString('pt-br')
     watch.innerHTML = currenttime
 }
 setInterval(watchDigital, 1000)