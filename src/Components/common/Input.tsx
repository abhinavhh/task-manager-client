interface Props {
  type: string;
  name: string;
  value: string;
  id: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ type, name, value, id, placeholder, onChange }: Props) => {
  return(
    <div className="flex justify-center items-center">
        <input 
            type={type}  
            name={name} 
            value={value} 
            placeholder={placeholder} 
            onChange={onChange}
            id={id}
            className="border  rounded-lg p-2 focus:outline-gray-300 border-gray-300 md:w-1/2"
        />
    </div>
  )
};

export default Input;
