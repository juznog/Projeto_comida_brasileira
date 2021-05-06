/*- Mostrar uma tela de boas-vindas na qual se peça, através de prompt,
 o nome do usuário antes de começar a prova.*/

 let name = prompt("Bem vindo a nossa página sobre comidas regionais, qual o seu nome?");


/*- - Mostrar uma tela na qual o usuário pode escolher se quer mesmo
 dar início a prova ou não.*/
 
 let choice = prompt("Você gostaria de começar o teste de conhecimento de comidas regionais?\n 1.Sim \n  2.Não ");
 console.log(choice)

/*Caso ele queira, seguirá para a próxima etapa, descrita no item*/


if ( choice == 1) {



    // primeira questão sobre comida
    let firtsQuestion = prompt (" Acarajé é de qual Estado? \n 1. Bahia \n 2.São Paulo");

    if (firtsQuestion == 1){

        document.getElementById("correta1").innerHTML = "Questão 1 correta"

     }

     else {
        document.getElementById("incorreta1").innerHTML = "Questão 1 incorreta"
     }


    //segunda questão sobre o comida
        let secondQuestion = prompt ("Feijoada é de Qual País? \n 1. Brasil \n 2. China")
        if (secondQuestion == 1){

        document.getElementById("correta2").innerHTML = "Questão 2 correta"

         }

        else {
        document.getElementById("incorreta2").innerHTML = "Questão 2 incorreta"
         }



    //terceira questão sobre o comida
    let thirdQuestion = prompt ("Escolha um prato típico Brasileiro  \n 1. Sushi. \n 2. Arroz e Feijão.");

    if (thirdQuestion == 2){

    document.getElementById("correta3").innerHTML = "Questão 3 correta"

     }

    else {
    document.getElementById("incorreta3").innerHTML = "Questão 3 incorreta"
     }



}

else {
    document.write("Obrigado! Esperamos você em uma próxima oportunidade!")
     }

     document.getElementById ("ola").innerHTML = "Olá, " + name + " ! Confira quantas questões você acertou:"

     document.getElementById ("respostascertas").innerHTML = "Respostas certas:"

     document.getElementById ("respostaserradas").innerHTML = "Respostas incorretas:"

      

/*Caso ele não deseje iniciar, o fluxo deve ser encerrado. */
