import React, { useState } from 'react';
import { add } from './const/const';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum: number | undefined = add(input);
      setResult(sum);
      setError(null);
    } catch (e) {
      setResult(undefined);
      setError((e as Error).message);
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <div>
        <label>
          Numbers:
          <input
            type="text"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div>Result: {result}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default App;
