/**
 * Project: Studentske turnaje
 * File: index.js
 * Created: 25.10.2022
 * Author: Jakub Kasem xkasem02@stud.fit.vutbr.cz
 * 
 * Description: Routing infos
 */

import { createRouter, createWebHistory } from 'vue-router'
import MainVue from '../views/MainVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainVue
    },
    {
      path: '/create-tournament',
      name: 'createTournament',
      component: () => import('../views/CreateTournament.vue'),
    },
    {
      path: '/matches',
      name: 'myMatches',
      component: () => import('../views/MyMatches.vue'),
      props: true
    },
     {
      path: '/history',
      name: 'matchHistory',
      component: () => import('../views/History.vue'),
    }, 
    {
      path: '/create-team',
      name: 'createTeam',
      component: () => import('../views/CreateTeam.vue'),
      props: true
    },
    {
      path: '/teams',
      name: 'myTeams',
      component: () => import('../views/MyTeams.vue'),
      props: true
    },
    {
      path: '/tournament',
      name: 'tournamentDetail',
      component: () => import('../views/TournamentDetail.vue'),
      props(route) {
        return { id: route.query.id}
      }
    },
    {
      path: '/player',
      name: 'playerDetail',
      component: () => import('../views/PlayerDetail.vue'),
      props(route) {
        return { id: route.query.id}
      }
    },
    {
      path: '/team',
      name: 'teamDetail',
      component: () => import('../views/TeamDetail.vue'),
      props(route) {
        return { id: route.query.id}
      }
    },
    {
      path: "/login",
      name: "LoginUser",
      component: () => import('../views/Login.vue'),
      props: true
    },
    {
      path: "/register",
      name: "RegisterUser",
      component: () => import('../views/Register.vue'),
      props: true
    },
    {
      path: "/editPlayer",
      name: "EditPlayer",
      component: () => import('../views/EditPlayer.vue'),
      props: true
    },
    {
      path: "/match",
      name: "matchDetail",
      component: () => import('../views/MatchDetail.vue'),
      props(route) {
        return { id: route.query.id }
      }
    },
    {
      path: "/editMatch",
      name: "editMatch",
      component: () => import('../views/MatchEdit.vue'),
      props(route) {
        return { id: route.query.id }
      }
    },
    {
      path: "/manuallyGenerateBracket",
      name: "manuallyGenerateBracket",
      component: () => import('../views/GenerateBracketManually.vue'),
      props(route) {
        return {id: route.query.id }
      }
    },
    {
      path: "/editTournament",
      name: "editTournament",
      component: () => import('../views/editTournament.vue'),
      props(route) {
        return {id: route.query.id }
      }
    },
    {
      path: "/bracketDetail",
      name: "bracketDetail",
      component: () => import('../views/BracketDetail.vue'),
      props(route) {
        return { id: route.query.id }
      }
    }
  ]
})

export default router
