import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//sales
import SalesRoutes from './SalesRoutes';

//sales manager

import SalesManagerRoutes from './SalesManagerRoutes';

//inventory
import InventoryRoutes from "./InventoryRoutes";

//supplier
import SupplierRoutes from './SupplierRoutes';

//staff
import StaffRoutes from './StaffRoutes';

//delivery
import DeliveryRoutes from './DeliveryRoutes';

//financial
import FinancialRoutes from './financialRoutes';

//login
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";

function App() {
  return (
    <Router>
      <div className='App'>

        {/* inventory routes */}
        <Routes>
          <Route path="/inventory/*" element={<InventoryRoutes />} />
        </Routes>

        {/* sales routes */}
        <Routes>
          <Route path='/sales/*' element={<SalesRoutes />} />
        </Routes>

        {/* sales manager routes */}
        <Routes>
          <Route path='/salesManager/*' element={<SalesManagerRoutes />} />
        </Routes>

        {/* supplier routes */}
        <Routes>
          <Route path='/supplierManager/*' element={<SupplierRoutes />} />
        </Routes>

        {/* delivery routes */}
        <Routes>
          <Route path='/deliveryManager/*' element={<DeliveryRoutes />} />
        </Routes>

        {/* financial routes */}
        <Routes>
          <Route path='/financial/*' element={<FinancialRoutes />} />
        </Routes>

        {/* staff routes */}
        <Routes>
          <Route path='/staff/*' element={<StaffRoutes />} />
        </Routes>

        {/* login routes */}
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>

        <Routes>
          <Route path='/forgetPassword' element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;