var stream = new MutationObserver(function(mutations, observer){
    if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
        var stream_tweets = document.getElementsByClassName("js-stream-item");
        for(var i = 0; i < stream_tweets.length; i++) {
            var stream_tweet = JSON.parse(stream_tweets[i].getAttribute("data-suggestion-json")).suggestion_details;
            if (typeof stream_tweet.suggestion_type !== "undefined") {
                if (stream_tweet.suggestion_type == "ActivityTweet") {
                    stream_tweets[i].remove();
                }
            }
        }
    }
});
stream.observe(document.getElementsByClassName("stream-container")[0], {childList:true,subtree:true});