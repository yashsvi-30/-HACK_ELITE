let hash = require('object-hash');

const TARGET_HASH = hash(1560);

let validator = require("./validator");

let mongoose = require('mongoose');

let blockChainModel = mongoose.model("BlockChain");

let chalk = require('chalk');

class BlockChain {

    constructor() {
        //Create
        this.chain = [];
        //Transaction
        this.curr_transactions = [];
    }

    getLastBlock(callback) {
        //Get last block from Database
        return blockChainModel.findOne(
            {},
            null,
            { sort: { _id: -1 }, limit: 1 },
          (err, block) => {
            //in case of err just log it and return (stop execution)
            if (err) return console.error("Cannot get last block ", err.message);
            //get out of the function and run callback passing it the lastBlock 
            return callback(block);
          }
        );
      }

    addNewBlock(prevHash){
        let block = {
            index: this.chain.length +1,
            timestamp : Date.now(),
            transactions : this.curr_transactions,
            prevHash : prevHash,
        };

        if(validator.proofOfWork() == TARGET_HASH){
            this.getLastBlock((lastBlock) => {
                //only if the lastBlock exists (not null or undefined)
                if(lastBlock) {
                   //Link blocks together using hashes 
                   block.prevHash = lastBlock.hash;
                }
                 //otherwise carry on with saving it into the DB.
                 block.hash = hash(block);
                 //Add it to the instance Save it on the DB Console Success
                 let newBlock = new blockChainModel(block);
                 newBlock.save((err) => {
                     if (err)
                         return console.log(chalk.red("Cannot save Block to DB ", err.message));
                     console.log(chalk.green("Block Saved on the DB"));
                 });
                 //Add to Chain
                 this
                     .chain
                     .push(block);
                 this.curr_transactions = [];
                 return block;
            });
           
        }
    }

    addNewTransaction(sender, recipient, amount , health_id) {
        //Push the object to the Array
        this.curr_transactions.push({sender, recipient, amount , health_id});
        //Using ES6 the key and value pairs can be defined only by specifying the variable 
     }

    lastBlock() {
        return this.chain.slice(-1)[0]; ///< we return and element 0 index (since the has only one)
    }

    isEmpty() {
        return this.chain.length == 0; ///< returns true if empty else false
    }
    
}

module.exports = BlockChain;