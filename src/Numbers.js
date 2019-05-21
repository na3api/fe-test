import React from 'react';

class Numbers  extends React.Component {
    constructor(props){
        super(props);
        
        this.numbers = {
            0: 'zero',
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
            31: 'thirt',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
        };

        this.decades = [
            'hundred',
            'thousand',
            'million',
        ];

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
                string_number: this.convert()
            });
        });
    };

    convert = () => {
        let number = parseInt(this.state.number);

        if(this.numbers[number] !== undefined){
            return this.numbers[number];
        }

        if(this.numbers[number] !== undefined){
            console.log(this.numbers[number]);
        }

        function decades(number){
            if(this.numbers[number] !== undefined){
                console.log(this.numbers[number]);
            }

            let second = number % 10;
            let decades = Math.floor(number / 10) * 10;

            return this.numbers[decades] + (second !== 0 ? ' ' + this.numbers[second] : '' );
        }

        var string = '';
        var sub = 10;
        var end, old_end = 0;
        while(sub < number){
            if(end){
                old_end = end;
            }


            sub *= 10;

            end = number % sub;
            let dex = Math.floor(end / (sub / 10));
            let decades = Math.floor(number / sub);

            console.log(dex + ' -> ' + sub/10 + ' -> ' + old_end + ' -> ' + end);
            //console.log(decades(end));
        }
    };

}

export default Numbers;
