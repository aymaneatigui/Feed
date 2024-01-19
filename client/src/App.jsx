import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Manager from "./pages/Manager.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Items from "./pages/item/Items.jsx";
import ItemDetail from "./pages/item/ItemDetails.jsx";
import ItemCreate from "./pages/item/ItemCreate.jsx";
import Categories from "./pages/category/Categories.jsx";
import CategoryCreate from "./pages/category/CategoryCreate.jsx";
import CategoryDetails from "./pages/category/CategoryDetails.jsx";

function App() {
  return (
    <div className="font-inter h-screen w-full bg-zinc-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/items" element={<Items />} />
          <Route path="/item/create" element={<ItemCreate />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/create" element={<CategoryCreate />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
