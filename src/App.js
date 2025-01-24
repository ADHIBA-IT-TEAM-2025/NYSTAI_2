import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import AdminHub from './NYSTAI-WEBSITE/C-PRODUCT LAYOUT/productmain';
import Layout from './NYSTAI-WEBSITE/A-LAYOUT/nav-layout-nystai';
import Nystaihome from './NYSTAI-WEBSITE/B-HOME LAYOUT/nystai-home';
import Support from './NYSTAI-WEBSITE/G-SUPPORT LAYOUT/support';
import Faqs from './NYSTAI-WEBSITE/G-SUPPORT LAYOUT/faqs';
import Privacypolicy from './NYSTAI-WEBSITE/A-LAYOUT/privacypolicy';
import Warrenty from './NYSTAI-WEBSITE/A-LAYOUT/warrenty';
import Termspolicys from './NYSTAI-WEBSITE/A-LAYOUT/terms';
import Education from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/education';
import Smarthomesolu from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/SMARTHOME';
import Industrial from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/industrial';
import Warehouse from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/ware';
import Vms from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/vms';
import Parkinglot from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/parkinglot';
import Hospital from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/hospital';
import Services from './NYSTAI-WEBSITE/F-SERVICES-LAYOUT/Services';
import Protectplan from './NYSTAI-WEBSITE/E-PLAN-LAYOUT/protect';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Nystaihome />} />
          <Route path="nystai-home" element={<Nystaihome />} />
          {/* solution */}
          <Route path="nystai-solution-education" element={<Education />} />
          <Route path="nystai-solution-home" element={<Smarthomesolu />} />
          <Route path="nystai-solution-Industrial" element={<Industrial />} />
          <Route path="nystai-solution-Warehouse" element={<Warehouse />} />
          <Route path="nystai-solution-VMS" element={<Vms />} />
          <Route path="nystai-solution-parking" element={<Parkinglot />} />
          <Route path="nystai-solution-Hospital" element={<Hospital />} />
          <Route path="nystai-PLAN" element={<Protectplan />} />
          <Route path="nystai-SERVICE" element={<Services />} />
          <Route path="nystai-support" element={<Support />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="nystai-privacy-policy" element={<Privacypolicy />} />
          <Route path="nystai-warrenty" element={<Warrenty />} />
          <Route path="nystai-terms-condition" element={<Termspolicys />} />
        </Route>
        <Route path="nystai-product" element={<AdminHub />} />
      </Routes>
    </HashRouter>

  );
}

export default App;