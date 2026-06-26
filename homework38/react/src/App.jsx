import Button from './components/Button';

function App() {
  function handleClick() {
    alert('clicked');
  }

  return (
      <div>
        <h1>Component</h1>

        <Button
            text="BUTTON"
            type="button"
            onClick={handleClick}
        />
      </div>
  );
}

export default App;