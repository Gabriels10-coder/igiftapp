export interface IAuthState {
    token?: string;
    loading: boolean;
}

export interface IAuthLoginRequest {
    email: string;
    password: string;
}

export interface IAuthResponse {
    token: string;
}
