let num = document.getElementById('txtnum')
let sel = document.getElementById('txtsel')
let res = document.getElementById('txtres')
let clickadd = document.querySelector('.txtadd')
let valores = []

function numeros(n) {
if (Number(num.value) >= 1 && Number(num.value) <= 1000) {
return true }
else {
    return false
}
}
function lista(n, v) {
if (v.includes(Number(num.value)) == true) {
    return false
} else {
    return true
}
}

function analisar() {
    if (numeros(num.value) && lista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `o valor ${num.value} foi adicionado.`
        sel.appendChild(item)
        num.value = ''
        num.focus()
        
        
    
    } else {
        window.alert('ERRO, NÚMERO INVALIDO OU JA ENCONTRADO')
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('ERRO, ADICIONE NUMEROS ANTES DE FINALIZAR')
    } else {
    let soma = 0
    for (let c = 0 ; c<valores.length ; c++) {
        soma += valores[c]
    }
    
    
    res.innerHTML = `<p> você adicionou no total ${valores.length} valores </p> `
    res.innerHTML += `<p> o menor valor adicionado foi ${valores.sort()[0]} </p> `
    res.innerHTML += `<p> o maior valor adicionado foi ${valores.reverse()[0]} </p> `
    res.innerHTML += `<p> a soma de todos os valores é de ${soma} </p> `

    
}   }

function limpar() {
    if (valores.length == 0) {
        window.alert('ERRO, ADICIONE NUMEROS ANTES DE LIMPAR')
    }
    res.innerHTML = ''
    sel.innerHTML = ''
    valores = []
}
clickadd.addEventListener('click',() => {
    if (res.innerHTML != '') {
        limpar()
    }
})
num.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
      // colocas aqui a tua função a rodar ///// Ao pressionar botão enter, acionar função adicionar()
      analisar()
    }
  });
