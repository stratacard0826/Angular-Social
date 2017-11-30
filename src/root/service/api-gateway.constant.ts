import { environment } from '../../environments/environment';

let backendUrl = environment.production ?
'https://ustadium-api.herokuapp.com/api' :
'https://ustadium-api-dev.herokuapp.com/api';

export class ApiGateway {
    public static users = backendUrl.concat('/users');	
    public static messages = backendUrl.concat('/messages');	
    public static feeds = backendUrl.concat('/feeds');	
    public static trending = backendUrl.concat('/feeds/trending');	    
    public static posts = backendUrl.concat('/posts');	
    public static search = backendUrl.concat('/search');	    
}
