import { useState } from "react";
import Input from "../../../Components/common/Input"

interface RegisterProps{
    username: string;
    password: string;
    email: string;
    confirmPassword: string;
}
const Register = () => {
    const [formData, setFormData] = useState<RegisterProps>({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
  return (
    <div className="">

        <form action="">
            <label htmlFor="">username</label>
            <Input
                type="text"
                name="username" 
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username" 
                id="username" 
            />
        </form>
    </div>
  )
}

export default Register