//var RSSCombiner = require('rss-combiner');
var RSSCombiner = require('rss-combiner');
var fs = require('fs');

var syriaFeedConfig = {
    size: 30,
    feeds: [
        'http://www.huffingtonpost.co.uk/news/syria/rss/', // BBC tech news
        'https://www.nytimes.com/svc/collections/v1/publish/http://www.nytimes.com/topic/destination/syria/rss.xml', // Hacker News
        'https://www.theguardian.com/world/syria/rss', // Guardian tech news
        'https://news.google.com/news?cf=all&hl=en&pz=1&ned=in&q=syria&output=rss', // Engadget
    ],
    pubDate: new Date()
};

RSSCombiner(syriaFeedConfig)
    .then(function (feed) {
        var xml = feed.xml({ indent: true });
        fs.writeFile('syria.xml', xml, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log('Syria feed written');
            }
        });
    });
