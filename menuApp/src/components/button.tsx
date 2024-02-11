import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode;
}

type ButtonTextProps = {
    children: ReactNode;
}

type ButtonIconProps = {
    children: ReactNode;
}

// o children e outro componente que pode ser inserido dentro do TouchableOpacity
function Button( {children, ...rest}: ButtonProps ) {
    return (
        <TouchableOpacity {...rest} className="bg-lime-400 rounded-md items-center justify-center flex-row h-10" activeOpacity={0.7} >
            {children}
        </TouchableOpacity>
    )
}

// mx -> margin na horizontal
function ButtonText( {children}: ButtonTextProps ) {
    return(
        <Text className="text-black font-heading text-base mx-2" >
            {children}
        </Text>
    )
}

function ButtonIcon( {children}: ButtonIconProps ) {
    return children
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button }