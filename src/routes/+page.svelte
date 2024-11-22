<script>
	let total = $state(0);
	let tip = $state(0);
	let baseTotal = $state();
	let people = $state(1);
	let amountPerPerson = $state(0);

	function calculateTip(percent) {
		tip = (baseTotal * percent) / 100;
		total = baseTotal + tip;
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
</script>

<h1 class="text-4xl font-extrabold text-center text-accent mb-6">
	Tip<strong class="text-accent">Smart</strong>
</h1>
<div class="grid grid-cols-[400px_250px]">
	<div class="bg-primary p-6 rounded-lg shadow-lg">
		<div class="eingabe">
			<input
				type="number"
				bind:value={baseTotal}
				placeholder="Enter bill amount"
				class="w-full p-2 mb-4 rounded-lg shadow-lg"
				oninput={() => calculatePerPerson()}
			/>

			<h1 class="text-base-200">Select Tip %</h1>

			<button
				onclick={() => calculateTip(5)}
				class="bg-accent p-2 mb-4 rounded-lg shadow-lg text-neutral">5%</button
			>
			<button
				onclick={() => calculateTip(10)}
				class="bg-accent p-2 mb-4 rounded-lg shadow-lg text-neutral">10%</button
			>
			<button
				onclick={() => calculateTip(15)}
				class="bg-accent p-2 mb-4 rounded-lg shadow-lg text-neutral">15%</button
			>
			<button
				onclick={() => calculateTip(20)}
				class="bg-accent p-2 mb-4 rounded-lg shadow-lg text-neutral">20%</button
			>

			<h1 class="text-base-200">Number of People:</h1>

			<div class="personen-buttons">
				<button
					onclick={() => setPeople(2)}
					class="bg-accent p-2 mb-4 rounded-lg shadow-lg text-neutral">2</button
				>
				<button
					onclick={() => setPeople(3)}
					class="bg-accent p-2 mb-4 rounded-lg shadow-lg text-neutral">3</button
				>
				<button
					onclick={() => setPeople(4)}
					class="bg-accent p-2 mb-4 rounded-lg shadow-lg text-neutral">4</button
				>
				<button
					onclick={() => setPeople(5)}
					class="bg-accent p-2 mb-4 rounded-lg shadow-lg text-neutral">5</button
				>
			</div>

			<div>
				<input
					type="number"
					min="5"
					class="w-full p-2 mb-4 rounded-lg shadow-lg"
					placeholder="More than 5 people"
					oninput={(e) => setPeople(Number(e.target.value))}
				/>
			</div>
		</div>
	</div>
	<div class="">
		<div class="bg-secondary p-6 rounded-lg shadow-lg h-80">
			<p class="">Tip Amount:</p>
			<h2>{tip.toFixed(2)}</h2>

			<!-- <p>Current Total: {total.toFixed(2)}</p>
    <p>Number of People: {people}</p> -->
			<p>Amount Per Person:</p>
			<h2>{amountPerPerson.toFixed(2)}</h2>
		</div>
	</div>
</div>
