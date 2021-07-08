<script>
	import { hotkeys } from '../../../dist';
</script>

<svelte:window />

<div>This component will be destroyed soon</div>

<button use:hotkeys={{ keys: 'shift+g', handler: (d) => console.log('Destroyed', d) }} />
