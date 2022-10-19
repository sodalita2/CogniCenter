<script setup>

</script>

<template>
  <div class="h-full w-full flex-col">
    <!-- Apresentacao -->
    <div class="h-[200px] MaxW-700px:h-[250px] w-full bg-[#6FCF97] flex flex-col items-center justify-center text-2xl text-center">
      <span>A CogniCenter é uma plataforma de jogos para exercício cognitivo,<br>
    ela foi desenvolvida por Gabriel Bittencourt de Souza Pinto<br>
    para seu Trabalho de Conclusão de Curso<br>
    em Sistemas de Computação - Universidade Federal Fluminense</span>
    </div>
    <!-- Jogos Container  -->
    <div class="h-[60%] border-2 border-black w-full flex flex-row justify-center items-center">
      <RouterLink to="Memoria" class="h-[450px] w-[270px] rounded-lg border-2 border-black flex flex-col ml-12">
        <div class="h-[30%] w-full flex justify-center items-center text-2xl font-bold">Jogo da Memória</div>
        <div class="h-[70%] w-full"><img class="h-full w-full rounded-lg" src="/Home/CapaMemoria.PNG"></div>
      </RouterLink>
      <RouterLink to="Corrida" class="h-[450px] w-[270px] rounded-lg border-2 border-black flex flex-col ml-12">
        <div class="h-[30%] w-full flex justify-center items-center text-2xl font-bold">Jogo da Corrida</div>
        <div class="h-[70%] w-full"><img class="h-full w-full rounded-lg" src="/Home/CapaCorrida.PNG"></div>
      </RouterLink>
      <RouterLink to="Simon" class="h-[450px] w-[270px] rounded-lg border-2 border-black flex flex-col ml-12">
        <div class="h-[30%] w-full flex justify-center items-center text-2xl font-bold">Simon</div>
        <div class="h-[70%] w-full bg-black"></div>
      </RouterLink>
    </div>
  </div>
</template>
