<template>
  <div id="home">
    <h1>OKtabs</h1>

    <p>
      OKtabs is a project made by Luc de Wit, meant to be a free and opensource
      online kalimba tab archive. You can find a list of songs to learn and play
      on here, which is continuously added to.
    </p>

    <p>
      If you found a bug, have a feature request, or want to help expand the
      archive, please contact me via discord (0xDEADBEEF#9999) or email
      (luc.dewit@hotmail.nl).
    </p>

    <p>Happy kalimba-ing 👌</p>

    <router-link to="/archive"> VIEW </router-link>
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
    margin-top: 50px;
  }
}
</style>
  