/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GuiLoadBar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Empty", "./GuiLoadBar/costumes/Empty.png", { x: 48, y: 8 }),
      new Costume("Full", "./GuiLoadBar/costumes/Full.png", { x: 96, y: 8 }),
      new Costume("Base", "./GuiLoadBar/costumes/Base.png", { x: 104, y: 90 }),
      new Costume("Loading icon", "./GuiLoadBar/costumes/Loading icon.png", {
        x: 200,
        y: 48,
      }),
    ];

    this.sounds = [new Sound("pop", "./GuiLoadBar/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clear clones" },
        this.whenIReceiveClearClones
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
    ];
  }

  *startAsClone() {
    while (true) {
      yield* this.positionBar();
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "Base";
    this.size = 250;
    this.createClone();
    this.costume = "Full";
    this.stage.vars.progress = 0;
    for (let i = 0; i < 100; i++) {
      yield* this.positionBar();
      if (this.compare(this.stage.vars.percent, 0.5) < 0) {
        this.costume = "Empty";
      } else {
        this.costume = "Full";
      }
      this.stage.vars.width = 48 * (this.size / 100);
      this.x +=
        this.toNumber(this.stage.vars.width) *
        this.toNumber(this.stage.vars.percent);
      this.stage.vars.progress++;
      yield;
    }
    this.broadcast("Main Menu");
    this.visible = false;
  }

  *positionBar() {
    this.costume = "Big.";
    this.goto(0, -90);
    this.costume = "Base";
    this.stage.vars.percent =
      this.toNumber(this.stage.vars.progress) /
      this.toNumber(this.stage.vars.maxProgress);
  }

  *whenIReceiveClearClones() {
    this.deleteThisClone();
  }

  *whenIReceiveStart() {
    yield* this.broadcastAndWait("Clear clones");
    yield* this.wait(0);
    this.broadcast("begin game");
  }
}
