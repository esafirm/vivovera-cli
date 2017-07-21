import { Absen } from './Absen'

class Validator {

    validate(absen: Absen) {
        let notNull = absen.nik == undefined
            && absen.compid == undefined
            && absen.address == undefined

        if (!notNull) {
            throw new Error('Data Empty')
        }

        return true;
    }

}

export { Validator }