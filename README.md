# Svelte Hotkeys
Svelte Hotkeys wraps `hotkeys-js` to bring hotkeys to svelte!

# Example Usage

```svelte
<script>
    import { hotkeys } from "svelte-hotkeys";
</script>

<!--
    We use the action on window so the keybind works anywhere in the app.

    You can have the same handler be activated by multiple hotkeys by seperating them with a comma. Here we have ctrl + x and command + x, command is Mac OS's equivilent to control, without the command alternative Mac users won't be able to run the hotkey.
-->

<svelte:window
    use:hotkeys={{
        keys: 'ctrl+x,command+x', 
        handler: (event) => console.log(event) }} 
/>
```

<!--

Commented out due to it not working properly

If you wanna make hotkeys specific to a specific element, as in, if a `div` is in focus and user hits the key combo, the handler should be triggered. This can be done by applying this action on a focusable div

```svelte
<div
    tabindex={0}
    use:hotkeys={{
        keys: 'ctrl+x', 
        handler: (event) => console.log(event) 
    }}
/>
```
-- >