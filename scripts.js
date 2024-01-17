const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
//aqui estou vendo qual moeda está selecionada

function convertValues(){
   const inputCurrencyValue = document.querySelector(".input-currency").value
    /*vai até o HTML (document.) 
    procuro(querySelector) 
    a classe(.input-currency) 
    pego só o valor(.value)*/

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//em real
    const currencyValueConverted = document.querySelector(".currency-value")//outras moedas

    
    const dolarToday = 5.20
    const euroToday = 6.20

   
    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    //currencyValueToConvert.innerHTML = inputCurrencyValue
    /*mudar o conteudo HTML(innerHTML)*/
    //currencyValueConverted.innerHTML = convertedValue
    
    /*Agora vamos deixar os valores bonitinhos, com ponto, cifrão
    e dois zeros depois da vírgula */

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    }

function changeCurrency(){ //
    const currencyMoney = document.getElementById("currency-money")
    /*constante procura no HTML, elemento com id currency-money */
    const currencyImg = document.querySelector(".img-country")

    if (currencySelect.value == "dolar") {
        currencyMoney.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }//se o valor for dolar, troque o nome e img para...

    if (currencySelect.value == "euro") {
        currencyMoney.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }//se o valor for euro, troque o nome e img para...
   
    convertValues()
    //quando mudar o select, chame a fução q converte   valor
}

convertButton.addEventListener("click", convertValues)
/*ouvinte de eventos(addEventListner) adicionado no botão converter(convert-button)
ele está companhando quando o evento de clique(click)
acontecer. qd acontecer ele vai chamar a função (convertValues) criada acima*/

currencySelect.addEventListener("change", changeCurrency)

//quando mudar o select, converta tambem o valor