
let log = new Log(document.querySelector('.log'))

let char = new Guerreiro('Samuel')
let monstro = new PequenoMonstro();

const cenario = new Cenario(
    char,
    monstro,
    document.querySelector('#char'),
    document.querySelector("#monstro"),
    log
)

cenario.start();