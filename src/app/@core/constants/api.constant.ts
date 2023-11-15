import { environment } from "src/environments/environment";

export const API = {
    AUTH: {
        login: `${environment.base_url}/api/login`,
        logout: `${environment.base_url}/api/logout`,
        refreshToken: `${environment.base_url}/api/refresh`,
        getUserProfile: `${environment.base_url}/rest/userprofile`,
        registeredContext: `${environment.base_url}/coreservice/common/token-details`,
        reset_password: `${environment.base_url}/api/change-pwd`,
        fetchUserRoles: (user_name: string) => `${environment.base_url}/api/user-realms/${user_name}`
    }
}
