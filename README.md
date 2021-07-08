Docs coming soon!

Meanwhile, basic usage:

```js
import { hotkeys } from "svelte-hotkeys";
```

Later in svelte component

```svelte
<svelte:window use:hotkeys={{ keys: 'ctrl+x', handler: (ev) => console.log(ev) }} />
```

This binds `hotkeys` to the `window`, as in hitting the key anywhere will trigger the `handler`

if you wanna make hotkeys specific to a specific element, as in, if a `div` is in focus and user hits the key combo, the handler should be triggered. This can be done by applying this action on a focusable div

```svelte
<div tabindex={0} use:hotkeys={{ keys: 'ctrl+x', handler: (ev) => console.log(ev) }} />
```
