import * as cli from "inquirer"
import { Requester } from './Requester'
import { Validator } from './Validator'
import { Absen } from './Absen'

const questions: cli.Question[] = [
    {
        type: 'input',
        name: 'nik',
        message: 'Input your NIK number'
    },
    {
        type: 'input',
        name: 'compid',
        message: 'Input your Company ID'
    },
    {
        type: 'input',
        name: 'address',
        message: 'Input your address'
    }
]

const validator = new Validator()
const requester = new Requester()

cli.prompt(questions)
    .then((absen: Absen) => {
        if (validator.validate(absen)) {
            requester.execute(absen)
        }
    })
    .catch((error) => {
        console.log('Invalid Data Format')
    })

