// chiedi il nome all'utente
    var userName = prompt('Qual è il tuo nome?');
    console.log()
// chiedere all'utente il frutto preferito
    var favFruit = prompt('Qual è il tuo frutto preferito?');

// chiedere all'utente quanta frutta mangia quotidianamente
    var fruitQuantity = prompt('Quanta frutta mangi?');

// mostra un messaggio di saluto 
    
    var greetingElement = document.getElementById('greetings');
    greetingElement.innerHTML = "Ciao " + userName;

// mostra un messaggio con il frutto preferito e quanto ne mangia
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = "Il tuo frutto preferito è " + favFruit + " e ne mangi " + fruitQuantity;
