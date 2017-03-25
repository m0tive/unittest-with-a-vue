<template>
    <div class="twitter-feed">
        <button v-on:click="getTweets">Get Tweets</button>
        <ol class="twitter-feed" v-for="tweetObj in tweets">
            <li>{{ tweetObj.tweet }}</li>
        </ol>
    </div>
</template>

<script>
import twitterFetcher from 'exports-loader?twitterFetcher!twitterFetcher';

export default {
    name: 'twitter-feed',
    data() {
        return {
            userID: "pdddddds",
            tweets: [],
        }
    },
    methods: {
        getTweets() {
            var vm = this;
            twitterFetcher.fetch({
                "profile": {"screenName": this.userID},
                "dataOnly": true,
                "showImages": true,
                "customCallback": function(tweets) {
                    vm.tweets = tweets;
                },
            });
        }
    }
}
</script>
