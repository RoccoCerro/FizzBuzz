// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

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