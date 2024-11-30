<template>
    <div>
      <input
        type="text"
        v-model="data.src"
        placeholder="Image URL"
        class="border border-gray-300 rounded p-2 w-full"
      />
      <img v-if="data.src" :src="data.src" alt="Image" class="mt-2 max-w-full" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  