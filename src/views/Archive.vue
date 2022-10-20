<template>
  <div id="archive">
    <div id="tab-list">
        <a href="/#/tab?=0" class="tab" v-for="tab in tabs">
            <div id="img">
                <img id="cover-img" :src="tab.cover" alt="tab image">
                <img id="with-audio" v-if="tab.hasAudio" src="@/assets/Speaker_Icon.svg" alt="">
            </div>

            <div id="info">
                <h1>{{ tab.title }}</h1>
                <h2>{{ tab.artist }}</h2>
                <h2>Difficulty: <span :class="`difficulty-${tab.difficulty}`">{{ tab.difficulty }}</span></h2>
            </div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        tabs: [
            {
                id: 0,
                cover: "https://media.discordapp.net/attachments/375936269907263489/1032762792480088104/unknown.png",
                title: "The scientist",
                artist: "Cold play",
                difficulty: "Medium",
                hasAudio: false,
            },
            {
                id: 0,
                cover: "https://media.discordapp.net/attachments/375936269907263489/1032763475207917668/unknown.png",
                title: "Jurassic park theme",
                artist: "John Williams",
                difficulty: "Easy",
                hasAudio: false,
            },
            {
                id: 0,
                cover: "https://media.discordapp.net/attachments/375936269907263489/1032763873947828314/unknown.png?width=591&height=676",
                title: "Among us drip",
                artist: "Innersloth",
                difficulty: "Easy",
                hasAudio: false,
            },
            {
                id: 0,
                cover: "https://media.discordapp.net/attachments/375936269907263489/1032765137838428222/unknown.png?width=676&height=676",
                title: "Sound of silence",
                artist: "Disturbed",
                difficulty: "Easy",
                hasAudio: false,
            },
            {
                id: 0,
                cover: "https://media.discordapp.net/attachments/375936269907263489/1032765212622860329/unknown.png",
                title: "Jingle bells",
                artist: "James Pierpont",
                difficulty: "Easy",
                hasAudio: false,
            },
            {
                id: 0,
                cover: "https://media.discordapp.net/attachments/375936269907263489/1032765276917350500/unknown.png",
                title: "You are my sunshine",
                artist: "Christina Perri",
                difficulty: "Easy",
                hasAudio: false,
            },
        ]
    }),

    mounted() {
    }
}
</script>

<style scoped lang="scss">
#archive {
    padding: 50px;
    margin-top: 50px;
    max-width: calc(50%);
    margin-left: 50px;

    #tab-list {
        .tab {
            cursor: pointer;
            color: #111;
            text-decoration: none;
            display: flex;
            margin-bottom: 20px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            height: 150px;
            z-index: 2000;
            position: relative;
            background: white;

            .difficulty-Hard {
                color: red;
            }

            .difficulty-Medium {
                color: orange;
            }

            .difficulty-Easy {
                color: #24aa91;
            }

            #img {
                img {
                    width: 150px;
                    height: 150px;
                    object-fit: cover;
                }
                
                #with-audio {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    width: 25px;
                    height: 25px;
                    object-fit: cover;
                    opacity: 0.7;
                    z-index: 1000;
                }
            }

            #info {
                padding: 20px;
                flex: 1;
                height: 90%;

                h1 {
                    font-size: 20px;
                    color: #24aa91;
                    margin-bottom: 10px;
                }

                h2 {
                    font-size: 15px;
                    
                    margin-bottom: 10px;
                }
            }
        }
    }
}

// mobile override
@media only screen and (max-width: 620px) {
    #archive {
        padding: 0px;
        margin-top: 50px;
        max-width: 100%;
        margin-left: 0px;
    }
}
</style>