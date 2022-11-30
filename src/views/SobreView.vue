<script setup>
import { BIconGithub, BIconLinkedin } from 'bootstrap-icons-vue';

</script>

<template>
    <!-- Wrapper -->
    <div class="w-full h-auto flex flex-col items-center mt-12">
        <!-- Apresentacao + Bio Container -->
        <div class="w-[90%] sm:w-[80%] h-auto flex flex-col mt-8">
            <!-- Apres -->
            <div class="w-full h-auto text-[20px] sm:text-[28px] md:text-[34px] lg:text-[38px] xl:text-[40px] 2xl:text-[42px] font-[500] italic tracking-tighter text-center">
                A plataforma foi desenvolvida por Gabriel Bittencourt de Souza Pinto para seu Trabalho de Conclusão de Curso 
                em Sistemas de Computação - Universidade Federal Fluminense
            </div>
            <!-- Bio -->
            <div class="w-full flex flex-1 flex-row mt-8">
                <span class="w-[50%] h-full flex justify-center items-center">
                    <img class="rounded-[40%]" src="../assets/Home/4911367.jpg">
                </span>
                <span class="w-[50%] h-full flex justify-center items-center">
                    <a class="h-[30%] w-[30%] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[150px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[240px] 2xl:w-[240px] flex justify-center items-center mr-4" href="https://github.com/sodalita2">
                        <BIconGithub class="text-[60px] sm:text-[70px] md:text-[83px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px]" />
                    </a>
                    <a class="h-[30%] w-[30%] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[150px] lg:h-[190px] lg:w-[190px] xl:h-[210px] xl:w-[210px] 2xl:h-[240px] 2xl:w-[240px] flex justify-center items-center" href="https://www.linkedin.com/in/gabriel-bittencourt-sp/">
                        <BIconLinkedin class="text-[60px] sm:text-[70px] md:text-[83px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px]" />
                    </a>
                </span>
            </div>
        </div>


        <!-- Projeto Futuro Title -->
        <div class="h-[50px] w-[98%] sm:w-[95%] lg:w-[92%] flex flex-row mt-6 md:mt-8 lg:mt-20">
            <!-- Linha Left Container -->
            <div class="h-full w-[10%] ml-4 mr-1 sm:mr-2 flex justify-center items-center">
                <span class="h-[2px] w-full bg-black"></span>
            </div>
            <!-- Middle Texto --> 
            <div class="h-full w-[24%] flex justify-center items-center text-center text-[19px] sm:w-[22%] sm:text-[20px] md:text-[19px] lg:text-[23px] xl:text-[28px] 2xl:text-[33px] font-[600] tracking-tighter">Projetos Futuros</div>
            <!-- Linha Right Container -->
            <div class="h-full flex flex-1 ml-1 sm:ml-2 justify-center items-center">
                <span class="h-[2px] w-full bg-black"></span>
            </div>
        </div>
        <!-- Projeto Texto -->
        <div class="w-[90%] sm:w-[80%] h-auto flex justify-center items-center mt-12 xl:mt-16 2xl:mt-24">
            <span class="h-full w-full flex justify-center items-center text-[20px] sm:text-[28px] md:text-[34px] lg:text-[38px] xl:text-[40px] 2xl:text-[42px] font-[500] italic tracking-tighter text-center">
                Meu projeto para a plataforma é expandir as áreas de intervenção 
                cognitiva e implementar ferramentas para que os profissionais 
                de saúde, fazendo o uso da plataforma, possam analisar dados 
                de desempenho dos seus pacientes durante tratamento.
                O código da plataforma é aberto em meu repositório no Github,
                toda recomendação e conselho é bem vindo, caso você tenha uma
                ideia de jogo para ser implementado na plataforma, sugiro que
                envie para meu email na aba de Contato.
            </span>
        </div>
        <!-- Placeholder espaco -->
        <div class="w-full h-[400px]">
            
        </div>
    </div>
</template>