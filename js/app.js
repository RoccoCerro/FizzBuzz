// ESERCIZIO
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// PSEUDOCODICE
// Stampare in console i numeri da 1 a 100
    // Creo un ciclo for 
        // Apro il ciclo for, creo la variabile i, inserisco la condizione i < 100, incremento i di 1 ogni volta che si ripete il ciclo.
            // Nel ciclo creo una variabile num = i + 1
            // Creo il log di num per vedere se effettivamente sto stampando tutti i numeri da 1 a 100
            // Verifico se il numero sia divisile per 3 o per 5 o per entrambi
                // Creo una nuova variabile (modulo3) in cui svolgero l'operazione modulo per vedere se num in questo momento è un multiplo di 3
                // Creo una nuova variabile (modulo5) in cui svolgero l'operazione modulo per vedere se num in questo momento è un multiplo di 5
                // Creo un ciclo if
                    // IF (modulo3 === 0 && modulo5 !== 0)
                        // log(fizz)
                    // ELSE IF (modulo5 === 0 && modulo3 !== 0)
                        // log(buzz)
                    // ELSE IF (modulo3 === 0 && modulo5 === 0)
                        // log(FizzBuzz)
                    // ALTRIMENTI 
                        // log(num)
// BONUS1
// Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
// Potete usare innerHTML oppure il metodo append creando l’elemento come oggetto usando createElement

// PSEUDOCODICE
// Creo un container nell'html
// Creo una ul nel container
// Creo una variabile ulElement con cui selezionerò l' ul creata nel dom
// Creo un li come oggetto da inserire nell'ul del dom (ulElement)
    // Creo una variabile (li) in cui inserisco l'oggetto "li" con la funzione createelement
// Inserisco il valore che esce dall'if nel li 
    // Creo una variabile (risultato) in cui inserirò il valore ricevuto dall'if 
    // li.innerhtml = risultato
// Appendo l'li nell'ul

let n = 100;
const ulElement = document.querySelector("ul");

for (let i = 0; i < n; i++){
    let num = i + 1;
    console.log("Valore della i =",num);
    
    const li = document.createElement("li");
    let risultato = num;
    let color = "#1389B2";
    let modulo3 = num % 3;
    let modulo5 = num % 5;
    console.log("Valore dei moduli ",modulo3,modulo5)
    
    if (modulo3 === 0 && modulo5 === 0){
        console.log("FizzBuzz");
        risultato = "FizzBuzz";
        color = "#F0466F";
    }
    else if (modulo3 === 0){
        console.log("Fizz");
        risultato = "Fizz";
        color = "#FFD166"
    }
    else if (modulo5 === 0){
        console.log("Buzz");
        risultato = "Buzz";
        color = "#0CD6A1"
    }
     
    // else {
    //     console.log(num);
    //     risultato = num;
    // }

    console.log("Risultato ", risultato)
    li.innerHTML = risultato;
    console.dir(li)
    li.style.aspectRatio = 1;
    li.style.backgroundColor = color;
    li.style.listStyle = "none";
    ulElement.append(li)
    console.log(li);
}