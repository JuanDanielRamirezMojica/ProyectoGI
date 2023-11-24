var juego = new Phaser.Game("100%", "100%", Phaser.CANVAS, "MapaInteractivoph");

var grupoFondos;

/*Variable botones*/
var boton1;
var boton2;
var boton3;
var boton4;
var boton5;
var boton6;
var boton7;
var boton8;
var boton9;
var boton10;

/* Variables fotos */
var foto1;
var foto2;
var foto3;
var foto4;
var foto5;
var foto6;
var foto7;
var foto8;
var foto9;
var foto10;

var flechaderecha;
var flechaizquierda;
var flechaarriba;
var flechaabajo;

var jugando = {
  preload: function () {
    juego.load.image("imgfondo1", "imagenes/InteractiveMap1.png");
    juego.load.image("imgfondo2", "imagenes/InteractiveMap2.png");
    juego.load.image("imgfondo3", "imagenes/InteractiveMap3.png");

    juego.load.image("botones", "imagenes/play.png"); 
    juego.load.image("fotouno", "imagenes/Airport.jpg"); /* Aeropuerto */
    juego.load.image("fotodos", "imagenes/WayneManor.jpg"); /* Mansión Wayne */
    juego.load.image("fototres", "imagenes/RobinsonPark.jpg"); /* Parque RObinson */
    juego.load.image("fotocuatro", "imagenes/ArkhamA.jpg"); /* Arkaham */
    juego.load.image("fotocinco", "imagenes/Monarch.jpg"); /* Teatro Monarch */
    juego.load.image("fotoseis", "imagenes/ACE.jpg"); /* Ace Chemicals*/
    juego.load.image("fotosiete", "imagenes/IcebergL.png"); /* Iceberg */
    juego.load.image("fotoocho", "imagenes/GCPD.jpg"); /* GCPD */
    juego.load.image("fotonueve", "imagenes/Blackgate.jpg"); /* Blackgate */
    juego.load.image("fotodiez", "imagenes/WayneTower.jpg"); /* Torre Wayne */
  },

  create: function () {
    grupoFondos = juego.add.group();
    fondo1 = grupoFondos.create(0, 0, "imgfondo1");
    fondo2 = grupoFondos.create(0, 1333, "imgfondo2");
    fondo3 = grupoFondos.create(0, 2670, "imgfondo3");

    // Botones adaptados al tamaño de la pantalla
    boton1 = juego.add.button(juego.world.width * 0.135, juego.world.height * 0.45, "botones"); /* Aeropuerto */
    boton2 = juego.add.button(juego.world.width * 1.60, juego.world.height * 0.15, "botones"); /* Mansión Wayne */
    boton3 = juego.add.button(juego.world.width * 0.88, juego.world.height * 3, "botones"); /* Parque RObinson */
    boton4 = juego.add.button(juego.world.width * 0.77, juego.world.height * 1.85, "botones"); /* Arkaham */
    boton5 = juego.add.button(juego.world.width * 1.48, juego.world.height * 1.65, "botones"); /* Teatro Monarch */
    boton6 = juego.add.button(juego.world.width * 1.28, juego.world.height * 2.62, "botones"); /* Ace Chemicals*/
    boton7 = juego.add.button(juego.world.width * 1.38, juego.world.height * 2.92, "botones"); /* Iceberg */
    boton8 = juego.add.button(juego.world.width * 1.1, juego.world.height * 4.2, "botones"); /* GCPD */
    boton9 = juego.add.button(juego.world.width * 1.35, juego.world.height * 5.5, "botones"); /* Blackgate */
    boton10 = juego.add.button(juego.world.width * 0.85, juego.world.height * 4.25, "botones"); /* Torre Wayne */
    // Escala de botones
    var buttonScale = 0.08;
    boton1.anchor.setTo(0.5);
    boton1.scale.setTo(buttonScale);
    boton1.rotation = 0;
    boton1.events.onInputDown.add(function () { foto1.visible = true; });
    boton1.events.onInputUp.add(function () { foto1.visible = false; });

    boton2.anchor.setTo(0.5);
    boton2.scale.setTo(buttonScale);
    boton2.rotation = 0;
    boton2.events.onInputDown.add(function () { foto2.visible = true; });
    boton2.events.onInputUp.add(function () { foto2.visible = false; });

    boton3.anchor.setTo(0.5);
    boton3.scale.setTo(buttonScale);
    boton3.rotation = 0;
    boton3.events.onInputDown.add(function () { foto3.visible = true; });
    boton3.events.onInputUp.add(function () { foto3.visible = false; });

    boton4.anchor.setTo(0.5);
    boton4.scale.setTo(buttonScale);
    boton4.rotation = 0;
    boton4.events.onInputDown.add(function () { foto4.visible = true; });
    boton4.events.onInputUp.add(function () { foto4.visible = false; });

    boton5.anchor.setTo(0.5);
    boton5.scale.setTo(buttonScale);
    boton5.rotation = 0;
    boton5.events.onInputDown.add(function () { foto5.visible = true; });
    boton5.events.onInputUp.add(function () { foto5.visible = false; });

    boton6.anchor.setTo(0.5);
    boton6.scale.setTo(buttonScale);
    boton6.rotation = 0;
    boton6.events.onInputDown.add(function () { foto6.visible = true; });
    boton6.events.onInputUp.add(function () { foto6.visible = false; });

    boton7.anchor.setTo(0.5);
    boton7.scale.setTo(buttonScale);
    boton7.rotation = 0;
    boton7.events.onInputDown.add(function () { foto7.visible = true; });
    boton7.events.onInputUp.add(function () { foto7.visible = false; });

    boton8.anchor.setTo(0.5);
    boton8.scale.setTo(buttonScale);
    boton8.rotation = 0;
    boton8.events.onInputDown.add(function () { foto8.visible = true; });
    boton8.events.onInputUp.add(function () { foto8.visible = false; });

    boton9.anchor.setTo(0.5);
    boton9.scale.setTo(buttonScale);
    boton9.rotation = 0;
    boton9.events.onInputDown.add(function () { foto9.visible = true; });
    boton9.events.onInputUp.add(function () { foto9.visible = false; });

    boton10.anchor.setTo(0.5);
    boton10.scale.setTo(buttonScale);
    boton10.rotation = 0;
    boton10.events.onInputDown.add(function () { foto10.visible = true; });
    boton10.events.onInputUp.add(function () { foto10.visible = false; });



    /* Se les dice que foto corresponde a que variable */
    foto1 = juego.add.sprite(600, 80, "fotouno");
    foto1.scale.setTo(0.55);
    foto1.visible = false;

    foto2 = juego.add.sprite(180, 80, "fotodos");
    foto2.scale.setTo(0.7);
    foto2.visible = false;

    foto3 = juego.add.sprite(180, 80, "fototres");
    foto3.scale.setTo(0.45);
    foto3.visible = false;


    foto4 = juego.add.sprite(180, 80, "fotocuatro");
    foto4.scale.setTo(0.6);
    foto4.visible = false;


    foto5 = juego.add.sprite(180, 80, "fotocinco");
    foto5.scale.setTo(0.3);
    foto5.visible = false;


    foto6 = juego.add.sprite(180, 80, "fotoseis");
    foto6.scale.setTo(0.3);
    foto6.visible = false;


    foto7 = juego.add.sprite(180, 80, "fotosiete");
    foto7.scale.setTo(0.9);
    foto7.visible = false;

    foto8 = juego.add.sprite(180, 80, "fotoocho");
    foto8.scale.setTo(0.4);
    foto8.visible = false;

    foto9 = juego.add.sprite(180, 80, "fotonueve");
    foto9.scale.setTo(0.8);
    foto9.visible = false;


    foto10 = juego.add.sprite(180, 80, "fotodiez");
    foto10.scale.setTo(0.4);
    foto10.visible = false;


    flechaderecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    flechaizquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    flechaarriba = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    flechaabajo = juego.input.keyboard.addKey(Phaser.Keyboard.UP);

    juego.scale.scaleMode = Phaser.ScaleManager.RESIZE;

    juego.input.onDown.add(() => {
      juego.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
      juego.scale.startFullScreen();
    });

    
  },

  update: function () {
    if (flechaderecha.isDown && grupoFondos.position.x > -grupoFondos.width + juego.width) {
      grupoFondos.x -= 5;
      moverBotones(-5, 0);
    }
    if (flechaizquierda.isDown && grupoFondos.position.x < 0) {
      grupoFondos.x += 5;
      moverBotones(5, 0);
    }
    if (flechaarriba.isDown && grupoFondos.position.y > -grupoFondos.height + juego.height) {
      grupoFondos.y -= 5;
      moverBotones(0, -5);
    }
    if (flechaabajo.isDown && grupoFondos.position.y < 0) {
      grupoFondos.y += 5;
      moverBotones(0, 5);
    }
  },
};

juego.state.add("activo", jugando);
juego.state.start("activo");

function moverBotones(deltaX, deltaY) {
    boton1.position.x += deltaX;
    boton1.position.y += deltaY;

    boton2.position.x += deltaX;
    boton2.position.y += deltaY;

    boton3.position.x += deltaX;
    boton3.position.y += deltaY;

    boton4.position.x += deltaX;
    boton4.position.y += deltaY;

    boton5.position.x += deltaX;
    boton5.position.y += deltaY;

    boton6.position.x += deltaX;
    boton6.position.y += deltaY;

    boton7.position.x += deltaX;
    boton7.position.y += deltaY;

    boton8.position.x += deltaX;
    boton8.position.y += deltaY;

    boton9.position.x += deltaX;
    boton9.position.y += deltaY;

    boton10.position.x += deltaX;
    boton10.position.y += deltaY;

  }
