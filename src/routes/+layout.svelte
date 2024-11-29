<script>
	import '../app.css';
	import 'iconify-icon';
	let theme = $state('dark');
	let { children } = $props();
</script>

<div class="flex flex-col justify-center items-center min-h-screen">
	{@render children()}
</div>
