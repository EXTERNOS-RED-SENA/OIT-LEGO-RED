import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from 'legored/plugin/components/Inicio.vue'
import Curso from '../views/Curso.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/introduccion',
      name: 'introduccion',
      component: () => import('../views/Introduccion.vue'),
    },
    {
      path: '/curso',
      name: 'curso',
      component: Curso,
      redirect: {
        name: 'tema1',
      },
      children: [
        {
          path: 'tema1',
          name: 'tema1',
          component: () => import('../views/Tema1.vue'),
        },
        {
          path: 'tema2',
          name: 'tema2',
          component: () => import('../views/Tema2.vue'),
        },
        {
          path: 'tema3',
          name: 'tema3',
          component: () => import('../views/Tema3.vue'),
        },
        {
          path: 'tema4',
          name: 'tema4',
          component: () => import('../views/Tema4.vue'),
        },
        {
          path: 'tema5',
          name: 'tema5',
          component: () => import('../views/Tema5.vue'),
        },
      ],
    },
    {
      path: '/actividad',
      name: 'actividad',
      component: () => import('../views/Actividad.vue'),
    },
    {
      path: '/glosario',
      name: 'glosario',
      component: () => import('../views/Glosario.vue'),
    },
    {
      path: '/complementario',
      name: 'complementario',
      component: () => import('../views/Complementario.vue'),
    },
    {
      path: '/referencias',
      name: 'referencias',
      component: () => import('../views/Referencias.vue'),
    },
    {
      path: '/sintesis',
      name: 'sintesis',
      component: () => import('../views/sintesis.vue'),
    },
    {
      path: '/creditos',
      name: 'creditos',
      component: () => import('../views/Creditos.vue'),
    },
  ],
  scrollBehavior(to, from) {
    if (to.hash) {
      const newRoute = {
        selector: to.hash,
        offset: { y: 100 },
        behavior: 'smooth',
      }
      if (to.name === from.name) {
        return newRoute
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(newRoute)
          }, 500)
        })
      }
    } else {
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'auto',
        })
      }, 100)
    }
  },
})

export default router
