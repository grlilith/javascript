const data = new Date()

const dia = String(data.getDate()).padStar(2,'0')  //1 -> 01

const mes = String(data.getmounth() + 1).padStar(2,'0') // jan = 0, 3->03

const ano = data.getFullYear()//2023

const dataAtual = `${dia}/${mes}/${ano}`

 console.log(dataAtual)