import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// Pages
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Manager from "./pages/manager/Manager.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Items from "./pages/item/Items.jsx";
import ItemDetail from "./pages/item/ItemDetails.jsx";
import ItemCreate from "./pages/item/ItemCreate.jsx";
import Categories from "./pages/category/Categories.jsx";
import CategoryCreate from "./pages/category/CategoryCreate.jsx";
import CategoryDetails from "./pages/category/CategoryDetails.jsx";
// Components
import Header from "./pages/Header.jsx";
import MobileSideBar from "./pages/MobileSideBar.jsx";

function App() {
  return (
    <div className="">
      <Router>
        <Provider store={store}>
          <Header />
          <MobileSideBar/>
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
        </Provider>
      </Router>
    </div>
  );
}

export default App;
