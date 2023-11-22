const heroi = "Jesus"
let nivel = ""
let xp = ""

for (let xp = 0;xp < 12000; xp += 1000) {
if (xp <= 1000) {
    nivel = "Ferro"
    console.log(`O Herói de nome ${heroi} está no nível ${nivel}`)  
} else if (xp <= 2000) {
    nivel = "Bronze"
    console.log(`O Herói de nome ${heroi} está no nível ${nivel}`) 
} else if (xp <= 5000) {
    nivel = "Prata" 
    console.log(`O Herói de nome ${heroi} está no nível ${nivel}`)
} else if (xp <= 7000) {
    nivel = "Ouro" 
    console.log(`O Herói de nome ${heroi} está no nível ${nivel}`)
} else if (xp <= 8000) {
    nivel = "Platina" 
    console.log(`O Herói de nome ${heroi} está no nível ${nivel}`)
} else if (xp <= 9000) {
    nivel = "Ascendente" 
    console.log(`O Herói de nome ${heroi} está no nível ${nivel}`)
} else if (xp <= 10000) {
    nivel = "Imortal" 
    console.log(`O Herói de nome ${heroi} está no nível ${nivel}`)
} else {
    nivel = "Radiante"
    console.log(`O Herói de nome ${heroi} está no nível ${nivel}`)
}
}


