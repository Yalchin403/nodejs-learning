#!/usr/bin/node


class Article {
    constructor(title, date) {
        this.date = date;
        this.title = title;
    }

    static compare(first_article, second_article) {
        return second_article.date - first_article.date
    }
}

let articles = [
    new Article("How to Deploy a Node.js App?", new Date(2019, 1, 1)),
    new Article("How to Start With Web Scraping in Node.js?", new Date(2021, 10, 1))
]

articles.sort(Article.compare);
console.log(articles);

article_1 = articles[0];
article_2 = articles[1];
console.log(Article.compare(article_2, article_1));

class Post {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static createObjWithToday() {
        return new this("Today's title", new Date());
    }
}

let current_post = Post.createObjWithToday();
console.log(current_post.title);


class RandomClass {
    constructor(randomPhrase) {
        this.randomPhrase = randomPhrase;
    }
    static secret_key = "2379881jhsfscnxskjhdf78623%^$%$^%"
}


console.log(RandomClass.secret_key);  // available class-level
let instance = new RandomClass("phrase");
console.log(instance.secret_key);  // undefined

// inheritcance works the same
