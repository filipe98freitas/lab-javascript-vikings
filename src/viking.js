// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const atackViking = this.saxonArmy[randomNumberSaxon].receiveDamage(
      this.vikingArmy[randomNumberViking].attack()
    );

    if (this.saxonArmy[randomNumberSaxon].health <= 0) {
      this.saxonArmy.splice(randomNumberSaxon, 1);
      return atackViking;
    }
  }
  saxonAttack() {
    let randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const atackSaxon = this.vikingArmy[randomNumberViking].receiveDamage(
      this.saxonArmy[randomNumberSaxon].attack()
    );

    if (this.vikingArmy[randomNumberSaxon].health <= 0) {
      this.vikingArmy.splice(randomNumberSaxon, 1);
    }
    return atackSaxon;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
