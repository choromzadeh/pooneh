import React, { Component } from 'react';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import '../CSS/search.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'font-awesome/css/font-awesome.css';
import SelectArea from './dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSearch } from '@fortawesome/free-solid-svg-icons'



class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                
            <div className="container border p-0 mx-auto ">
                <form className="p-0">
                <div className="row p-0 d-flex justify-content-center">
                    <div class="col-lg-1 col-11 p-0">
                        <button type="submit" className='btn-block btn-default btn-lg rounded-left shadow ' id='submitButton'>
                            <i className="fa fa-search "></i>
                           
                        </button>  
                    </div>
                    
                
                    <div className="rtl col-11 col-lg-8 p-0 " id="inputBoxContainer">
                        
                              
                        <fieldset className="border rounded shadow mb-1 ">
                                        <legend  className="w-auto small">منطقه خود را وارد کنید</legend>
                                       
                                        <SelectArea></SelectArea>
                                    
                                                                        
                                    </fieldset>
                         </div>       
                        
                    
                    
                         
                    <div className="col-md-2 col-11 pt-2 ml-1 text-center">
                        <SelectArea></SelectArea>
                    </div>
                    
                </div>
                </form> 
            </div>
                        
                
               
            
         );
    }
}

 

 
export default SearchContainer;