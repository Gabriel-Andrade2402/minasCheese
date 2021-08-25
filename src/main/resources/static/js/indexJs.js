var numObjLanchesOpen=0;
function openBlocoLanches(id,idImg,idBlocoInline){
 let article=document.getElementById("articleLanches");
 let bloco=document.getElementById(id);
 let img=document.getElementById(idImg);
 let blocoInline=document.getElementById(idBlocoInline);
 if(bloco.style.height!='130%'){
 	img.style.height="59%";
 	bloco.style.height="130%";
 	blocoInline.style.marginBottom="10%";
 	article.style.marginBottom="430px";
 	numObjLanchesOpen+=1;
 }else{
 	img.style.height="85%";
 	bloco.style.height="90%";
 	blocoInline.style.marginBottom="0px";
 	numObjLanchesOpen-=1;
 	if(numObjLanchesOpen==0){
 		article.style.marginBottom="300px";
 	}
 }
}



function closeContentHeader(){
	let jucao=document.getElementById("blockJuncao");
	let logomarca=document.getElementById("logomarca");
	let botaoFechar=document.getElementById("botaoFecharContentHeader");
	blockJuncao.style.opacity="0";
	blockJuncao.style.left="40%";
	botaoFechar.style.opacity="0";
	botaoFechar.style.left="120%";
	logomarca.style.height="530px";
	logomarca.style.width="530px";
	logomarca.style.left="30%";
	logomarca.style.zIndex="9";
}