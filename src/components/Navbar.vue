<template>
  <div id="nav">
    <h4>Neti Sp. z o.o.</h4><p>&copy; Konrad Gumienny</p>
    <select v-model="$i18n.locale" name="lang">
      <option value="pl">
        PL
      </option>
      <option value="en">
        EN
      </option>
    </select>
  </div>
</template>

<style scoped>
    h4, p {
        margin: 0;
        padding: 3px;
    }
    @media(max-width: 450px) {
        h4 {
            display: none;
        }
    }
</style>
