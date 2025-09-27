import { Button } from "@/Components/common/button";
import authService from "@/features/auth/services";
import { Slide, toast } from "react-toastify";

const Logout = () => {
  const auth = authService;
  const handleLogOut = () => {
    auth.logOut();
    toast.success("You have been logged out", {
      position: "top-center",
      transition: Slide,
    });

  };
  return (
    <Button
      onClick={handleLogOut}
      variant="outline"
      className="hover:bg-red-700 bg-red-600 text-white"
    >
      Log Out
    </Button>
  );
};

export default Logout;
