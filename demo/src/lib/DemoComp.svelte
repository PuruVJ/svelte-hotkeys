<script>
	import { hotkeys } from '../../../dist';
</script>

<svelte:window use:hotkeys={{ keys: 'shift+g', handler: (d) => console.log('Destroyed', d) }} />

<div>This component will be destroyed soon</div>
