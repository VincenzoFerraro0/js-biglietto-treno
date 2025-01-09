/*  
    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
    - L'output del prezzo finale va messo fuori in forma umana
    (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
    Buon lavoro!
*/

// INIZIO

/* 
    a -dichiarare e inizializzare le variabili 
        a.1 -le variabili km e età dovranno essere dichiarate dall'utente
    
    b -calcolare il prezzo del biglietto tramite le informazioni dichiarate dall'utente 
        b.1 eseguire il prodotto di km e il prezzo (0.21 € al km)

    c -condizione se l' età  dell' utente è < di 18 anni verra applicato uno sconto del 20%
        c.1 -se l'età dell'utente è > di 65 anni verra applicato uno sconto del 40% 
            c.2 -altrimenti paga il prezzo calcolato 
*/

// dichiarazione variabili
let km = parseInt( prompt("Quanti km vuoi percorrere?", "10") );
let age = parseInt( prompt("Quanti anni hai ?", "10") );
let priceKm = 0.21;
let discountForMinors = 20% ;



// calcolo del prezzo 
let priceTravel = (km * priceKm)

console.log(priceTravel)

//  condizione 

if (age < 18 ) {

    console.log (priceTravel - discountForMinors );

}


