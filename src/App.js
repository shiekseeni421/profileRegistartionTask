import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginFile/LoginPage";
import SignInPage from "./Pages/RegistrationFile/SignInPage";
import RegisterPage from "./Pages/RegistrationFile/RegisterPage";
import ProfilePage from "./Pages/ProfileFile/ProfilePage";
import ViewPage from "./Pages/ProfileFile/ViewPage";
import AdminPage from "./Pages/AdminFiles/adminPage";

import { UserFormProvider } from "./context/UserFormContext";

function App() {
  return (
    <UserFormProvider>
      <div className="mb-4">
        <Routes>
          <Route exact path="/" element={<LoginPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/signin" element={<SignInPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/RegisterPage" element={<RegisterPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<ProfilePage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/viewMorePage" element={<ViewPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/adminPortal" element={<AdminPage />}></Route>
        </Routes>
      </div>
    </UserFormProvider>
  );
}

export default App;
