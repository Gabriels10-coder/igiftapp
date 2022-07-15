export interface IAuthState {
    token?: string;
    loading: boolean;
    error: boolean;
}

export interface IAuthLoginRequest {
    email: string;
    password: string;
    device_name: string;
}

export interface IAuthResponse {
    token: string;
}
