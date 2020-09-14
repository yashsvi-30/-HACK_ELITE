let database = require("./blockchain/database");
database.onConnect(() => {

    let BlockChain = require("./blockchain/blockChain");

let blockChain = new BlockChain();

let hash = require('object-hash');

let PROOF = 1560;

/*if(proofOfWork() == PROOF){
    blockChain.addNewTransaction("islen", "alex",200);
    let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
    blockChain.addNewBlock(prevHash);
}*/

blockChain.addNewTransaction("islen", "alex",200, "adghc");
blockChain.addNewBlock(null);

console.log("Chain : ",blockChain.chain);

})

