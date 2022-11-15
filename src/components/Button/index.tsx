import React, { MouseEventHandler } from 'react';
import MaterialButton, { ButtonProps as MaterialButtonProps } from '@mui/material/Button';
import GlobalThemeProvider from '../../assests/AppTheme';

export interface ButtonProps extends MaterialButtonProps {
    label: string;
    variant?: "text" | "outlined" | "contained" | undefined,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disableRipple?: boolean
}

export const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    const { label, ...rest } = props;
    return <GlobalThemeProvider><MaterialButton {...rest}>{label}</MaterialButton></GlobalThemeProvider>;
};
