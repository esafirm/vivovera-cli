import * as axios from 'axios'
import * as qs from 'querystring'
import { Absen } from './Absen'

const httpClient = axios.default.create({
    baseURL: 'https://www.viovera.net/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
        'Origin': 'https://www.vivovera.net'
    }
})

class Requester {

    execute(absen: Absen) {
        console.log('Requesting ...')

        let geoLocStatus = process.env.NODE_ENV == 'production'
            ? 'success'
            : 'failed'

        let param = qs.stringify({
            'geoloc_status': true,
            'geoloc_response': geoLocStatus,
            'currdb': 'vivoveradb',
            'proc_val': 'mobile_checkin',
            'nik': absen.nik,
            'comp_id': absen.compid,
            'addr': absen.address
        })

        let config: axios.AxiosRequestConfig = {
            headers: {
                'Referer': `https://www.viovera.net/geoloc/${absen.nik}/${absen.compid}/vioveradb`,
            }
        }

        httpClient.post('geoloc/send_kehadiran', param, config).then((response: any) => {
            console.log(response.data)
        })
    }
}

export { Requester }
