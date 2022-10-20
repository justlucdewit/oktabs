<template>
  <div id="tab">
    <div id="tab-list">
      <a href="/#/tab?=0" class="tab">
        <div id="img">
          <img
            id="cover-img"
            src="https://media.discordapp.net/attachments/375936269907263489/1032762792480088104/unknown.png"
            alt="tab image"
          />
        </div>

        <div id="info">
          <h1>The scientist</h1>
          <h2>Cold play</h2>
          <h2>
            Difficulty: <span :class="`difficulty-${'Medium'}`">Medium</span>
          </h2>
        </div>
      </a>
    </div>

    <div id="tab-content" v-html="content"></div>
  </div>
</template>
  
<script>
let content = `
1. 2. 1. 5. 3.
1. 2. 1. 5. 3.
1. 2. 1. 3. 3. 3. 3. 2. 1.

1. 2. 1. 5. 3.
1. 2. 1. 5. 3.
1. 2. 1. 3. 3. 3. 3. 2. 1.

1. 2. 1. 5. 3.
1. 2. 1. 5. 3.
1. 2. 1. 3. 3. 3. 3. 2. 1.

1. 2. 1. 5. 3.
1. 2. 1. 5. 3.
1. 2. 1. 3. 3. 3. 3. 2. 1.


1.. 6. 5. 1.. 6. 5.
1.. 6.

3. 5. 5. 3. 6. 3. 3. 3. 2. 1.

1.. 6. 5. 1.. 6. 5.
1.. 6.

3. 3. 5. 5. 3. 6. 3. 3. 3. 3. 2. 1. 2
4. 4. 4. 4. 4. 4. 4. 3. 1.
`;

content = content
  .replace(/\n/g, "<br>")
  .replace(/\./g, "°")
  .replace(/\ /g, "&nbsp;&nbsp;&nbsp;");

export default {
  data: () => ({ content }),
};
</script>
  
<style scoped lang="scss">
#tab {
  padding: 50px;
  margin-top: 0px;
  max-width: calc(50%);
  margin-left: 50px;

  #tab-content {
    margin-top: 50px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: black;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-bottom: 50px;
    padding-left: 50px;
  }

  #tab-list {
    .tab {
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
  #tab {
    padding: 0px;
    margin-top: 50px;
    max-width: 100%;
    margin-left: 0px;

    #tab-content {
      margin-top: 50px;
      font-size: 10px;
      color: red;
      font-family: "Roboto", sans-serif;
      color: black;
      line-height: 1.5;
      letter-spacing: 1px;
      margin-bottom: 50px;
      padding-left: 0px;
    }
  }
}
</style>