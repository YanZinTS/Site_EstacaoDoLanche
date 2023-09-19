function exibirCombo() {
    document.getElementById('linkCombo').style.display = 'flex'
    document.getElementById('linkHamburguer').style.display = 'none'
    document.getElementById('linkHamburguer2').style.display = 'none'
}

function exibirHamburguer() {
    document.getElementById('linkHamburguer').style.display = 'flex'
    document.getElementById('linkHamburguer2').style.display = 'flex'
    document.getElementById('linkCombo').style.display = 'none'
}