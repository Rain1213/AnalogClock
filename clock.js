setInterval(clockTick, 1000);

const hrHand = document.querySelector('[data-hr]');
const minHand = document.querySelector('[data-min]');
const secHand = document.querySelector('[data-sec]');

function clockTick(){
	const curDate = new Date();
	const sec = curDate.getSeconds()/60;
	const min = (sec + curDate.getMinutes())/60;
	const hr = (min + curDate.getHours())/12;

	rotate(secHand,sec);
	rotate(minHand,min);
	rotate(hrHand,hr);

}
function rotate(element, value){
	element.style.setProperty("--rotation",value*360);
}
clockTick();