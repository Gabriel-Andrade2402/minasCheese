/**
 * 
 */
 function inicializacao(){
	ScrollManipulation();
	setTimeout(function (){
		let juncaoLogo=document.getElementById('blockJuncao');
		juncaoLogo.style.left="10%";
		juncaoLogo.style.opacity="1";
	},200);
}
 function ScrollManipulation(){
	window.addEventListener('scroll',function(ev){
		if (window.scrollY >50){
    		let titleArticle1=document.getElementById('titleArticlePaes');
    		let imagem=document.getElementById('backgroundArticle1');
    		titleArticle1.style.left="9%";
			titleArticle1.style.opacity="1";
			imagem.style.boxShadow="3px 3px 10px black";
    	}
    	if(window.scrollY>150){
    		let conteudoArticle1=document.getElementById('contentArticlePaes');
    		conteudoArticle1.style.left="10%";
			conteudoArticle1.style.opacity="1";
    	}
    	if(window.scrollY>1400){
    		
    	}
    	if(window.scrollY>2100){
    		
    	}
    	if(window.scrollY>2800){
    		
    	}
    	if(window.scrollY<100){
    		
    	}

	})

}