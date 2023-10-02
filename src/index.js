class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
          break;
      }
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Alterar o tipo de herói na segunda entrada const heroi = new Heroi('Herói1', 25, 'monge');
  const heroi = new Heroi('Herói1', 25, 'monge');
  heroi.atacar();