/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "../cd.js";

export default class GuiLoading extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GuiLoading/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("Background", "./GuiLoading/costumes/Background.png", {
        x: 480,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./GuiLoading/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clear clones" },
        this.whenIReceiveClearClones
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenIReceiveClearClones() {
    this.visible = false;
  }
}
