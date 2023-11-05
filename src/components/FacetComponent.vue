<script setup>
  const props = defineProps({
    facet: Object,
  })
</script>

<template>
  <article class="border border-teal-600 rounded-lg">
    <h2 class="px-5 py-3 bg-teal-600 text-white text-xl font-medium rounded-t">{{ facet.code }} : {{ facet.name }}</h2>

    <div class="flex flex-col gap-3 px-6 py-4">
      <ul v-for="(skillGroup, index) in facet.skillGroups" :key="'esar-'+skillGroup.code">
        <li>
          <h3 class="text-teal-600 font-medium">{{ skillGroup.code }} : {{ skillGroup.name }}</h3>

          <div class="mt-3 px-4 py-2 bg-gradient-to-r from-gray-300 to-white rounded-lg text-sm font-normal">
            <ul>
              <li v-for="(skill, index) in skillGroup.skills" :key="'esar-'+skill.code">{{ skill.code }} : {{ skill.name }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>
