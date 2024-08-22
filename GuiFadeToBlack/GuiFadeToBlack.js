/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GuiFadeToBlack extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GuiFadeToBlack/costumes/costume1.svg", {
        x: 263.3999938964844,
        y: 197.10000610351562,
      }),
    ];

    this.sounds = [new Sound("pop", "./GuiFadeToBlack/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fade to Black" },
        this.whenIReceiveFadeToBlack
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
    ];
  }

  *whenIReceiveFadeToBlack() {
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield;
    }
    this.visible = false;
    this.broadcast("begin game");
  }

  *whenKeySpacePressed() {
    this.broadcast("Fade to Black");
  }
}
