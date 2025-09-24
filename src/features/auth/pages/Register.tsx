import Input from "../../../Components/common/Input"

const Register = () => {
  return (
    <div className="">

        <form action="">
            <label htmlFor="">username</label>
            <Input
                type="text"
                name="username" 
                value="username" 
                placeholder="Enter username" 
                id="username" 
            />
        </form>

    </div>
  )
}

export default Register