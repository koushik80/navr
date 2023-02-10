import Dropdown from '../components/Dropdown'

const DropdownPage = () => {
  const options = [
        {label:'Red', value:'red'},
        {label:'Green', value:'green'},
        {label:'Blue', value:'blue'},
        {label:'Teal', value:'teal'}
    ];

    return <Dropdown options={options} />;
}

export default DropdownPage;