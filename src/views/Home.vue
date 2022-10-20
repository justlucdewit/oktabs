<template>
  <div id="home">
    <h1>
      ONLINE KTAB ARCHIVE
    </h1>

    <p>
      Use this website to search for dozens of free kalimba tabs in the never-ending archive. More tabs to be added in the future
    </p>
    
    <router-link to="/archive">
      VIEW
    </router-link>
    
  </div>
</template>

<style scoped lang="scss">
#home {
  padding: 50px;
  margin-top: 150px;
  max-width: 500px;
  margin-left: 50px;
}

h1 {
  color: #24aa91;
  font-size: 40px;
}

p {
  font-size: 20px;
}

a {
  background: #24aa91;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 20px 40px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.7;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;

  &:hover {
    opacity: 1;
  }
}

// mobile override
@media only screen and (max-width: 620px) {
  #home {
    padding: 0px;
    margin-left: 10px;
  }
}
</style>
