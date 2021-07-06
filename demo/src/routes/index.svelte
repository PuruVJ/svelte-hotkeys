<script lang="ts">
	import { hotkeys } from '../../../dist';

	let key = 'ctrl+x';
</script>

<svelte:window use:hotkeys={{ keys: key, handler: (data) => console.log(data) }} />

<button on:click={() => (key = key === 'ctrl+x' ? 'ctrl+z' : 'ctrl+x')}>Toggle</button> Count: {key}

<button> Welcome to SvelteKit </button>
<p tabindex={0}>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
