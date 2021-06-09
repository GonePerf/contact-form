<template>
  <div class="contact-form">
    <transition name="form" appear>
      <form @submit.prevent="handleSend">
        <fieldset>
          <legend><h3>{{ $t('header') }}</h3></legend>
            
          <div class="personal-data"> 
            <input type="text" v-model="name"
              :placeholder="$t('form.name')">
            <input type="text" v-model="surname"
              :placeholder="$t('form.surname')">
          </div>
            
          <input type="email" v-model="email"
            :placeholder="$t('form.email')" >
          <textarea v-model="content"
            :placeholder="$t('form.content')">
          </textarea>
            
          <div class="buttons">
            <button class="btn-clear" 
              @click="handleClear">{{ $t('form.btn-clear') }}
            </button>
            <button class="btn-send">
              {{ $t('form.btn-send') }}
            </button>
          </div>   
        </fieldset>           
      </form>
    </transition>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const name = ref('')
    const surname = ref('')
    const email = ref('')
    const content = ref('')
    
    const handleSend = () => {
      name.value = surname.value = email.value = content.value = ''
    }
    
    const handleClear = () => {
      name.value = surname.value = email.value = content.value = ''
    }
    
    return { name, surname, email, content, handleClear, handleSend }
  },
}
</script>

<style scoped>

/* ANIMACJA */
  .form-enter-from, .form-leave-to {
    opacity: 0;
    transform: scale(0.4);
  }
  .form-enter-active {
    transition: all ease .3s;
  }
/* -- */

  fieldset {
    border: 1px solid var(--secondary);
    border-radius: 20px;
    padding: 30px;
    color: #666;
  }
  fieldset legend {
    padding: 0 20px;
    text-align: left;
  }
  

  .btn-clear {
    width: 100px;
    background: #e48d5a;
  }
  .btn-send {
    width: 173px;
    background: #42b983;
  }
  .personal-data{
    display: flex;
  }
  .personal-data input {
    width: 260px;
  }

  @media (max-width: 630px) {
    fieldset {
      padding: 15px;
    }
    
    .personal-data{
      display: block;
    }
    .personal-data input {
      width: 100%;
    }
    button {
      font-size: 65%;
      height: 37px;
      padding: 0 5px;
    }
    .btn-clear {
      width: 80px;
    }
    .btn-send {
      width: 110px;
    }
  }
</style>