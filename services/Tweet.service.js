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

    create(data) {
        const newTweet = {
            id: faker.datatype.uuid(), 
            ...data
        }
        this.tweets.push(newTweet);
        return newTweet
    }

    read() {
        return this.tweets
    }

    readOne(id) {
        return this.tweets.find(tweet => tweet.id == id)
    }

    update(id, changes) {
        const index = this.tweets.findIndex(tweet => tweet.id == id);
        if (index == -1) {
            throw new Error('product not found');
        }
        const tweet = this.tweets[index];
        this.tweets[index] = {
            ...tweet,
            ...changes
        };
        return this.tweets[index]
    }

    delete(id) {
        const index = this.tweets.findIndex(tweet => tweet.id == id);
        if (index == -1) {
            throw new Error('product not found');
        }
        this.tweets.splice(index, 1);
        return { id }
    }
}

module.exports = TweetService;