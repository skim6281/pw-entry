import { ChangeEventHandler } from "react";

export interface PWEntryProps {
    password: string;
    confirmPassword: string;
    onPasswordChange: ChangeEventHandler<HTMLInputElement>;
    onConfirmPasswordChange: ChangeEventHandler<HTMLInputElement>;
}