import React from 'react';
import Select,{components} from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../CSS/dropdown.css'
import axios from 'axios';

const options = [
  { value: 'th', label: 'تهران' },
  { value: 'sh', label: 'شیراز' },
  { value: 'es', label: 'اصفهان' }
];

const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon icon={faChevronDown} color="black" />
      </components.DropdownIndicator>
    );
  };

  

  const customStyles = {
      option: (provided,state) => ({
        ...provided,
        color: state.isSelected ? 'blue' : 'red',
        textAlign:'center',
        fontSize:18,
        fontFamily:'yekan'
        
      }),

      control:(provided,state) => ({
        ...provided,
        height:65,
        
        marginBottom:10,
        boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
        textAlign:'center',
        paddingLeft:8,
        fontSize:30,
        fontFamily:'yekan'

      })
  }
class SelectArea extends React.Component {
  state = {
    selectedOption: options[1],
    cities:[]
    
  };
  componentDidMount(){
    axios.get(`http://localhost:3000/city`).then(res => {
      const cities = res.data;
      this.setState({ cities  }); 
    } )
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.state.cities}
        isDisabled={false}
        isRtl={false}
        components={{DropdownIndicator, IndicatorSeparator: () => null }}
        styles={customStyles}
     
      />
    );
  }
}

export default SelectArea;