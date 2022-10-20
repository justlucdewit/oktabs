<template>
    <div id="header">
        <img src="@/assets/logo.png" alt="OKtabs logo">

        <div id="links">
            <router-link to="/">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/archive" class="highlight">TAB ARCHIVE</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
#header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 100px;
    }

    #links {
        a {
            margin: 10px 10px;
            color: black;
            text-decoration: none;
            border-radius: 100px;
            padding: 20px;
            opacity: 0.7;
            
            &.highlight {
                background: #24aa91;
                color: white;
            }

            &:hover {
                opacity: 1;
            }
        }
    }
}

// mobile override
@media only screen and (max-width: 620px) {
  #header {
    display: grid;
    justify-content: center;
    font-size: 10px;

    img {
        margin-bottom: 30px;
    }

    #links {
        a {
            margin: 0px 0px;
        }
    }
  }
}
</style>