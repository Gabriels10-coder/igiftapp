import React from 'react';
import {CustomInput} from './styles';
import {IInputProps} from './types';

const Input: React.FC<IInputProps> = ({value, error, label, onChangeText}) => {
    return (
        <CustomInput
            activeOutlineColor="#1e88e5"
            label={label}
            mode="outlined"
            value={value}
            error={error}
            outlineColor="#1e88e5"
            onChangeText={onChangeText}
        />
    );
};

export default Input;
