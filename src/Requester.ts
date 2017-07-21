import * as axios from 'axios'
import * as qs from 'querystring'
import { Absen } from './Absen'

const httpClient = axios.default.create({
    baseURL: 'https://www.viovera.net/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
        'Referer': 'https://www.viovera.net/geoloc/1010/1010/vioveradb',
        'Origin': 'https://www.vivovera.net'
    }
})

class Requester {

    execute(absen: Absen) {
        console.log('Requesting ...')
        httpClient.post('geoloc/send_kehadiran', qs.stringify({
            'geoloc_status': true,
            'geoloc_response': 'failed',
            'currdb': 'vivoveradb',
            'proc_val': 'mobile_checkin',
            'nik': absen.nik,
            'comp_id': absen.compid,
            'addr': absen.address
        })).then((response: any) => {
            console.log(response)
        })
    }
}

export { Requester }