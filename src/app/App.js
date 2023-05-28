import "./style/App.css"
import Choice from "./pages/choice/Choice"
import Registr from "./pages/registr/Registr"
import Setting from "./pages/setting/Setting"
import { Route, Routes } from "react-router-dom"
import Main from "./pages/main/Main"
import Login from "./pages/login/Login"
import CreatePlant from "./pages/createPlant/CreatePlant"

function App() {
  return (
    <>
      <Routes>
        <Route path="choice" element={<Choice />} />
        <Route path="registr" element={<Registr />} />
        <Route path="setting" element={<Setting />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Main />} />
        <Route path="createPlant" element={<CreatePlant />} />
      </Routes>
    </>
  )
}

export default App
