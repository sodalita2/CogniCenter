<script setup>

</script>

<template>
  <div class="flex-1 w-full flex-col">
    <!-- Apresentacao -->
    <div class="h-[10%] w-full bg-black">
      
    </div>
    <!-- Jogos Container  -->
    <div class="h-[75%] w-full flex flex-row justify-center items-center">
      <RouterLink to="Memoria" class="h-[450px] w-[270px] rounded-lg border-2 border-black flex flex-col ml-12">
        <div class="h-[30%] w-full flex justify-center items-center text-2xl font-bold">Jogo da Memória</div>
        <div class="h-[70%] w-full bg-black"></div>
      </RouterLink>
      <RouterLink to="Corrida" class="h-[450px] w-[270px] rounded-lg border-2 border-black flex flex-col ml-12">
        <div class="h-[30%] w-full flex justify-center items-center text-2xl font-bold">Jogo da Corrida</div>
        <div class="h-[70%] w-full bg-black"></div>
      </RouterLink>
      <RouterLink to="Simon" class="h-[450px] w-[270px] rounded-lg border-2 border-black flex flex-col ml-12">
        <div class="h-[30%] w-full flex justify-center items-center text-2xl font-bold">Simon</div>
        <div class="h-[70%] w-full bg-black"></div>
      </RouterLink>
    </div>
  </div>
</template>
