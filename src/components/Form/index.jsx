import FieldInput from "../FieldInput/index"; 
import "./style.css";

const Form = (props) => {
    return(
        <div>
          <form>
              {props.fields ? props.fields.map((field) => (
                  <FieldInput label={field.label} inputtype={field.inputtype}/>
              )) :''}
              <button type="submit">Entrar</button>
          </form>
          </div>
    )
    }
 export default Form;