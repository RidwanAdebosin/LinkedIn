import './Button.css';

const Button = ({children}) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
};

export default Button;