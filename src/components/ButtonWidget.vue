<template>
    <div>
      <button
        class="bg-blue-500 text-white rounded px-4 py-2"
      >
        {{ data.label || "Button" }}
      </button>
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
  