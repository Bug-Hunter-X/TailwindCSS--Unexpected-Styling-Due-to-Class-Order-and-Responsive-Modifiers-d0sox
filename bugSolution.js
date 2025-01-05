```javascript
<div class="p-4 bg-gray-300">
  <p>This is some text.</p>
</div>

// Or, for more complex scenarios, use @apply:

@tailwind base;
@tailwind components;
@tailwind utilities;

.my-custom-style {
  @apply bg-gray-300 p-4;
}

<div class="my-custom-style">
  <p>This is some text.</p>
</div>

// For responsive design, ensure responsive modifiers are used correctly and don't conflict:

<div class="bg-gray-300 p-4 md:p-8">
  <p>This is some text.</p>
</div>
```