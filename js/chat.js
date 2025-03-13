document.addEventListener("DOMContentLoaded", () => {
    // Crear el botón
    const toggleChatBtn = document.createElement("button");
    toggleChatBtn.id = "toggleChatBtn";
    toggleChatBtn.textContent = "💬 Chat";
    document.body.appendChild(toggleChatBtn);

    // Crear el contenedor del chat
    const chatContainer = document.createElement("div");
    chatContainer.id = "chatContainer";
    chatContainer.innerHTML = `
        <iframe src="https://tlk.io/fenixstore" allowtransparency="true"></iframe>
    `;
    document.body.appendChild(chatContainer);

    // Aplicar estilos con JavaScript
    const style = document.createElement("style");
    style.textContent = `
        /* Estilos del botón */
        #toggleChatBtn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #333;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }

        #toggleChatBtn:hover {
            background-color: #444;
        }

        /* Contenedor del chat */
        #chatContainer {
            position: fixed;
            bottom: 70px;
            right: 20px;
            width: 250px;
            height: 350px;
            border: 2px solid #333;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
            overflow: hidden;
            display: none;
        }

        iframe {
                width: 100%;
    		height: calc(100% + 55px);
    		border: none;
    		zoom: 80%;
    		color: white;
    		position: absolute;
    		bottom: 0;
    		background: #5d6475;
    		box-shadow: inset 0px -200px 250px rgb(0 0 0 / 50%);
        }
    `;
    document.head.appendChild(style);

    // Agregar funcionalidad de mostrar/ocultar chat
    toggleChatBtn.addEventListener("click", () => {
        chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "block" : "none";
    });
});
