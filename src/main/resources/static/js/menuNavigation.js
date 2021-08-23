/**
 * 
 */
 function funcaoOnMouseOverObjetoMenuNavigatio(idObjetoMenu){
	let bloco1=document.getElementById('bloco'+idObjetoMenu+'1');
	let bloco2=document.getElementById('bloco'+idObjetoMenu+'2');
	bloco1.style.display="block";
	bloco2.style.display="block";
	var arraydeFilhos=bloco1.childNodes;
	console.log(arraydeFilhos[3].childNodes[1].id);	
 }
 function funcaoOnMouseLeaveObjetoMenuNavigatio(idObjetoMenu){
	let bloco1=document.getElementById('bloco'+idObjetoMenu+'1');
	let bloco2=document.getElementById('bloco'+idObjetoMenu+'2');	
	bloco1.style.display="none";
	bloco2.style.display="none";
}
 function funcaoOnMouseOverObjetoLista(nomeDefault){
	
}