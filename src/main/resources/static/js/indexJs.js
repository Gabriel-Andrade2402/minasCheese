/**
 * 
 */
function openBlocoLanches(id,idImg,idBlocoInline){
 let bloco=document.getElementById(id);
 let img=document.getElementById(idImg);
 let blocoInline=document.getElementById(idBlocoInline);
 if(bloco.style.height!='130%'){
 	img.style.height="59%";
 	bloco.style.height="130%";
 	blocoInline.style.marginBottom="10%";
 }else{
 	img.style.height="85%";
 	bloco.style.height="90%";
 	blocoInline.style.marginBottom="0px";
 }
}