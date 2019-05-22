import React from 'react';

class Numbers  extends React.Component {
    constructor(props){
        super(props);
        
        this.numbers = {
            0: '',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
        };

        this.decades = {
            100 : 'hundred',
            1000 : 'thousand',
            1000000 : 'million',
            1000000000 : 'billion',
            1000000000000 : 'trillion',
            1000000000000000 : 'quadrillion',
        };

        this.state = {
            number: '',
            string_number: ''
        }
    }
    render(){
        return (
            <form>
                <div className="form-group">
                    <input type="text"
                           onChange={this.onChangeHandler}
                           name="number"
                           value={this.state.number}
                           className="form-control" placeholder="Enter number"/>
                </div>
                <div>{this.state.string_number}</div>
            </form>
        );
    };

    onChangeHandler = (event) => {
        this.setState({
            number: event.target.value
        }, () => {
            this.setState({
                string_number: this.convert(this.state.number)
            });
        });
    };

    convert = (number) => {
        const thousand = 1000;
        var result = '';
        var remainder_of_division ;
        var step = 0;
        var hundreds = 0;

        while(number >= 1){
            remainder_of_division = number % thousand;

            number = Math.floor(number / thousand);

            hundreds = this.getHundreds(remainder_of_division);

            result = hundreds + ' ' + (this.decades[Math.pow(thousand, step)] !== undefined && hundreds ? this.decades[Math.pow(thousand, step)] : '') + (result.replace(/\s/g, '') ? ', ' + result : '');

            step++;
        }

        return result;
    };

    getDecades = (number) => {
        if(this.numbers[number] !== undefined){
            return this.numbers[number];
        }

        let second = number % 10;
        let decades = Math.floor(number / 10) * 10;

        return this.numbers[decades] + (second !== 0 ? ' ' + this.numbers[second] : '' );
    };

    getHundreds = (number) => {
        if(this.numbers[number] !== undefined){
            return this.numbers[number];
        }

        if(number < 100){
            return this.getDecades (number);
        }else{
            let hundreds = Math.floor(number / 100);
            return this.numbers[hundreds] + ' ' + this.decades[100] + ' ' + this.getDecades (number % 100);
        }
    }
}

export default Numbers;
