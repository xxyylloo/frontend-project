<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col justify-center items-center min-h-screen">
	{@render children()}
</div>
