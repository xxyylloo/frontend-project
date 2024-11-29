<script>
	let total = $state(0);
	let tip = $state(0);
	let baseTotal = $state(null);
	let people = $state(1);
	let amountPerPerson = $state(0);
	let selectedTip = $state(null);
	let customTip = $state();
	let showAlert = $state(false);

	function calculateTip(percent) {
		if (baseTotal === null || baseTotal === 0) {
			showAlert = true;
			return;
		}
		tip = (baseTotal * percent) / 100;
		total = baseTotal + tip;
		selectedTip = percent;
		calculatePerPerson();
		showAlert = false;
	}

	function setPeople(num) {
		people = num;
		calculatePerPerson();
	}

	function calculatePerPerson() {
		if (people > 0) {
			amountPerPerson = total / people;
		} else {
			amountPerPerson = total;
		}
	}
	function resetValues() {
		baseTotal = null;
		tip = 0;
		total = 0;
		people = 1;
		amountPerPerson = 0;
		selectedTip = null;
		customTip = null;
		showAlert = false;
	}

	function setCustomTip() {
		if (customTip > 0) {
			calculateTip(customTip);
		}
	}
	function toggleTheme() {
		theme = themes === 'dark' ? 'light' : 'dark';
		document.querySelector('html').setAttribute('data-theme', theme);
	}
</script>

{#if showAlert}
	<div role="alert" class="alert alert-warning mb-4">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
			/>
		</svg>
		<span>Warning: Please enter a bill amount first!</span>
	</div>
{/if}

<h1 class="text-4xl font-extrabold text-center text-accent mb-6">
	Tip<strong class="text-accent">Smart</strong>
</h1>
<div class="grid grid-cols-1 gap-2">
	<div class="bg-primary p-6 rounded-lg shadow-lg">
		<div class="eingabe">
			<input
				type="number"
				bind:value={baseTotal}
				placeholder="Enter bill amount"
				class="w-full p-2 mb-4 rounded-lg shadow-lg"
				oninput={() => calculatePerPerson()}
			/>

			<h2 class="text-base-200 text-lg">Select Tip %</h2>

			<div class="grid grid-cols-3 gap-4">
				{#each [5, 10, 15, 20, 50] as percent}
					<button
						onclick={() => calculateTip(percent)}
						class="bg-accent p-3 rounded-lg text-neutral text-lg {selectedTip === percent
							? 'bg-bg-highlight'
							: ''}"
					>
						{percent}%
					</button>
				{/each}

				<input
					type="number"
					bind:value={customTip}
					placeholder="Custom"
					oninput={() => setCustomTip()}
					class="p-3 rounded-lg shadow-lg text-lg bg-base-200"
				/>
			</div>

			<h2 class="text-base-200 text-lg">Number of People</h2>

			<div>
				<input
					type="number"
					min="2"
					class="w-full p-2 mb-4 rounded-lg shadow-lg text-primay"
					placeholder="not alone?"
					oninput={(e) => setPeople(Number(e.target.value))}
				/>
			</div>
		</div>

		<div class="bg-secondary p-6 rounded-lg shadow-lg h-45">
			<div class="space-y-4">
				<div class="flex justify-between">
					<p class="text-sm">Tip Amount:</p>
					<h2 class="text-xl font-bold">{tip.toFixed(2)}</h2>
				</div>

				<div class="flex justify-between">
					<p class="text-sm">Amount Per Person:</p>
					<h2 class="text-xl font-bold">{amountPerPerson.toFixed(2)}</h2>
				</div>
				<div class="flex justify-center">
					<button
						onclick={resetValues}
						class="btn btn-danger mt-4 bg-bg-highlight py-4 px-6 text-lg rounded-lg flex items-center justify-center"
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- Theme Switcher -->
<div class="absolute top-4 right-4">
	<label class="swap swap-rotate">
		<!-- Hidden checkbox to control the state -->
		<input type="checkbox" class="theme-controller hidden" onchange={toggleTheme} />

		<!-- Sun icon -->
		<svg
			class="swap-off h-10 w-10 fill-current text-[#303030]"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<path
				d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
			/>
		</svg>

		<!-- Moon icon -->
		<svg
			class="swap-on h-10 w-10 fill-current"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<path
				d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
			/>
		</svg>
	</label>
</div>
