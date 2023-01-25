import Footer from "../../components/footer";
import Form from "../../components/Form";
import Header from "../../components/Header";

const Login =() =>{
    const fields = [
        {
            label:'Nome',
            inputType: 'text'
        },
        {
            label:'Senha',
            inputType: 'Passowordt',
        }
    ]

    return (

        <div>
            <Header logo="JJ"></Header>
            <Form fields={fields}/>
            <Footer>|Texto Quaquer</Footer>
        </div>
)
}

export default Login;