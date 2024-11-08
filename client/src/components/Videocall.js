import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import VedioPage from './videocallcomponents/VedioPage';
import HomePage from './videocallcomponents/HomePage';
function App() {
  const router =createBrowserRouter([
  {
    path :"/",
    element: <HomePage/>
  },
  {
    path :"/room/:id",
    element:<VedioPage/>
  }
])
  return (
    <div className="App">
      <RouterProvider router ={router}/>
      
    </div>
  );
}

export default App;
