var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');
var fondoJuego;
var boton;
var flappy;
var teclaDer;
var teclaIzq;
var teclaArr;
var teclaAbj;

var persona;
var avatar;

var estadoPrincipal = {
  preload: function () {
    //carga todos los recursos
    juego.load.image('fondo', 'img/bg-1.jpg');
    juego.load.spritesheet('pajaros', 'img/pajaro.png', 43, 30);
    //juego.load.spritesheet('personas', 'img/persona.png', 64, 64);
    juego.load.spritesheet('avatars', 'img/avatar.png', 118.75, 131.5);
  },
  create: function () {
    //mostrar pantalla
    fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');
    //flappy = juego.add.sprite(100, 100, 'pajaros');
    //flappy.frame = 1;
    //flappy.animations.add('vuelo', [0, 1, 2], 10, true);
    avatar = juego.add.sprite(juego.width / 2, juego.height / 2, 'avatars');
    avatar.anchor.setTo(0.5);
    avatar.animations.add('arriba', [12, 13, 14, 15], 10, true);
    avatar.animations.add('derecha', [4, 5, 6, 7], 10, true);
    avatar.animations.add('izquierda', [8, 9, 10, 11], 10, true);
    avatar.animations.add('abajo', [0, 1, 2, 3], 10, true);
    teclaDer = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    teclaIzq = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    teclaArr = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
    teclaAbj = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

    juego.physics.startSystem(Phaser.Physics.ARCADE);
    //juego.physics.arcade.enable(flappy);
    //flappy.body.collideWorldBounds = true;
    juego.physics.arcade.enable(avatar);
    avatar.body.collideWorldBounds = true;
  },
  update: function () {
    fondoJuego.tilePosition.x -= 1;
    //animamos el juego
    //flappy.animations.play('vuelo');
    if (teclaDer.isDown) {
      //flappy.x++;
      avatar.position.x += 2;
      avatar.animations.play('derecha');
    }
    else if (teclaIzq.isDown) {
      //flappy.x--;
      avatar.position.x -= 2;
      avatar.animations.play('izquierda');
    }
    else if (teclaArr.isDown) {
      //flappy.y--;
      avatar.position.y -= 2;
      avatar.animations.play('arriba');
    }
    else if (teclaAbj.isDown) {
      //flappy.y++;
      avatar.position.y += 2;
      avatar.animations.play('abajo');
    }
  }
};

//asignamos el estado que acaba de crear al juego
juego.state.add('principal', estadoPrincipal);
//Iniciar el juego del estado principal por defecto
juego.state.start('principal');