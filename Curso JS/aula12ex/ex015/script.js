function carregar() {
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = "#b9846f"
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}
