<script>
	let total = $state(0);
	let tip = $state(0);
	let baseTotal = $state();
	let people = $state(1);
	let amountPerPerson = $state(0);
	let selectedTip = $state(null);
	let customTip = $state();

	function calculateTip(percent) {
		tip = (baseTotal * percent) / 100;
		total = baseTotal + tip;
		selectedTip = percent;
		calculatePerPerson();
	}

	function setPeople(num) {
		people = num;
		calculatePerPerson();
	}

	function calculatePerPerson() {
		if (people > 0) {
			amountPerPerson = total / people;
		} else {
			amountPerPerson = 0;
		}
	}
	function resetValues() {
		baseTotal = 0;
		tip = 0;
		total = 0;
		people = 1;
		amountPerPerson = 0;
		selectedTip = null;
		customTip = 0;
	}

	function setCustomTip() {
		if (customTip > 0) {
			calculateTip(customTip);
		}
	}
</script>

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
				<button
					onclick={() => calculateTip(5)}
					class="bg-accent p-3 rounded-lg text-neutral text-lg {selectedTip === 5
						? 'bg-bg-highlight'
						: ''}">5%</button
				>

				<button
					onclick={() => calculateTip(10)}
					class="bg-accent p-3 rounded-lg text-neutral text-lg {selectedTip === 10
						? 'bg-bg-highlight'
						: ''}">10%</button
				>

				<button
					onclick={() => calculateTip(15)}
					class="bg-accent p-3 rounded-lg text-neutral text-lg {selectedTip === 15
						? 'bg-bg-highlight'
						: ''}">15%</button
				>

				<button
					onclick={() => calculateTip(20)}
					class="bg-accent p-3 rounded-lg text-neutral text-lg {selectedTip === 20
						? 'bg-bg-highlight'
						: ''}">20%</button
				>

				<button
					onclick={() => calculateTip(50)}
					class="bg-accent p-3 rounded-lg text-neutral text-lg {selectedTip === 50
						? 'bg-bg-highlight'
						: ''}">50%</button
				>

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
						on.click={resetValues}
						class="btn btn-danger mt-4 bg-bg-highlight py-4 px-6 text-lg rounded-lg flex items-center justify-center"
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
