<script setup>
import { RouterLink, RouterView } from "vue-router";


// Pages in which Header will be shown
const HeaderOnPages = ["Home","Sobre","Social","Contato"];

</script>



<template>
  <header v-if="HeaderOnPages.indexOf($route.name) > -1" class="h-[150px] w-full text-4xl font-[500] flex items-center justify-center">
    <!-- Logo -->
    <RouterLink to="/" class="w-[30%] h-full flex justify-center items-center">
      <img class="w-[65%] h-[50%]" src="./assets/Home/Logo2.png">
    </RouterLink>
    <!-- Header Nav -->
    <div class="flex flex-1 h-full justify-center items-center">
      <RouterLink to="Sobre" class="relative group italic text-[30px] tracking-tighter min-w-content m-[4vw]">Sobre
        <div class="transition-all absolute bottom-0 h-[2px] w-0 group-hover:animate-NavHoverShow group-hover:w-full delay-400 bg-[#D6A66B]"></div>
      </RouterLink>
      <RouterLink to="Social" class="relative group italic text-[30px] tracking-tighter min-w-content m-[4vw]">Impacto Social
        <div class="transition-all absolute bottom-0 h-[2px] w-0 group-hover:animate-NavHoverShow group-hover:w-full delay-400 bg-[#D6A66B]"></div>
      </RouterLink>
      <RouterLink to="Contato" class="relative group italic text-[30px] tracking-tighter min-w-content m-[4vw]">Contato
        <div class="transition-all absolute bottom-0 h-[2px] w-0 group-hover:animate-NavHoverShow group-hover:w-full delay-400 bg-[#D6A66B]"></div>
      </RouterLink>
    </div>
    
  </header>
  <header v-else="" class="h-[50px] w-full text-4xl font-[500] flex items-center justify-center">
    {{$route.name}}
  </header>

  <RouterView />
</template>





