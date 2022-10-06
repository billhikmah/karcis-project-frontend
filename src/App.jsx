import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Event and Transactions */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />

        {/* // User */}

        {/* Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
