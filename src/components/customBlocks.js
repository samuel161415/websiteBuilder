export const customBlocks = [
  {
    id: "custom-section",
    label: `
        <div>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>
          </svg>
          <div >Custom Section</div>
        </div>
      `,
    category: "Custom",
    content: `<section class="w-full min-h-[40px]">
                  <div class="custom-div">
                  </div>
                </section>`,
    activate: true,
  },
  {
    id: "custom-image",
    label: `
        <div>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M21 19V5H3v14h18m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18M8.5 11.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"></path>
          </svg>
          <div>Custom Image</div>
        </div>
      `,
    category: "Custom",
    content: `
                  <img src="https://via.placeholder.com/150" class="object-cover w-full h-full" />
                `,
    activate: true,
  },
  {
    id: "custom-text",
    label: `
        <div>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>
          </svg>
          <div>Custom Text</div>
        </div>
      `,
    category: "Custom",
    content: `<div class="w-full">
                  <p>Custom Text</p>
                </div>`,
    activate: true,
  },
  {
    id: "custom-button",
    label: `
        <div>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>
          </svg>
          <div>Custom Button</div>
        </div>
      `,
    category: "Custom",
    content: `
                  <button class="bg-blue-500 text-white rounded px-4 py-2">Custom Button</button>
                `,
    activate: true,
  },
];
