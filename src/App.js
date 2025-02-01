import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Routes, Route , BrowserRouter, HashRouter } from 'react-router-dom';
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
import Hybriddetails from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/hybrid';
import Nystaiblogs from './NYSTAI-WEBSITE/A-LAYOUT/blogsnys';
import Access from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/ACCESSCONTROL';
import Aivmsdet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/AI-VMS';
import Alarmdet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/ALARM&AUTOMATION';
import Camera from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/CAMERA';
import Digitaldet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/DIGITALCLASS';
import Electricdet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/ELECTRICFENCE';
import Industrialdet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/IndustrialAINVR';
import Cameradet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/CAMERA';
import Sensordet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/SENSORS';
import Smartdet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/SMART SWITCH';
import Accessdet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/ACCESSCONTROL';
import Waterdet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/WATERMANAGEMENT';
import Kitchendet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/KITCHENSAFETY';
import Ioedet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/IOE';
import Waredet from './NYSTAI-WEBSITE/C-PRODUCTDETAILS/WAREHOUSE';
import WORSHIP from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/worship';
import Retailcategory from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/Retail';
import Banking from './NYSTAI-WEBSITE/D-SOLUTION LAYOUT/Banking';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Nystaihome />} />
          <Route path="nystai-home" element={<Nystaihome />} />
          <Route path="blog" element={<Nystaiblogs/>} />
          {/* solution */}
          <Route path="nystai-solution-education" element={<Education />} />
          <Route path="nystai-solution-worship" element={<WORSHIP />} />
          <Route path="nystai-solution-home" element={<Smarthomesolu />} />
          <Route path="nystai-solution-banking" element={<Banking />} />
          <Route path="nystai-solution-retail" element={<Retailcategory />} />
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
          {/* product-details-page */}
          <Route path="Accessdet" element={<Accessdet />} />
          <Route path="vmsde" element={<Aivmsdet />} />
          <Route path="Alarmdet" element={<Alarmdet />} />
          <Route path="Camerdet" element={<Cameradet />} />
          <Route path="ditdet" element={<Digitaldet />} />
          <Route path="electricdet" element={<Electricdet />} />
          <Route path="Kitchendet" element={<Kitchendet />} />
          <Route path="indudet" element={<Industrialdet/>} />
          <Route path="hybriddet" element={<Hybriddetails />} />
          <Route path="ioedet" element={<Ioedet />} />
          <Route path="sensordet" element={<Sensordet />} />
          <Route path="swichdet" element={<Smartdet />} />
          <Route path="waredet" element={<Waredet />} />
          <Route path="waterdet" element={<Waterdet />} />
        </Route>
        <Route path="nystai-product" element={<AdminHub />} />
      </Routes>
    </HashRouter>

  );
}

export default App;