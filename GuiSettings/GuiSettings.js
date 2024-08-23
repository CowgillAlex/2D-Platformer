/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "../cd.js";

export default class GuiSettings extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GuiSettings/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("Settings BG", "./GuiSettings/costumes/Settings BG.svg", {
        x: 143.5,
        y: 180,
      }),
      new Costume("BTN OK", "./GuiSettings/costumes/BTN OK.png", {
        x: 86,
        y: 37,
      }),
    ];

    this.sounds = [new Sound("pop", "./GuiSettings/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "p" }, this.whenKeyPPressed),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CLOSE UI" },
        this.whenIReceiveCloseUi
      ),
    ];
  }

  *whenIReceiveSettings() {
    this.visible = true;
    this.moveAhead();
    yield* this.settingsUi();
  }

  *whenKeyPPressed() {
    this.visible = false;
  }

  *settingsUi() {
    this.visible = true;
    this.goto(0, -100);
    this.costume = "BTN OK";
    this.createClone();
    this.goto(0, 0);
    this.costume = "Settings BG";
    this.moveBehind(1);
  }

  *startAsClone() {}

  *startAsClone2() {
    this.size = 125;
    while (true) {
      if (this.touching("mouse")) {
        this.size += (105 - this.size) * 0.2;
        if (this.mouse.down) {
          yield* this.broadcastAndWait("CLOSE UI");
        }
      } else {
        this.size += (100 - this.size) * 0.2;
      }
      yield;
    }
  }

  *whenIReceiveCloseUi() {
    this.visible = false;
    this.deleteThisClone();
  }
}
