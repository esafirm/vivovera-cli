import { Absen } from './Absen'

class Validator {

    validate(absen: Absen) {

        let isNotEmpty = absen && absen.nik && absen.compid && absen.address
        if (!isNotEmpty) {
            throw new Error('Data Empty')
        }

        return true;
    }

}

export { Validator }