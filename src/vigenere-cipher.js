const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(machineType = true) {
    this.machineType = machineType;
    this.startCode = 65;
    this.count = 26;
  }

  encrypt(message, key) {
    if (!(message && key)) {
      throw Error("Incorrect arguments!");
    }

    let keyUp = key.toUpperCase();
    let messageUp = message.toUpperCase();
    let result = [];
    let index = 0;

    for (let i = 0; i < messageUp.length; i++) {
      if (
        messageUp.charCodeAt(i) < this.startCode ||
        messageUp.charCodeAt(i) > 90
      ) {
        result.push(messageUp[i]);
      } else {
        let Idx = messageUp.charCodeAt(i) - this.startCode;
        let shift = keyUp.charCodeAt(index % keyUp.length) - this.startCode;
        result.push(
          String.fromCharCode(this.startCode + ((Idx + shift) % this.count))
        );
        index++;
      }
    }
    return this.machineType ? result.join("") : result.reverse().join("");
  }

  decrypt(message, key) {
    if (!(message && key)) {
      throw Error("Incorrect arguments!");
    }

    let keyUp = key.toUpperCase();
    let messageUp = message.toUpperCase();
    let result = [];
    let index = 0;

    for (let i = 0; i < messageUp.length; i++) {
      if (
        messageUp.charCodeAt(i) < this.startCode ||
        messageUp.charCodeAt(i) > 90
      ) {
        result.push(messageUp[i]);
      } else {
        let Idx = messageUp.charCodeAt(i) - this.startCode;
        let shift = keyUp.charCodeAt(index % keyUp.length) - this.startCode;
        result.push(
          String.fromCharCode(
            this.startCode + ((Idx - shift + this.count) % this.count)
          )
        );
        index++;
      }
    }
    return this.machineType ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
