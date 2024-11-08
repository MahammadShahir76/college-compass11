import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';


import Home from './components/Home';
import CandidateInfo from './components/CandidateInfo';
import CompanyInfo from './components/CompanyInfo';
import JobSpecification from './components/JobSpecification';
import AddCompanyCandidate from './components/AddCompanyCandidate';
import FinalCompanySubmision from './components/FinalCompanySubmision';
import DomainSelection from './components/DomainSelection';
import BulkDetails from './components/BulkDetails';
import CandidateReview from './components/CandidateReview';
import ReviewSuccesful from './components/ReviewSuccesful';
import CandidateOverview from './components/CandidateOverview';
import WebDeveloper from './components/Domain/WebDeveloper';
import SoftwareDeveloper from './components/Domain/SoftwareDeveloper';
import BlockchainDeveloper from './components/Domain/BlockchainDeveloper';
import DevopsEnginner from './components/Domain/DevopsEnginner';
import PastDomain from './components/PastDomain';
import PwebDeveloper from './components/PastDomain/PwebDeveloper';
import PblockchainDeveloper from './components/PastDomain/PblockchainDeveloper';
import PdevopsEngineer from './components/PastDomain/PdevopsEngineer';
import PsoftwareDeveloper from './components/PastDomain/PsoftwareDeveloper';
import CandidateDetails from './components/CandidateDetails';
import ExcelReader from './components/ExcelReader';
import ExcelNext from './components/ExcelNext';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
    {/**the below are routes for Next-Gen-Hire */}
    <Route path='/' element={<Home/>}></Route>
    <Route path='/companyInfo' element={<CompanyInfo/>}></Route>
    <Route path='/JobSpecification' element={<JobSpecification/>}></Route>
    <Route path='/AddCompanyCandidate' element={<AddCompanyCandidate/>}></Route>
    <Route path='/FinalCompanySubmission' element={<FinalCompanySubmision/>}></Route>
    <Route path='/DomainSelection' element={<DomainSelection/>}></Route>
    <Route path='/BulkDetails' element={<BulkDetails/>}></Route>

    {/**not implimented yet */}
    <Route path='/CandidateReview' element={<CandidateReview/>}></Route>
    <Route path='/ReviewSuccesful' element={<ReviewSuccesful/>}></Route>

    <Route path='/CandidateOverview' element={<CandidateOverview/>}></Route>
    <Route path='/CandiadteInfo' element={<CandidateInfo/>}></Route>


    <Route path='/WebDeveloper' element={<WebDeveloper/>}></Route>
    <Route path='/SoftwareDeveloper' element={<SoftwareDeveloper/>}></Route>
    <Route path='/BlockchainDeveloper' element={<BlockchainDeveloper/>}></Route>
    <Route path='/DevopsEngineer' element={<DevopsEnginner/>}></Route>


    <Route path='/PastDomain' element={<PastDomain/>}></Route>
    <Route path='/PwebDeveloper' element={<PwebDeveloper/>}></Route>
    <Route path='/PblockchainDeveloper' element={<PblockchainDeveloper/>}></Route>
    <Route path='/PdevopsEngineer' element={<PdevopsEngineer/>}></Route>
    <Route path='/PsoftwareDeveloper' element={<PsoftwareDeveloper/>}></Route>


    <Route path='/candidateDetails' element={<CandidateDetails/>}></Route>
    


    <Route path='/excel' element={<ExcelReader/>}></Route>
    <Route path='/ExcelNext' element={<ExcelNext/>}></Route>



      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </div>
    
  );
}

export default App;
