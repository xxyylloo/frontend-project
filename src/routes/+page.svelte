<!--<script>
  let total = $state(0);  
  let tip = $state(0);
  let baseTotal = $state(0); 

  function calculateTip(percent) {
    tip = (baseTotal * percent) / 100;
    total = baseTotal + tip; 
  }
</script>
  
  <h1 class="text-white">Bill</h1>
  
  
  <div class="eingabe">
   
   <input type="text" bind:value={baseTotal} />
    
  
    <h1 class="text-white">Select Tip</h1>
  
    
    <button onclick={() => calculateTip(5)}>5%</button>
    <button onclick={() => calculateTip(10)}>10%</button>
    <button onclick={() => calculateTip(15)}>15%</button>
    <button onclick={() => calculateTip(20)}>20%</button>
   
    <p>Tip Amount: {tip}</p>
    <p>Current Total: {total}</p>
  </div>-->
  <script>
    let total = $state(0);  
    let tip = $state(0);
    let baseTotal = $state(0); 
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
  
  <h1 class="text-white">Bill</h1>
  
  <div class="eingabe">
   
    <input 
      type="number" 
      bind:value={baseTotal} 
      placeholder="Enter bill amount"
      oninput={() => calculatePerPerson()} 
    />
  
    <h1 class="text-white">Select Tip</h1>
  
   
    <button onclick={() => calculateTip(5)}>5%</button>
    <button onclick={() => calculateTip(10)}>10%</button>
    <button onclick={() => calculateTip(15)}>15%</button>
    <button onclick={() => calculateTip(20)}>20%</button>
  
    <h1 class="text-white">Number of People</h1>
  
   
    <div class="personen-buttons">
      <button onclick={() => setPeople(2)}>2</button>
      <button onclick={() => setPeople(3)}>3</button>
      <button onclick={() => setPeople(4)}>4</button>
      <button onclick={() => setPeople(5)}>5</button>
    </div>
  
  
    <div>
      <input 
        type="number" 
        min="5" 
        placeholder="More than 5 people" 
        oninput={(e) => setPeople(Number(e.target.value))}
      />
    </div>
  
   
    <p>Tip Amount: {tip.toFixed(2)}</p>
    <p>Current Total: {total.toFixed(2)}</p>
    <p>Amount Per Person: {amountPerPerson.toFixed(2)}</p>
  </div>
  