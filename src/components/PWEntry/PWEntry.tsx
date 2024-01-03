import React, { FC, SyntheticEvent, useState } from "react";
import { PWEntryProps } from "./PWEntry.types";
import './PWEntry.css';

const PasswordEntry: FC<PWEntryProps> = ({
    password, 
    confirmPassword, 
    onPasswordChange, 
    onConfirmPasswordChange
}) => {
    const [errors, setErrors] = useState<string[]>([]);
    const [isValid, setIsValid] = useState(false);

    const handleValidation = (e: SyntheticEvent) => {
        e.preventDefault();
        setIsValid(false);
        const newErrors: string[] = [];
        if(password !== confirmPassword) {
            newErrors.push("Passwords must match.");
        }
        if(password.length < 6) {
            newErrors.push("Password needs to be at least 6 characters.");
        }
        if(!/[A-Z]/.test(password)) {
            newErrors.push("Password must contain at least 1 capital character.");
        }
        if(!/[a-z]/.test(password)) {
            newErrors.push("Password must contain at least 1 lowercase character.");
        }
        if(!/\d/.test(password)) {
            newErrors.push("Password must have at least 1 number.");
        }
        if(!/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(password)) {
            newErrors.push(`Password must contain at least one special character (!@#$%^&*()_-+={[}]|:;"'<,>.)`);
        }
        if(newErrors.length) {
            setErrors(newErrors);
        } else {
            setErrors([]);
            setIsValid(true);
        }
    }

    const renderErrors = () => {
        if(errors.length) {
            return errors.map((error, index) => (
                <p key={index} className="error">{error}</p>
            ));
        }
    }
    
    return (
        <div className="container">
            <form onSubmit={handleValidation} className="form">
                <input 
                    type="password" 
                    value={password} 
                    onChange={onPasswordChange}
                    className="input"
                />
                <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={onConfirmPasswordChange}
                    className="input"
                />
                <input type="submit" value="Submit" className="input submit"/>
                {renderErrors()}
                {isValid && <p className="success">Success!</p>}
            </form>
        </div>

    )
}

export default PasswordEntry;