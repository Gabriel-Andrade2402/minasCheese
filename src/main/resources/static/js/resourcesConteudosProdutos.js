/**
 * 
 */
 var textCenteio="Pão de centeio é um tipo de pão que tem como matéria-prima o cereal centeio. ... Em Trás-os-montes (Chaves), Beira interior e outras regiões o pão tradicional é frequentemente feito com farinha de centeio. Em regiões onde os terrenos eram mais pobres cultivou-se a semente do centeio";
 var textMarraqueta="Também conhecido como “pan batido” ou “pan francês” no Chile, é o tipo mais consumido no país. Sua principal característica é a crocância e seu formato peculiar, com quatro partes de massa – pães pequenos – unidos em uma só peça e que podem ser facilmente partidos para dividir.";
 var textHallula="Os hallulas são pães lisos, com formato redondo e achatado, consistência firme e semi esponjosa, usados em vários sanduíches chilenos. São preparados com farinha de trigo, fermento, leite, água morna, sal e manteiga.";
 var textFrances="O pão francês, também conhecido como pão cacetinho, pãozinho ou pão de sal, é um tipo de pão feito de farinha, sal, água e fermento. Este pão tem um exterior crocante, e é popular no Chile, Brasil, na região dos Andes da Bolívia e do Peru mas também pode ser encontrado na Argentina e no Uruguai.";
 var textAveia="Pão de aveia é um pão-folha feito com flocos de aveia ou outro produto preparado com aveia típico da Grã-Bretanha. Existem variantes, sendo a da Escócia considerada um produto tradicional, com uma das marcas comerciais atestada pela rainha.";
 var textLinhaca="Leve e saboroso, este pão é feito com grãos de linhaça batido. Excelente para fazer sanduíches ou comer molhadinho na sopa. E no café da manhã, com o recheio que você quiser.";
 var textChia="Farinha de trigo integral, farinha de trigo fortificada com ferro e ácido fólico, gordura vegetal, glúten, fibra de trigo, chia, quinoa vermelha, sal e cloreto de potássio";
 var textAlentejano="Este pão tão apreciado na gastronomia portuguesa, usado sobretudo em açordas, bolos, migas e fatias douradas, tem como característica seu interior compacto de sabor ácido, sua côdea rija e sem brilho.";
 var textPaoPreto="O Pão Preto possui farelo de trigo que é rico em ﬁbras e auxilia no melhor funcionamento do seu organismo. Farinha de trigo integral, fibra de trigo, germe de trigo, farinha de trigo enriquecida com ferro e ácido fólico, óleo de girassol, fermento biológico, sal marinho, cevada em pó, propionato de cálcio.";
 var textAustraliano="A massa escura, macia e adocicada desse pão tão popular leva melado de cana e cacau. Para deixar a casca com essa aparência rústica, vai uma polvilhada de fubá antes de assar. É campeão de audiência e sucesso garantido no brunch";
 var textCiabatta="A Ciabatta é um tanto alongada, larga e achatada, e é cozida em muitas formas diferentes. O pão é feito com uma farinha com alto teor de glúten e usa uma massa muito mais úmida do que o pão francês tradicional.";
 var textFocaccia="A focaccia é um delicioso pão feito com bastante azeite. Ela é achatada, quase como uma pizza, mas tem um miolo bem leve e aerado";
 var textBrioche="Brioche é um pão de origem francesa, feito com alto teor de manteiga e ovo. É 'leve e ligeiramente inchado, mais ou menos bem, de acordo com a proporção de manteiga e de ovos'. Ele tem uma crosta dourada escura, e escamosa, muitas vezes, acentuada por uma lavagem do ovo aplicado após a correção";
 var textBaguete="Baguete (do francês baguette) é uma variedade de pão francês característico por sua forma alongada e casca crocante.";
 
 function retornarTextConteudoObjList(nameDefault){
	console.log(nameDefault);
	switch(nameDefault){
		case "centeio":
			return textCenteio;
			break;
		;
		case "marraqueta":
			return textMarraqueta;
			break;
		;
		case "hallula":
			return textHallula;
			break;
		;
		case "frances":
			return textFrances;
			break;
		;
		case "aveia":
			return textAveia;
			break;
		;
		case "linhaca":
			return textLinhaca;
			break;
		;
		case "chia":
			return textChia;
			break;
		;
		case "alentejano":
			return textAlentejano;
			break;
		;
		case "paoPreto":
			return textPaoPreto;
			break;
		;
		case "australiano":
			return textAustraliano;
			break;
		;
		case "ciabatta":
			return textCiabatta;
			break;
		;
		case "focaccia":
			return textFocaccia;
			break;
		;
		case "brioche":
			return textBrioche;
			break;
		;
		case "baguete":
			return textBaguete;
			break;
		;
	}
}