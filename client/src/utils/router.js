import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";

import DrugStores from "../Pages/DrugStores";
import ShoppingCard from "../Pages/ShoppingCard";
import NavBar from "../Components/NavBar";


export const RootRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><NavBar/><Outlet/></>}>
          <Route index element={<DrugStores/>}/>
          <Route path="/shopping-cart" element={<ShoppingCard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
