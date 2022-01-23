import Router from 'next/router';

export const backHome = () => {
    Router.push('/');
}

export const env = (envValue: string | undefined) => {
    return envValue == null ? "" : envValue;
}