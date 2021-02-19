import qs from 'qs';
import axios, {Method} from 'axios';

export default class Request {

    async run(url: string, method: Method, params: Record<any, any> = {}) {
        //todo сделать нормальный урл
        const config = {...params, url: ` http://localhost:3002${url}`, method};
        try {
            const response = await axios.request(config);
            return response.data;
        }
        catch(e) {
            throw e;
        }
    }
}
