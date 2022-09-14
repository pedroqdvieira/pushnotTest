const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm =>{
        if (perm === "granted"){
            const notification = new Notification("Exemplo",{
                body: Math.random(), 
                data: {hello: "World"},
                //tag: "Bem vindo",
            })

            notification.addEventListener("close", e => {
                console.log(e)
            })
        }
    })
})

let notification
let interval
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        const leaveDate = new Date()
        interval = setInterval(() => {
            notification = new Notification("Volta porfavor", {
                body: `Voce ta sumido por ${Math.round((new Date() - leaveDate) / 1000)} segundos`,
                tag: "Volta",
            })
        }, 100)
        
    } else{
        if (interval) clearInterval(interval)
        if (notification) notification.close()
    }

})