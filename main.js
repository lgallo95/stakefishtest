const sha256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.makeHash();
  }
  makeHash() {
    return sha256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenBlock()];
  }
  createGenBlock() {
    return new Block(0, "01/01/2022 00:00", "Genesis Block", "0");
  }

  getLatestBlock(){
      return this.chain[this.chain.length -1]
  }

  addBlock(newBlock){
      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.hash = newBlock.makeHash()
      this.chain.push(newBlock)
  }
}


let testCoin = new Blockchain()
testCoin.addBlock(new Block(1, '01/02/2022 00:01',{amount: 45}))
testCoin.addBlock(new Block(2, '01/02/2022 00:02',{amount: 64}))
testCoin.addBlock(new Block(3, '01/02/2022 00:03',{amount: 219}))
testCoin.addBlock(new Block(4, '01/02/2022 00:04',{amount: 3241}))
testCoin.addBlock(new Block(5, '01/02/2022 00:05',{amount: 22}))
testCoin.addBlock(new Block(6, '01/02/2022 00:06',{amount: 124}))
testCoin.addBlock(new Block(7, '01/02/2022 00:07',{amount: 2}))
testCoin.addBlock(new Block(8, '01/02/2022 00:08',{amount: 412}))
testCoin.addBlock(new Block(9, '01/02/2022 00:09',{amount: 351}))
testCoin.addBlock(new Block(10, '01/02/2022 00:10',{amount: 3251}))

console.log(JSON.stringify(testCoin, null, 4))