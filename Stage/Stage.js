/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Sky", "./Stage/costumes/Sky.svg", {
        x: 240,
        y: 187.536118767351,
      }),
      new Costume("Xy-grid", "./Stage/costumes/Xy-grid.png", {
        x: 480,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.vars.gravity = -1.5;
    this.vars.jumpForce = 14;
    this.vars.acceleration = 2;
    this.vars.resistance = 0.8;
    this.vars.jumpDuration = 3;
    this.vars.keyX = 0;
    this.vars.scene = 1;
    this.vars.progress = 100;
    this.vars.maxProgress = 100;
    this.vars.percent = 1;
    this.vars.width = 120;
    this.vars.paused = 0;
    this.vars.objects = [0, "tile000", 100, 0, "S", 0];

    this.watchers.scene = new Watcher({
      label: "SCENE #",
      style: "large",
      visible: true,
      value: () => this.vars.scene,
      x: 240,
      y: 180,
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "Sky";
  }
}
