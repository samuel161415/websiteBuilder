<template>
  <div id="gjs" class="border border-gray-300 w-full h-screen"></div>
</template>

<script>
import { onMounted } from "vue";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import webPlugin from "grapesjs-preset-webpage";
import formPlugin from "grapesjs-plugin-forms";
import basicPlugin from "grapesjs-blocks-basic";
import grapejsRulers from "grapesjs-rulers";
import tabs from "grapesjs-tabs";
import flexbox from "grapesjs-blocks-flexbox";
import { customBlocks } from "./customBlocks";

// Placeholder for custom React components
// Replace these with Vue-compatible components if needed
const ReactText = {
  type: "text",
  content: "Custom React Text Block (replace with Vue)",
};

export default {
  name: "WebBuilder",
  setup() {
    onMounted(() => {
      const editor = grapesjs.init({
        container: "#gjs",
        height: "100vh",
        width: "100%",
        plugins: [
          basicPlugin,
          formPlugin,
          webPlugin,
          grapejsRulers,
          // tabs,
          // flexbox,
        ],
        storageManager: {
          id: "gjs-",
          type: "local",
          autosave: true,
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
        },
        deviceManager: {
          devices: [
            {
              id: "desktop",
              name: "Desktop",
              width: "",
            },
            {
              id: "tablet",
              name: "Tablet",
              width: "768px",
              widthMedia: "992px",
            },
            {
              id: "mobilePortrait",
              name: "Mobile portrait",
              width: "320px",
              widthMedia: "575px",
            },
          ],
        },
        pluginsOpts: {
          "grapesjs-preset-webpage": {
            blocks: [
              "section",
              "column1",
              "column2",
              "column3",
              "column3-7",
              "text",
              "link",
              "image",
              "video",
              "map",
            ],
          },
        },
      });

      // Add custom blocks
      customBlocks.forEach((block) => {
        editor.BlockManager.add(block.id, block);
      });

      console.log("GrapesJS editor initialized:", editor);
    });
  },
};
</script>

<style scoped>
#gjs {
  background-color: #f5f5f5;
}

/* :deep(.gjs-editor-cont) {
  display: flex;
  flex-direction: row-reverse;
} */

:deep(.gjs-pn-views-container) {
  height: 100%;
  padding: 42px 0 0;
  left: 0;
  width: 20%;
  overflow: auto;
  box-shadow: 0 0 5px var(--gjs-main-dark-color);
  background-color: #463a3c;
  /* border : solid red 1.5px; */
}

:deep(.gjs-pn-views) {
  border-bottom: 2px solid var(--gjs-main-dark-color);
  left: 0;
  width: 20%;
  z-index: 4;
}

:deep(.gjs-cv-canvas) {
  box-sizing: border-box;
  width: 70%;
  padding-left: 50px;
  /* border : solid red 1.5px; */
  height: calc(100% - 30px);
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  position: absolute;
  right: 0;
  top: 40px;
  margin-left: 25%;
}
:deep(.gjs-cv-canvas__frames) {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
:deep(.gjs-one-bg) {
  background-color: #463a3c;
}
:deep(.gjs-pn-options) {
  left: 25%;
  top: 0;
}
:deep(.gjs-block) {
  background-color: #463a3c;
}
:deep(.gjs-pn-commands) {
  width: 100%;
  right: 0;
  top: 0;
  background-color: #463a3c;
  /* box-shadow: 0 0 5px var(--gjs-main-dark-color); */
}
</style>
