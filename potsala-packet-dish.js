// 'ポ','テ','サ','ラ'をランダムに生成して'ポテサラ'で並んだら+'パケットディッシュ！'で終了
// 無駄にclass構文使ってます
// 命名の頭の悪さに注目
class Potsala {
  constructor(word) {
    this.result = ''
    this.word = word
    this.items = word.split('')
  }
  get() {
    while (this.result.indexOf(word) === -1) {
      let rand = Math.random() * this.items.length | 0
      this.result += this.items[rand]
    }
    return this.result
  }
}
// const word = 'ポテサラ'
// const potsala = new Potsala(word)
// console.log(potsala.get() + 'パケットディッシュ！')
module.exports = Potsala