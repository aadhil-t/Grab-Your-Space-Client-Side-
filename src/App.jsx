import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import UserRoute from "./Routes/UserRoutes"
import AdminRoute from "./Routes/AdminRoute"
import HubAdminRoute from "./Routes/HubAdminRoute"

 function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoute/>}/>
        <Route path="/admin/*" element={<AdminRoute/>} />
        <Route path="/hub/*" element={<HubAdminRoute/>} />
      </Routes>
    </Router>
  )
}

export default App