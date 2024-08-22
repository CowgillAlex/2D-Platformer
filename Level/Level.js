/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Level extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Scene 0", "./Level/costumes/Scene 0.png", {
        x: 480,
        y: 360,
      }),
      new Costume("Scene 1", "./Level/costumes/Scene 1.png", {
        x: 480,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./Level/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Change: Scene" },
        this.whenIReceiveChangeScene
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fade to Black" },
        this.whenIReceiveFadeToBlack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      ),
    ];
  }

  *dropShadow(distance) {
    this.clearPen();
    this.y += this.toNumber(distance);
    this.x += this.toNumber(distance);
    this.effects.brightness = 48;
    this.stamp();
    this.y += 0 - this.toNumber(distance) / 2;
    this.x += 0 - this.toNumber(distance) / 2;
    this.effects.brightness = 24;
    this.stamp();
    this.goto(0, 0);
    this.effects.clear();
  }

  *whenIReceiveChangeScene() {
    this.visible = true;
    this.costume = "Scene " + this.toString(this.stage.vars.scene);
    yield* this.dropShadow(-6);
  }

  *whenGreenFlagClicked() {}

  *whenIReceiveFadeToBlack() {
    yield* this.wait(1.5);
    this.visible = true;
    this.broadcast("Change: Scene");
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }
}
