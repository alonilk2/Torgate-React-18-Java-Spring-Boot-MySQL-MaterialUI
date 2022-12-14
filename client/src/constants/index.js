export const API_BASE_URL = 'https://torgate.herokuapp.com';
export const API_UPLOADS_URL = 'https://torgate.herokuapp.com/uploads/';
export const FRONT_BASE_URL = 'https://torgate.herokuapp.com/';


export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'https://torgate.herokuapp.com/authorization/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
