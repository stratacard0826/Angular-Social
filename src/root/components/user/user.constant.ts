import { environment } from '../../../environments/environment';

let backendUrl = environment.production ?
'https://ustadium-api.herokuapp.com' :
'https://ustadium-api-dev.herokuapp.com';

export class UserAPI {
	// GET user ID
	public static getByID = backendUrl.concat('/api/users/');
};
