interface Props {
  type: string;
  name: string;
  value: string;
  id: string;
  placeholder: string;
}
const Input = ({ type, name, value, id, placeholder }: Props) => {
  return(
    <>
        <input 
            type={type}  
            name={name} 
            value={value} 
            placeholder={placeholder} 
            id={id}
        />
    </>
  )
};

export default Input;
