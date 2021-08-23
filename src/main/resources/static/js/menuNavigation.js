/**
 * 
 */
 function funcaoOnMouseOverObjetoMenuNavigatio(idObjetoMenu){
	let bloco1=document.getElementById('bloco'+idObjetoMenu+'1');
	let bloco2=document.getElementById('bloco'+idObjetoMenu+'2');
	bloco1.style.display="block";
	bloco1.childNodes.forEach(function(obj,indice,array){
		if(indice!=0){
			obj.onmouseover=function(){
				funcaoOnMouseOverObjetoLista(obj.childNodes[1].id,bloco2);
			};
			obj.onmouseleave=function(){
				funcaoOnMouseLeaveObjetoLista(obj.childNodes[1].id,bloco2);
			};
		}
	});
	//console.log(arraydeFilhos[3].childNodes[1].id);	
 }
 function funcaoOnMouseLeaveObjetoMenuNavigatio(idObjetoMenu){
	let bloco1=document.getElementById('bloco'+idObjetoMenu+'1');
	let bloco2=document.getElementById('bloco'+idObjetoMenu+'2');	
	bloco1.style.display="none";
	bloco2.style.display="none";
}
 function funcaoOnMouseOverObjetoLista(nomeDefault,bloco2){
	bloco2.style.display="block";
	let imagemObj=document.getElementById("imgBloco2");
	let textObj=document.getElementById("contentTxt");
	let textTitleObj=document.getElementById("titleTxt");
	if(imagemObj==null){
		let imagem=document.createElement("img");
		let text=document.createElement("span");
		let textTitle=document.createElement("span");
		imagem.setAttribute('src','/imagens/conteudos/'+nomeDefault+'1.png');
		imagem.id="imgBloco2";
		imagem.classList.add("imagemObjListNavigation");
		textTitle.textContent=nomeDefault;
		textTitle.id="titleTxt";
		textTitle.classList.add("textoTituloObjListNavigation");
		text.textContent=retornarTextConteudoObjList(nomeDefault);
		text.id="contentTxt";
		text.classList.add("textoConteudoObjListNavigation");
		text.style.color="#A0522D";
		bloco2.appendChild(imagem);
		bloco2.appendChild(textTitle);
		bloco2.appendChild(text);	
	}else{
		imagemObj.setAttribute('src','/imagens/conteudos/'+nomeDefault+'1.png');
		textObj.textContent=retornarTextConteudoObjList(nomeDefault);
		textTitleObj.textContent=nomeDefault;
	}
}
 function funcaoOnMouseLeaveObjetoLista(nomeDefault,bloco2){
	bloco2.style.display="none";
}