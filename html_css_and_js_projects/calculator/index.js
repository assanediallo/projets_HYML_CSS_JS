let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button")); // Transforme la collection html en tableau

buttons.map( button => {
    button.addEventListener('click', (e) => {
        console.log("cliked");
        //console.log(e); //événement
        //console.log(e.target); //l'élément qui a déclanché l'événement
        //console.log(e.target.innerText); //le texte de l'élément
        
        switch(e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "⌫":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error!";
                }
                break;
            case "1/𝑥":
                display.innerText = 1/parseInt(display.innerText);
                break;
            case "𝑥²":
                display.innerText = parseInt(display.innerText)*parseInt(display.innerText);
                break;
            case "√":
                display.innerText = Math.sqrt(parseInt(display.innerText));
                break;
            case "+/-":
                display.innerText = -parseInt(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText; //chaque clique sur un bouton rajoute le texte contenu sur notre display
        }
    })
})