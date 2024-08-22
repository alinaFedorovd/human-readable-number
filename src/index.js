module.exports = function toReadable(number) {

    let num_1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let num_10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let num_100 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function find_n(n) {
        if (n < 10) {
            return num_1[n]
        }

        if (n < 20) {
            return num_10[n-10]
        }

        if (n < 100) {
            let arr_10 = parseInt(n/10, 10);
            let arr_1 = n%10;
            return num_100[arr_10-2] + (arr_1 ? ' ' + num_1[arr_1] : '');
        }
        let sotni = parseInt(n/100, 10);
        let ost_desitki = n%100;
        // console.log(ost_desitki)
        return num_1[sotni] + ' hundred' + (ost_desitki? ' ' + find_n(ost_desitki) : '');
    }

    return find_n(number);

}
