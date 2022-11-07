<script setup>

</script>

<template>
  <!-- Wrapper -->
  <div class="h-auto w-full flex flex-col items-center">
    <!-- Apresentacao -->
    <div class="h-[600px] w-full flex flex-row">
      <div class="h-full w-[60%] bg-orange-rgba flex flex-col justify-center items-center">
        <span class="border-2 border-black h-[25%] w-[80%] flex justify-center items-center text-[40px] max-[400px]:text-[16px]
        font-[700] italic tracking-tighter flex-nowrap">
          A Cognicenter é uma plataforma de jogos voltados para exercícios cognitivos.
        </span>
        <span class="border-2 border-black h-[40%] w-[80%] mt-4 flex justify-center items-start text-[30px] font-[200] tracking-tighter flex-nowrap">
          Feitos de uma forma divertida e estimulante, ela foi desenvolvida com base teórica e seu objetivo é atingir várias áreas de intervenção cognitiva.
          <RouterLink to="Sobre" class="h-[10%] w-[80%] absolute bottom-4 left-0 text-[#615361] text-[25px] hover:text-[#5e8568] hover:font-[600]">
            Conheça mais sobre
          </RouterLink>
        </span>
      </div>
      <div class="h-full w-[40%]">
        <img class="h-full w-full" src="../assets/Home/4057827.jpg">
      </div>
    </div>

    <!-- Catalogo Title -->
    <div class="h-[90px] w-[90%] flex flex-row mt-28">
      <div class="h-full w-[10%] flex justify-center items-center">
        <span class="h-[2px] w-full bg-black"></span>
      </div>
      <div class="h-full w-[20%] flex justify-center items-center text-[36px] font-[600] tracking-tighter">Catálogo de Jogos</div>
      <div class="h-full flex flex-1 justify-center items-center">
        <span class="h-[2px] w-full bg-black"></span>
      </div>
    </div>
    <!-- Jogos Container -->
    <div class="h-auto w-[90%]">
      <!-- Jogos abaixo, height definido por quantidades de flexbox jogos, template abaixo -->
      <RouterLink to="Memoria" class="h-[300px] w-full mt-16 flex flex-row rounded-xl hover:bg-orange-rgba-lighter">
        <div class="h-full w-[25%] flex justify-center items-center">
          <img class="h-[90%] w-[90%]" src="../assets/Home/CapaMemoria.jpg">
        </div>
        <!-- Titulo do Jogo + Descricao (opcional) -->
        <div class="h-full flex flex-1 flex-col">
          <!-- Titulo Box -->
          <div class="h-[30%] w-full flex">
            <span class="italic text-[34px] font-[500] tracking-tighter ml-[6vw]">Jogo da Memória</span>
          </div>
        </div>
      </RouterLink>

      <div class="h-[2px] w-full bg-black opacity-[8%] mt-16"></div>

      <RouterLink to="Corrida" class="h-[300px] w-full mt-16 flex flex-row rounded-xl hover:bg-orange-rgba-lighter">
        <div class="h-full w-[25%] flex justify-center items-center">
          <img class="h-[90%] w-[90%]" src="../assets/Home/CapaCorrida.jpg">
        </div>
        <!-- Titulo do Jogo + Descricao (opcional) -->
        <div class="h-full flex flex-1 flex-col">
          <!-- Titulo Box -->
          <div class="h-[30%] w-full flex">
            <span class="italic text-[34px] font-[500] tracking-tighter ml-[6vw]">Jogo da Corrida</span>
          </div>
        </div>
      </RouterLink>
    </div>

    <!-- Placeholder espaco -->
    <div class="h-[200px] w-full">

    </div>

  </div>
</template>
