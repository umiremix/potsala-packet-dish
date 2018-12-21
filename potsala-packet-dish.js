// 'ポ','テ','サ','ラ'をランダムに生成して'ポテサラ'で並んだら+'パケットディッシュ！'で終了
class Potsala {
  constructor(word) {
    this.result = ''
    this.word = word
    this.items = word.split('')
  }
  get() {
    while (this.result.indexOf(this.word) === -1) {
      let rand = Math.random() * this.items.length | 0
      this.result += this.items[rand]
    }
    return this.result
  }
}
module.exports = Potsala