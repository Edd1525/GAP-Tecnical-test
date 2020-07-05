import { selector } from '../utils/selector-factory';

export class Util {
    t: any;

    constructor(t: any) {
        this.t = t;
    }

    selectDates(date) {
        const monthsNames = {
            '01': 'January',
            '02': 'February',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'August',
            '09': 'September',
            '10': 'October',
            '11': 'November',
            '12': 'December'
        }

        const dataArray = date.split(/[-]/);

        const day = dataArray[0]
        const month = dataArray[1]
        const year = dataArray[2]

        const nameMonth = monthsNames[month]

        return date = {
            day,
            nameMonth,
            year
        }
    }

    async getUserRow(user: string) {

        const table = selector('#content > table > tbody');
        const rowCount = await table.find('tr').count;
        const columnCount = await table.find('tr').nth(2).find('td').count;

        for (let i = 2; i < rowCount; i++) {
            for (let j = 1; j < columnCount; j++) {

                let tdText = selector(`#content > table > tbody > tr:nth-child(${i}) > td:nth-child(${j})`);

                if (user === await tdText.innerText) {
                    return i
                }
            }
        }
        return false
    }

    // deleteUser(row) {

    //     return selector(`#content > table > tbody > tr:nth-child(${row}) > td:nth-child(9) > a`)
    // }

}
