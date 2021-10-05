Vue.createApp({

    data() {

        return {
            word: null,
            words: [],
            placeholder: "Type something",
        }
    },

    methods: {
        saveWord(word) {
            
            this.words = []

            if (word)
                this.words.push(word),
                this.words.push(word.toUpperCase()),
                this.words.push(word.toLowerCase())
            else
                this.placeholder = "Must type something"
        }
    }

}).mount("#app")