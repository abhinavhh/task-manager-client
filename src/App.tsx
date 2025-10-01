import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
import RootPage from "./Pages/RootPage";
import UserDashboard from "./features/user/pages/UserDashboard";
import CreateTask from "./features/user/pages/CreateTask";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="user-dashboard/create-task" element={<CreateTask />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
