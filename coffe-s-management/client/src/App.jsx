import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";

import Inicio from "./pages/Inicio";
import Crud from "./pages/Crud";
import Documents from "./pages/Documentos";
import Usuario from "./pages/Usuario";
import Estadistics from "./pages/Estadisticas";
import ProtectedRoute from "./ProtectedRoute";

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<h1>home page</h1>} />
        <Route path="/login" element= {<LoginPage/>} />
        <Route path="/register" element= {<RegisterPage/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/tasks" element= {<h1>tasks page</h1>} />
          <Route path="/add-task" element= {<h1>new task</h1>} />
          <Route path="/tasks/:id" element= {<h1>update page</h1>} />
          <Route path="/profile" element= {<h1>profile</h1>} />
          <Route path="/inicio" element= {<Inicio/>} />
          <Route path="/inventario" element= {<Crud/>} />
          <Route path="/documentos" element= {<Documents/>} />
          <Route path="/usuario" element= {<Usuario/>} />
          <Route path="/estadistics" element= {<Estadistics/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App