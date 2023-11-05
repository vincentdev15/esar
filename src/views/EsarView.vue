<script setup>
	import facets from '../datas/esar.js'
	import FacetComponent from '@/components/FacetComponent'
</script>

<template>
  <h1 class="flex items-center gap-3 text-3xl text-teal-600 font-medium">
  	<router-link class="underline" to="/">Ludopédagogie</router-link> <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon> Système ESAR</h1>

  <section class="mt-5 grid grid-cols-3 gap-5">
  	<facet-component v-for="(facet, index) in facets" :key="'esar-'+facet.code" :facet="facet"></facet-component>
  </section>
</template>
