import Toast from 'react-native-toast-message';

type toastype = 'error' | 'success' | 'info';

export const ShowToast = (type: toastype, text1: string, text2: string) => {
    Toast.show({
        type: type,
        text1: text1,
        text2: text2,
    });
};
