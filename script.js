const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm =>{
        if (perm === "granted"){
            const notification = new Notification("Exemplo",{
                body: "Mais texto", 
                data: {hello: "World"}
            })

            notification.addEventListener("close", e => {
                console.log(e)
            })
        }
    })
})