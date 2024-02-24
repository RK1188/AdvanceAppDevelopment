import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/Login";
import Home from "./Components/home";
import Products from "./Components/Products";
import Support from "./Components/Support";
import About from "./Components/About";
 import Billing from "./Components/Billing";
 import AddProducts from "./Components/AddProducts";
 import Invoice from "./Components/invoice";
 import Purchasing from "./Components/PurchasingForm";
 import Profile from "./Components/profile";
 import Feed from "./Components/Feedback";

function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About />} />
      <Route path='/billing' element={<Billing />} />
      <Route path='/addproducts' element={<AddProducts />} />
      <Route path='/Invoice' element={<Invoice/>} />
      <Route path='/dealer' element={<Purchasing/>} />
      <Route path='/feedback' element={<Feed/>} />
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}
export default App;