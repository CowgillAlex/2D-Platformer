/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Placeholders extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Placeholders/costumes/costume1.svg", {
        x: 42,
        y: 31.50000000000003,
      }),
      new Costume("tile000", "./Placeholders/costumes/tile000.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile001", "./Placeholders/costumes/tile001.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile002", "./Placeholders/costumes/tile002.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile003", "./Placeholders/costumes/tile003.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile004", "./Placeholders/costumes/tile004.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile005", "./Placeholders/costumes/tile005.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile006", "./Placeholders/costumes/tile006.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile007", "./Placeholders/costumes/tile007.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile008", "./Placeholders/costumes/tile008.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile009", "./Placeholders/costumes/tile009.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile010", "./Placeholders/costumes/tile010.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile011", "./Placeholders/costumes/tile011.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile012", "./Placeholders/costumes/tile012.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile013", "./Placeholders/costumes/tile013.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile014", "./Placeholders/costumes/tile014.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile015", "./Placeholders/costumes/tile015.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile016", "./Placeholders/costumes/tile016.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile017", "./Placeholders/costumes/tile017.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile018", "./Placeholders/costumes/tile018.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile019", "./Placeholders/costumes/tile019.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile020", "./Placeholders/costumes/tile020.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile021", "./Placeholders/costumes/tile021.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile022", "./Placeholders/costumes/tile022.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile023", "./Placeholders/costumes/tile023.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile024", "./Placeholders/costumes/tile024.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile025", "./Placeholders/costumes/tile025.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile026", "./Placeholders/costumes/tile026.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile027", "./Placeholders/costumes/tile027.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile028", "./Placeholders/costumes/tile028.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile029", "./Placeholders/costumes/tile029.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile030", "./Placeholders/costumes/tile030.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile031", "./Placeholders/costumes/tile031.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile032", "./Placeholders/costumes/tile032.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile033", "./Placeholders/costumes/tile033.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile034", "./Placeholders/costumes/tile034.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile035", "./Placeholders/costumes/tile035.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile036", "./Placeholders/costumes/tile036.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile037", "./Placeholders/costumes/tile037.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile038", "./Placeholders/costumes/tile038.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile039", "./Placeholders/costumes/tile039.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile040", "./Placeholders/costumes/tile040.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile041", "./Placeholders/costumes/tile041.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile042", "./Placeholders/costumes/tile042.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile043", "./Placeholders/costumes/tile043.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile044", "./Placeholders/costumes/tile044.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile045", "./Placeholders/costumes/tile045.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile046", "./Placeholders/costumes/tile046.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile047", "./Placeholders/costumes/tile047.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile048", "./Placeholders/costumes/tile048.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile049", "./Placeholders/costumes/tile049.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile050", "./Placeholders/costumes/tile050.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile051", "./Placeholders/costumes/tile051.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile052", "./Placeholders/costumes/tile052.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile053", "./Placeholders/costumes/tile053.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile054", "./Placeholders/costumes/tile054.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile055", "./Placeholders/costumes/tile055.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile056", "./Placeholders/costumes/tile056.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile057", "./Placeholders/costumes/tile057.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile058", "./Placeholders/costumes/tile058.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile059", "./Placeholders/costumes/tile059.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile060", "./Placeholders/costumes/tile060.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile061", "./Placeholders/costumes/tile061.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile062", "./Placeholders/costumes/tile062.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile063", "./Placeholders/costumes/tile063.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile064", "./Placeholders/costumes/tile064.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile065", "./Placeholders/costumes/tile065.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile066", "./Placeholders/costumes/tile066.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile067", "./Placeholders/costumes/tile067.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile068", "./Placeholders/costumes/tile068.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile069", "./Placeholders/costumes/tile069.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile070", "./Placeholders/costumes/tile070.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile071", "./Placeholders/costumes/tile071.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile072", "./Placeholders/costumes/tile072.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile073", "./Placeholders/costumes/tile073.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile074", "./Placeholders/costumes/tile074.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile075", "./Placeholders/costumes/tile075.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile076", "./Placeholders/costumes/tile076.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile077", "./Placeholders/costumes/tile077.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile078", "./Placeholders/costumes/tile078.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile079", "./Placeholders/costumes/tile079.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile080", "./Placeholders/costumes/tile080.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile081", "./Placeholders/costumes/tile081.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile082", "./Placeholders/costumes/tile082.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile083", "./Placeholders/costumes/tile083.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile084", "./Placeholders/costumes/tile084.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile085", "./Placeholders/costumes/tile085.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile086", "./Placeholders/costumes/tile086.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile087", "./Placeholders/costumes/tile087.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile088", "./Placeholders/costumes/tile088.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile089", "./Placeholders/costumes/tile089.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile090", "./Placeholders/costumes/tile090.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile091", "./Placeholders/costumes/tile091.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile092", "./Placeholders/costumes/tile092.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile093", "./Placeholders/costumes/tile093.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile094", "./Placeholders/costumes/tile094.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile095", "./Placeholders/costumes/tile095.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile096", "./Placeholders/costumes/tile096.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile097", "./Placeholders/costumes/tile097.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile098", "./Placeholders/costumes/tile098.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile099", "./Placeholders/costumes/tile099.png", {
        x: 32,
        y: 32,
      }),
    ];

    this.sounds = [new Sound("pop", "./Placeholders/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Change: Scene" },
        this.whenIReceiveChangeScene
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
    ];

    this.vars.index = 7;
  }

  *whenIReceiveChangeScene() {
    this.visible = false;
    yield* this.getVisibleObjects();
    this.deleteThisClone();
  }

  *getVisibleObjects() {
    this.vars.index = 1;
    for (let i = 0; i < this.stage.vars.objects.length / 6; i++) {
      if (
        this.compare(
          this.itemOf(this.stage.vars.objects, this.vars.index - 1),
          this.stage.vars.scene
        ) === 0
      ) {
        this.goto(
          this.toNumber(
            this.itemOf(
              this.stage.vars.objects,
              this.toNumber(this.vars.index) + 1
            )
          ),
          this.toNumber(
            this.itemOf(
              this.stage.vars.objects,
              this.toNumber(this.vars.index) + 2
            )
          )
        );
        this.costume = this.itemOf(
          this.stage.vars.objects,
          this.toNumber(this.vars.index)
        );
        this.createClone();
      }
      this.vars.index += 6;
    }
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.size += (250 - this.size) * 0.2;
        if (this.mouse.down) {
          yield* this.broadcastAndWait("swordaqquired");
          this.deleteThisClone();
        }
      } else {
        this.size += (200 - this.size) * 0.2;
      }
      yield;
    }
  }
}
