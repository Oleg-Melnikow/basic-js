const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value = "(  )") {
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position % 1 !== 0 ||
      position > this.chains.length ||
      position - 1 < 0
    ) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chains.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const resultChains = this.chains.join("~~");
    this.chains = [];
    return resultChains;
  },
};

module.exports = {
  chainMaker,
};
