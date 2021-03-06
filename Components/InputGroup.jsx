const InputGroup = ({type,placeholder}) => {
    return ( 
        <div className="input__group">
             <div className="input__label">
                    <label htmlFor="email">What's your email</label>
                      </div>
                      <input type={type} name="email" id="email" placeholder={placeholder}/>
                    </div>         
     );
}
 
export default InputGroup;