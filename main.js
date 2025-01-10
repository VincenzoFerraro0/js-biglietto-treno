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

    c -calcolare il 20% dal prezzo del viaggio 
        c.1 calcolare il 40% dal prezzo del viaggio

    d -condizione:
        d.1 -se l' età  dell' utente è < di 18 anni verra applicato uno sconto del 20% al biglietto 
            d.2 -se l'età dell'utente è > di 65 anni verra applicato uno sconto del 40% al biglietto
                 d.3 -altrimenti paga il prezzo intero del biglietto 
*/

// FASE DI PREPARAZIONE 
let km = parseInt(prompt("Quanti km vuoi percorrere?"));
let age = parseInt(prompt("Quanti anni hai ?"));
let priceKm = 0.21;
// calcolo del prezzo 
let priceTravel = (km * priceKm);
// calcolo sconto 20%
let discountForMinors = (priceTravel * 20) / 100;
// calcolo sconto 40% 
let discountOver65 = (priceTravel * 40) / 100;

let priceBiglietto; 

console.log(priceTravel);

// FASE DI ELABORAZIONE 
if (age < 18 ) {
   priceBiglietto = (`Ciao lei è minorenne le verra applicato uno conto del 20%, paga: ${(priceTravel - discountForMinors).toFixed(2)}€`)

}else if (age > 65 ) {
    priceBiglietto = (`Ciao lei è over 65 le verra applicato uno conto del 40%, paga: ${(priceTravel - discountOver65).toFixed(2)}€`)

}else {
    priceBiglietto = (`Ciao lei è uno sfigato paga e basta ${(priceTravel).toFixed(2)}€`)
}

// FASE DI OUTPUT

alert (priceBiglietto)