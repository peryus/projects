import StatefulComponent from "./components/StatefulComponent";
import StatelessComponent from "./components/StatelessComponent";

function App() {
  return (
      <div>
        <StatelessComponent
            title="Stateless Component"
            description="This component receives props and simply displays them on the page."
        />

        <StatefulComponent
            title="Stateful Component"
            startCount={0}
        />
      </div>
  );
}

export default App;