<script setup>
</script>

<template>
  <header>
    <h3 class="display-6">
      <a href="" target="_blank"
        ><i class="bi bi-person-fill-exclamation"></i>Sobre</a
      >
    </h3>
    <h3 class="display-6">
      <a href="" target="_blank"><i class="bi bi-house"></i>Home</a>
    </h3>
    <h3 class="display-6">
      <a href="" target="_blank"><i class="bi bi-whatsapp"></i>Contato</a>
    </h3>

    <section id="login-area">
      <div id="user-area" class="input-group mb-1">
        <span class="input-group-text" id="user-id">Usuário</span>
        <input type="text" class="form-control" aria-describedby="user-id" />
      </div>

      <div id="pswd-area" class="input-group mb-1">
        <span class="input-group-text" id="pswd-id">Senha</span>
        <input
          type="password"
          class="form-control"
          aria-describedby="pswd-id"
        />
      </div>
    </section>
  </header>
</template>

<style scoped>
header {
  background-color: rgb(97, 12, 104);
  padding: 30px;
  display: flex;
  justify-content: space-around;
}

a {
  color: white;
  text-decoration: none;
}

#login-area {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#pswd-id {
  margin-left: 10px;
}

header .bi {
  margin-right: 10px;
}
</style>