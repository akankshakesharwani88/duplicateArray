import "./styles.css";

export default function App() {
  const arr = [1, 2, 3, 4, 5, 6];
  const result = arr.find((item) => item % 2 === 0);
  console.log(result);
  const array = [1, 2, 3, 4, 1, 2];
  const res = array
    .filter((item, i) => array.indexOf(item) === i)
    .sort((a, b) => a - b);
  console.log(res);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
