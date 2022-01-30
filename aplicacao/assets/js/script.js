let btnStart = document.querySelector(".item.start");
let min = document.querySelector('.tempo .min');
let sec = document.querySelector('.tempo .sec');
let mil = document.querySelector('.tempo .mil');

let timer,c=0,i=0,j=0,naoCount = true;

function count(){
	if (naoCount) {
		naoCount = false;
		timer = setInterval(()=>{
			c +=10;
			mil.innerText = c;
			if (c==1000) {
				i++;
				sec.innerText = i
				if (i==60) {
					j++;
					min.innerText = j;
					i = 0
				}
				c = 0;
			}
		},10);
	} else{
		alert("Ja esta a Contar");
	}
}

function stop(){
	if (!naoCount) {
		naoCount = true;
		clearInterval(timer);
		setTimeout(()=>{
			btnStart.classList.add('cont');
			btnStart.innerText = "Continuar";
		},200);
	}else{
		alert("Ja esta em Pausa");
	}
}
function again(){
		clearInterval(timer);
		mil.innerText = "-";
		sec.innerText = "-";
		min.innerText = "-";
		naoCount = true;
		c=0;
		i=0;
		j=0;
		setTimeout(()=>{
			btnStart.classList.remove('cont');
			btnStart.innerText = "Iniciar";
		},200);
}