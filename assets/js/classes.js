class Character{
    //Variaveis
    _vida = 1;
    maxVida = 100;
    ataque = 0;
    defesa = 0;

    //Construtor
    constructor(name){
        this.name = name;
    }

    get vida(){
        return this._vida;
    }
    set vida(novaVida){
        this._vida = novaVida < 0 ? 0: novaVida;
    }
}

class Guerreiro extends Character{


    constructor(name){
        super(name);
        this.vida = 100;
        this.ataque = 10;
        this.defesa = 8;
        this.maxVida = this.vida;
    }
}

class Mago extends Character{

    constructor(name){
        super(name);
        this.vida = 80;
        this.ataque = 15;
        this.defesa = 3;
        this.maxVida = this.vida;
    }
}




class GrandeMostro extends Character{

    constructor(){
        super("Grande Monstro");
        this.vida = 120;
        this.ataque = 16;
        this.defesa = 6;
        this.maxVida = this.vida;
    }
}


class PequenoMonstro extends Character{

    constructor(){
        super("Pequeno Monstro");
        this.vida = 40;
        this.ataque = 4;
        this.defesa = 4;
        this.maxVida = this.vida;
    }
}




class Cenario{
    //construtor
    constructor(lutador1, lutador2, lutadorE1, lutadorE2, logObject){ //dois lutadores e seu elemento
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
        this.lutadorE1 = lutadorE1;
        this.lutadorE2 = lutadorE2;
        this.log = logObject;
    }
    //funções/action
    start(){
        this.update();
        
        this.lutadorE1.querySelector('.botão_atacar').addEventListener('click', () => this.fazerAtaque(this.lutador1,this.lutador2));
        this.lutadorE2.querySelector('.botão_atacar').addEventListener('click', () => this.fazerAtaque(this.lutador2,this.lutador1));

    }
    update(){
        //lutador1
        this.lutadorE1.querySelector('.nome').innerHTML = `${this.lutador1.name} - ${this.lutador1.vida.toFixed(1)} HP`;
        let f1Pct = (this.lutador1.vida / this.lutador1.maxVida) * 100;
        this.lutadorE1.querySelector('.barra').style.width = `${f1Pct}%`;
        //lutador2
        this.lutadorE2.querySelector('.nome').innerHTML =  `${this.lutador2.name} - ${this.lutador2.vida.toFixed(1)} HP`
        let f2Pct = (this.lutador2.vida / this.lutador2.maxVida) * 100;
        this.lutadorE2.querySelector('.barra').style.width = `${f2Pct}%`;
    }

    fazerAtaque(atacante, atacado){

        if(atacante.vida <= 0 || atacado.vida <= 0){
            this.log.addMesagge(`Fim de jogo`)
            return
        }

        let fatorAtaque = (Math.random() * 2).toFixed(2) //Ataque aleatorio
        let fatorDefesa = (Math.random() * 2).toFixed(2) //Defesa aleatoria

        let ataqueAtual = atacante.ataque * fatorAtaque //Quem atacar vai ter a força multiplicada pelo fatorAtaque
        let defesaAtual = atacante.defesa * fatorDefesa //Quem defende vai ter a defesa multiplicada pelo fatorAtaque

        if(ataqueAtual > defesaAtual){
            atacado.vida -= ataqueAtual; //Retira vida com valor do ataqueteAtual
            this.log.addMesagge(`${atacante.name} causou ${ataqueAtual.toFixed(2)} de dano em ${atacado.name}`)
        }else{
            this.log.addMesagge(`${atacado.name} conseguiu se defender!`)
        }



        this.update()
    }
}


class Log{
    list = []

    constructor(listE1){
        this.listE1 = listE1;
    }

    addMesagge(msg){
        this.list.push(msg);
        this.render(); //para renderizar
    }

    render(){
        this.listE1.innerHTML = '';
        for(let i in this.list){
            this.listE1.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}



