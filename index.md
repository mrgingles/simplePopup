simplePopup
===========
##### Author: Vincenzo Mennella
##### Released under MIT License

### Description / Descrizione

simplePopup allows you to create (very) simple draggable, customizable and unobtrusive popups. You can open multiple popups at the same time and choose what of them bring to front just by clicking it.
All the popups are draggable (using jQueryUI draggable) and you can avoid overlapping with just one line of code.
The created popups won't lock the page behind, so you can continue working on your HTML document while the popup is open.
You can put everything you want in the popups!

simplePopup ti consente di creare dei popup (molto) semplici trascinabili, personalizzabili e discreti. Puoi aprire più popup allo stesso tempo e scegliere quale di essi visualizzare in cima semplicemente cliccandolo.
Tutti i popup possono essere trascinati (utilizzando jQueryUI draggable) ed è possibile evitare sovrapposizioni con una singola riga di codice.
I popup non bloccano la pagina che si sta visualizzando, quindi è possibile continuare a lavorare sul documento HTML sottostante  mentre il popup è aperto.
E' possibile inserire qualunque cosa nei popup!

### Examples / Esempi

Initialize simplePopup / Inizializzare simplePopup
```javascript
$('#myPopup').simplePopup();
```

Open or close a popup / Aprire o chiudere un popup
```javascript
$('#myPopup').simplePopup('open');
$('#myPopup').simplePopup('close');
```

Initialize a popup with options and show it / Inizializzare un popup con delle opzioni e mostrarlo
```javascript
$('#myPopup').simplePopup({
	"opt": "val";
}, "open");
```

### Available options / Opzioni disponibili

- **open**: to show the popup / mostra il popup
- **close**: to hide the popup  / nasconde il popup
- **destroy**: to destroy the popup / distrugge il popup
- **moveToTop**: brings the popup to top / sposta il popup in cima
- **closeAll**: closes all popups / chiude tutti i popup
- **openAll**: opens all popups / apre tutti i popup

Any DOM object with class *simplemodal_close_button* will close the popup when clicked

Ogni oggetto del DOM con classe *simplemodal_close_button* farà chiudere il popup quando cliccato

### Demo

Demo available in /demo folder of simplePopup

La demo è disponibile nella cartella /demo di simplePopup
