const InputGroup = ({type,placeholder,label}) => {
    return ( 
        <div className="input__group">
             <div className="input__label">
                    <label htmlFor="email">{label}</label>
                      </div>
                      <input type={type} name="email" id="email" placeholder={placeholder}/>
                    </div>         
     );
}
 
export default InputGroup;