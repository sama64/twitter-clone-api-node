const res = require('express/lib/response');
const faker = require('faker');

class TweetService {
    constructor(){
        this.tweets = [];
        this.tweets.push(
            {id: 0, message: "this is the first tweets"},
            {id: 1, message: "screw twitter"},
            {id: 2, message: "lets go to instagram"}
        );
    }

    async create(data) {
        const newTweet = {
            id: faker.datatype.uuid(), 
            ...data
        }
        this.tweets.push(newTweet);
        return newTweet
    }

    async read() {
        return this.tweets
    }

    async readOne(id) {
        const tweet = this.tweets.find(tweet => tweet.id == id)
        if (tweet) {
            return tweet
        } else {
            throw new Error('tweet not found');
        }
    }

    async update(id, changes) {
        const index = this.tweets.findIndex(tweet => tweet.id == id);
        if (index == -1) {
            throw new Error('tweet not found');
        }
        const tweet = this.tweets[index];
        this.tweets[index] = {
            ...tweet,
            ...changes
        };
        return this.tweets[index]
    }

    async delete(id) {
        const index = this.tweets.findIndex(tweet => tweet.id == id);
        if (index == -1) {
            throw new Error('product not found');
        }
        this.tweets.splice(index, 1);
        return { id }
    }
}

module.exports = TweetService;