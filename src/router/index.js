import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MemoriaView from "../views/MemoriaView.vue";
import CorridaView from "../views/CorridaView.vue";
import SimonView from "../views/SimonView.vue";
import SobreView from "../views/SobreView.vue";
import SocialView from "../views/SocialView.vue";
import ContatoView from "../views/ContatoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/Sobre",
      name: "Sobre",
      component: SobreView,
    },
    {
      path: "/Social",
      name: "Social",
      component: SocialView,
    },
    {
      path: "/Contato",
      name: "Contato",
      component: ContatoView,
    },
    {
      path: "/Memoria",
      name: "Memoria",
      component: MemoriaView,
    },
    {
      path: "/Corrida",
      name: "Corrida",
      component: CorridaView,
    },
    {
      path: "/Simon",
      name: "Simon",
      component: SimonView,
    },
  ],
});

export default router;
