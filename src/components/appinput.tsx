/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TextInput} from 'react-native';

function AppInput({updateInputval, name, value, secure}) {
    const [focused, setFocused] = useState<boolean>(false);

    const changeValue = (e:any) => {
        updateInputval(e, name);
    };
    return (
        <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(true)}
            onChangeText={(e) => changeValue(e)}
            value={value}
            placeholderTextColor={'#626262'}
            placeholder={name.toUpperCase()}
            secureTextEntry={secure ? secure : false}
            style={[
                {
                    fontSize: 14,
                    padding: 20,
                    backgroundColor: "#f1f4ff",
                    borderRadius: 10,
                    marginVertical: 10,
                    borderColor: "#c2c2c2",
                    borderWidth: 3
                },
                focused && {
                    borderColor: "#f6880e",
                    borderWidth: 3,
                    shadowColor: "#fdcc2d",
                    shadowOffset: { width: 4, height: 10 },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                }
            ]} />
    );
}

export default AppInput;

