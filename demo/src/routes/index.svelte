<script lang="ts">
	import DemoComp from '$lib/DemoComp.svelte';
	import { hotkeys } from '../../../dist';

	let key = 'ctrl+x';

	let destroyed = false;
</script>

<svelte:window />

<button on:click={() => (destroyed = !destroyed)}>Toggle</button> Count: {key}

<button use:hotkeys={{ keys: key, handler: (data) => console.log(data) }}>
	Welcome to SvelteKit
</button>
<p tabindex={0}>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<br /><br />

{#if !destroyed}
	<DemoComp />
{/if}
