import Router from 'next/router';
import useMedia from 'use-media';

export const backHome = () => {
    Router.push('/');
}

export const env = (envValue: string | undefined) => {
    return envValue == null ? "" : envValue;
}

export const useMobileScreen = () => {
    return useMedia({maxWidth: '499px'});
}