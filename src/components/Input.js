
function Input(props) {
    return (
        <>
            <label htmlFor={props.forLabel} className="block text-sm font-medium text-gray-700" >{props.labelText}</label>
            <input onChange={props.functionCall} id={props.forLabel} className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" type={props.inputType} name={props.inputName} placeholder={props.inputPlaceholder} />

        </>
    );
}
export default Input;