const convertButton = document.querySelector(".convert-button")


function convertValues(){
   const inputCurrencyValue = document.querySelector(".input-currency").value
    /*vai até o HTML (document.) 
    procuro(querySelector) 
    a classe(.input-currency) 
    pego só o valor(.value)*/

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//em real
    const currencyValueConverted = document.querySelector(".currency-value")//outras moedas

    const dolarToday = 5.20

    const convertedValue = inputCurrencyValue / dolarToday

    //currencyValueToConvert.innerHTML = inputCurrencyValue
    /*mudar o conteudo HTML(innerHTML)*/
    //currencyValueConverted.innerHTML = convertedValue
    
    /*Agora vamos deixar os valores bonitinhos, com ponto, cifrão
    e dois zeros depois da vírgula */

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
}

convertButton.addEventListener("click", convertValues)
/*ouvinte de eventos(addEventListner) adicionado no botão converter(convert-button)
ele está companhando quando o evento de clique(click)
acontecer. qd acontecer ele vai chamar a função (convertValues) criada acima*/
