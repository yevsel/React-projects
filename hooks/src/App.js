import UseEffectHook from "./components/UseEffect";
import UseImperativeHandleHook from "./components/UseImperativeHandle";
import UseLayoutEffectHook from "./components/UseLayoutEffect";
import UseReducerHook from "./components/UseReducer";
import UseRefHook from "./components/UseRef";
import UseStateHook from "./components/UseState";


function App() {
  return (
    <section className="main container text-center">
      <UseStateHook/>
      <UseReducerHook/>
      <UseEffectHook/>
      <UseRefHook/>
      <UseLayoutEffectHook/>
      <UseImperativeHandleHook/>
    </section>
  );
}

export default App;
