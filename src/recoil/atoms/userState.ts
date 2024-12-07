import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        id: null,
        username: '',
        birthDay: '',
        gender: '',
        nickName: '',
        disability: '',
    },
});
