type InputProps = {
    label: string;
    id: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
};

function Input({
    label,
    id,
    type,
    value,
    onChange,
}: InputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>

            <input 
                id={id}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                required />
        </div>
    );
}


export default Input;