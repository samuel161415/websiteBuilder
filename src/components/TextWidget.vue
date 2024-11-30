<template>
    <div>
      <input
        type="text"
        v-model="data.content"
        placeholder="Enter text"
        class="border border-gray-300 rounded p-2 w-full"
      />
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
  