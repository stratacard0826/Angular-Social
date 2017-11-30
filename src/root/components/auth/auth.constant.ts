import { environment } from '../../../environments/environment';

let backendUrl = environment.production ?
'https://ustadium-api.herokuapp.com/auth' :
'https://ustadium-api-dev.herokuapp.com/auth';

export class AuthAPI {
	public static signUp = backendUrl.concat('/signup');
	public static verify = backendUrl.concat('/verify');
	public static logIn = backendUrl.concat('/token');
	public static forgotPassword = backendUrl.concat('/forgot-password');
	public static resetPassword = backendUrl.concat('/reset-forgotten-password');
}
