import Button from "./components/button"
import Header from "./components/header"
export default function App() {
  return (
    <div className="container">
      <Header
        Texts={["SaulDesign", "Home", "About Me", "Contact"]}
        navLinks={["#Home", "#About", "#Contact"]}
      />
    </div>
  );
}
