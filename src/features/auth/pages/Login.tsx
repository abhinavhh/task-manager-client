import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/Components/common/card";
import { Input } from "@/Components/common/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/Components/common/button";
import { useNavigate } from "react-router-dom";
import authService from "../services";
import { toast } from "react-toastify";
import type { LoginPayload } from "../services";
import { useAuthStore } from "@/store/useAuthStore";

const Login = () => {
  const [formData, setFormData] = useState<LoginPayload>({
    username: "",
    password: "",
  });
  const { accessToken, userRole } = useAuthStore();
  useEffect(() => {
    if (accessToken && userRole === "ADMIN") {
      navigate("/admin-dashboard");
    }
  });
  const navigate = useNavigate();
  // const [errors, setErrors] = useState<LoginPayload>()
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await authService.login(formData);
      toast.success("Login Successfull");
      if (response.role === "USER") {
        navigate("/user-dashboard");
      } else if (response.role === "ADMIN") {
        navigate("/admin-dashboard");
      }
    } catch (err: any) {
      toast.error(err.response?.data || err.message || "Login Failed");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center  min-h-screen ">
      <Card className="w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-primary">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2">
          <Button
            onClick={handleSubmit}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                <span>Signing In...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button
              className="text-primary hover:underline font-medium"
              onClick={() => navigate("/register")}
            >
              Create
            </button>
          </p>
        </CardFooter>
      </Card>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" className='border' value={formData.username} name='username' onChange={handleChange}/> 
        </div>
        <div>
          <label>Password</label>
          <input type="password" className='border' value={formData.password} name='password' onChange={handleChange} />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form> */}
    </div>
  );
};

export default Login;
