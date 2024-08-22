/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerHand extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tile000", "./PlayerHand/costumes/tile000.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile001", "./PlayerHand/costumes/tile001.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile002", "./PlayerHand/costumes/tile002.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile003", "./PlayerHand/costumes/tile003.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile004", "./PlayerHand/costumes/tile004.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile005", "./PlayerHand/costumes/tile005.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile006", "./PlayerHand/costumes/tile006.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile007", "./PlayerHand/costumes/tile007.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile008", "./PlayerHand/costumes/tile008.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile009", "./PlayerHand/costumes/tile009.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile010", "./PlayerHand/costumes/tile010.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile011", "./PlayerHand/costumes/tile011.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile012", "./PlayerHand/costumes/tile012.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile013", "./PlayerHand/costumes/tile013.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile014", "./PlayerHand/costumes/tile014.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile015", "./PlayerHand/costumes/tile015.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile016", "./PlayerHand/costumes/tile016.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile017", "./PlayerHand/costumes/tile017.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile018", "./PlayerHand/costumes/tile018.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile019", "./PlayerHand/costumes/tile019.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile020", "./PlayerHand/costumes/tile020.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile021", "./PlayerHand/costumes/tile021.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile022", "./PlayerHand/costumes/tile022.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile023", "./PlayerHand/costumes/tile023.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile024", "./PlayerHand/costumes/tile024.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile025", "./PlayerHand/costumes/tile025.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile026", "./PlayerHand/costumes/tile026.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile027", "./PlayerHand/costumes/tile027.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile028", "./PlayerHand/costumes/tile028.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile029", "./PlayerHand/costumes/tile029.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile030", "./PlayerHand/costumes/tile030.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile031", "./PlayerHand/costumes/tile031.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile032", "./PlayerHand/costumes/tile032.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile033", "./PlayerHand/costumes/tile033.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile034", "./PlayerHand/costumes/tile034.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile035", "./PlayerHand/costumes/tile035.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile036", "./PlayerHand/costumes/tile036.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile037", "./PlayerHand/costumes/tile037.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile038", "./PlayerHand/costumes/tile038.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile039", "./PlayerHand/costumes/tile039.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile040", "./PlayerHand/costumes/tile040.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile041", "./PlayerHand/costumes/tile041.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile042", "./PlayerHand/costumes/tile042.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile043", "./PlayerHand/costumes/tile043.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile044", "./PlayerHand/costumes/tile044.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile045", "./PlayerHand/costumes/tile045.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile046", "./PlayerHand/costumes/tile046.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile047", "./PlayerHand/costumes/tile047.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile048", "./PlayerHand/costumes/tile048.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile049", "./PlayerHand/costumes/tile049.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile050", "./PlayerHand/costumes/tile050.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile051", "./PlayerHand/costumes/tile051.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile052", "./PlayerHand/costumes/tile052.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile053", "./PlayerHand/costumes/tile053.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile054", "./PlayerHand/costumes/tile054.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile055", "./PlayerHand/costumes/tile055.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile056", "./PlayerHand/costumes/tile056.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile057", "./PlayerHand/costumes/tile057.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile058", "./PlayerHand/costumes/tile058.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile059", "./PlayerHand/costumes/tile059.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile060", "./PlayerHand/costumes/tile060.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile061", "./PlayerHand/costumes/tile061.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile062", "./PlayerHand/costumes/tile062.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile063", "./PlayerHand/costumes/tile063.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile064", "./PlayerHand/costumes/tile064.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile065", "./PlayerHand/costumes/tile065.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile066", "./PlayerHand/costumes/tile066.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile067", "./PlayerHand/costumes/tile067.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile068", "./PlayerHand/costumes/tile068.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile069", "./PlayerHand/costumes/tile069.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile070", "./PlayerHand/costumes/tile070.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile071", "./PlayerHand/costumes/tile071.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile072", "./PlayerHand/costumes/tile072.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile073", "./PlayerHand/costumes/tile073.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile074", "./PlayerHand/costumes/tile074.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile075", "./PlayerHand/costumes/tile075.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile076", "./PlayerHand/costumes/tile076.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile077", "./PlayerHand/costumes/tile077.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile078", "./PlayerHand/costumes/tile078.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile079", "./PlayerHand/costumes/tile079.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile080", "./PlayerHand/costumes/tile080.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile081", "./PlayerHand/costumes/tile081.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile082", "./PlayerHand/costumes/tile082.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile083", "./PlayerHand/costumes/tile083.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile084", "./PlayerHand/costumes/tile084.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile085", "./PlayerHand/costumes/tile085.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile086", "./PlayerHand/costumes/tile086.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile087", "./PlayerHand/costumes/tile087.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile088", "./PlayerHand/costumes/tile088.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile089", "./PlayerHand/costumes/tile089.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile090", "./PlayerHand/costumes/tile090.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile091", "./PlayerHand/costumes/tile091.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile092", "./PlayerHand/costumes/tile092.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile093", "./PlayerHand/costumes/tile093.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile094", "./PlayerHand/costumes/tile094.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile095", "./PlayerHand/costumes/tile095.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile096", "./PlayerHand/costumes/tile096.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile097", "./PlayerHand/costumes/tile097.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile098", "./PlayerHand/costumes/tile098.png", {
        x: 32,
        y: 32,
      }),
      new Costume("tile099", "./PlayerHand/costumes/tile099.png", {
        x: 32,
        y: 32,
      }),
    ];

    this.sounds = [new Sound("pop", "./PlayerHand/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "swordaqquired" },
        this.whenIReceiveSwordaqquired
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "TICK - Player" },
        this.whenIReceiveTickPlayer
      ),
    ];

    this.vars.hassword = 0;
  }

  *whenIReceiveSwordaqquired() {
    this.vars.hassword = 1 - this.toNumber(this.vars.hassword);
    if (this.toNumber(this.vars.hassword) === 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *positionTheHand() {
    this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
    this.x += 10;
    this.direction = 45;
    if (this.mouse.down) {
      this.direction += 45;
    }
  }

  *whenIReceiveTickPlayer() {
    yield* this.positionTheHand();
  }
}
