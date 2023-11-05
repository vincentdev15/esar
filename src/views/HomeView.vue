<script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()

  const activities = [
    {
      'name': 'Dynamiques de jeu',
      'icon': 'gears',
      'route': '',
    },
    {
      'name': 'Typologie des joueurs',
      'icon': 'users-line',
      'route': '',
    },
    {
      'name': 'Système ESAR',
      'icon': 'box',
      'route': 'esar',
    },
    {
      'name': 'Psychologie du jeu',
      'icon': 'brain',
      'route': '',
    },
  ]

  function goto(route)
  {
    router.push({ name: route })
  }
</script>

<template>
  <h1 class="text-3xl text-teal-600 font-medium">Ludopédagogie</h1>

  <section class="mt-5 grid grid-cols-4 gap-5">
    <article v-for="(activity, index) in activities" class="flex flex-col gap-5 justify-center items-center h-40 p-5 border border-teal-600 hover:cursor-pointer transition-all duration-200 hover:bg-teal-600 hover:text-white rounded-lg text-center" :key="'activity-'+index" @click="goto(activity.route)">
      <div>
        <font-awesome-icon :icon="['fas', activity.icon]" size="3x" fixed-width></font-awesome-icon>
        <i class="{{ activity.icon }}"></i>
      </div>

      <div class="text-xl">{{ activity.name }}</div>
    </article>
  </section>
</template>
