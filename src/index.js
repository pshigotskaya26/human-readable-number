module.exports = function toReadable (number) {

    let numberToString = String(number);

    let arrayOfNumbers = [];

    arrayOfNumbers = numberToString.split('');
    
    let arrayOf09 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrayOf1019 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrayOf2090 = ['twenty',  'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arrayOf100 = ['hundred'];

    let arrayOfWords = '';

    if (arrayOfNumbers.length === 1) {
        //return numbers: 0, 1, 2, ..., 9
        return arrayOfWords += arrayOf09[arrayOfNumbers[0]];
    }

    else if (arrayOfNumbers.length === 2) {

        if (arrayOfNumbers[1] === '0' && arrayOfNumbers[0] === '1') {
            //return number: 10
            return arrayOfWords += arrayOf1019[0];
        }

        else if (arrayOfNumbers[1] === '0' && arrayOfNumbers[0] !== '1') {
            //return numbers: 20, 30, 40, ..., 90
            return arrayOfWords += arrayOf2090[arrayOfNumbers[0] - 2];
        }

        else if (arrayOfNumbers[1] !== '0' && arrayOfNumbers[0] === '1') {
            //return numbers: 11, 12, 13, ..., 19 
            return arrayOfWords += arrayOf1019[arrayOfNumbers[1]];
        }

        else if (arrayOfNumbers[1] !== '0' && arrayOfNumbers[0] !== '1') {
            /*return numbers: 21, 22, ..., 31, 32, ..., 41, 42, ..., 91, 92, 99*/
            return arrayOfWords += arrayOf2090[arrayOfNumbers[0] - 2] + ' ' + arrayOf09[arrayOfNumbers[1]];
        }  
    }

    else if (arrayOfNumbers.length === 3) {
        if (arrayOfNumbers[1] === '0' && arrayOfNumbers[2] === '0') {
            //return numbers: 100, 200, 300, ..., 900
            return arrayOfWords += arrayOf09[arrayOfNumbers[0]] + ' ' + arrayOf100[0];
        }
        
        else if (arrayOfNumbers[1] === '0' && arrayOfNumbers[2] !== '0') {
            //return numbers: 101, 102, ..., 109, 201, ..., 202, 901, ..., 909
            return arrayOfWords += arrayOf09[arrayOfNumbers[0]] + ' ' + arrayOf100[0] + ' ' + arrayOf09[arrayOfNumbers[2]];
        }

        else if (arrayOfNumbers[2] === '0' && arrayOfNumbers[1] === '1') {
            //return number: 110, 210, 310, ..., 910
            return arrayOfWords += arrayOf09[arrayOfNumbers[0]] + ' ' + arrayOf100[0] + ' ' + arrayOf1019[0];
        }

        else if (arrayOfNumbers[2] === '0' && arrayOfNumbers[1] !== '1') {
            //return number: 120, 130, 140, 150, ..., 190, ..., 920, 930, ..., 990 
            return arrayOfWords += arrayOf09[arrayOfNumbers[0]] + ' ' + arrayOf100[0] + ' ' + arrayOf2090[arrayOfNumbers[1] - 2];
        }

        else if (arrayOfNumbers[2] !== '0' && arrayOfNumbers[1] === '1') {
            //return number: 111, 112, 113, ..., 119,..., 911, 912, 913, ..., 919
            return arrayOfWords += arrayOf09[arrayOfNumbers[0]] + ' ' + arrayOf100[0] + ' ' + arrayOf1019[arrayOfNumbers[2]];
        }

        else if (arrayOfNumbers[2] !== '0' && arrayOfNumbers[1] !== '1') {
            //return number: 121, 122, 123, ..., 129,..., 921, 922, 923, ..., 999
            return arrayOfWords += arrayOf09[arrayOfNumbers[0]] + ' ' + arrayOf100[0] + ' ' + arrayOf2090[arrayOfNumbers[1] - 2] + ' ' + arrayOf09[arrayOfNumbers[2]];
        }
    }
}
