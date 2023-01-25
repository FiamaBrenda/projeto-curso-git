const FieldInput = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <input type={props.inputType}/>
        </div>
    )

}

export default FieldInput;