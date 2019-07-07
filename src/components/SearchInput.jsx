import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <container>
                <form className="rtl">
                <fieldset className="border p-2 rounded my-auto">
                    <legend  className="w-auto">منطقه خود را وارد کنید</legend>
                    <input className="form-control input-lg mb-3" placeholder="مثلا نیاوران"></input>
                </fieldset>
                </form>
            </container>
  
          
        );
    }
}
 
export default SearchInput;