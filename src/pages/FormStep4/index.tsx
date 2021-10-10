import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions} from '../../contexts/FormContext'
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep4 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(( ) =>{
        if(state.name ===''){
            history.push('/')
        }
        else if(state.email ==='' || state.github===''){
            history.push('/step3')
        }
        else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    },[]);


    const handleNextStep = () => {
        let dadosArray:any = []

        Object.entries(state).map(item => {
            dadosArray.push(item[1]);
          })

        if(dadosArray.includes('')){
            alert("Preencha os dados.")
        }else{
            alert("Dados Cadastrados com Sucesso!");
        }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4</p>
                <h1>{state.name}, por favor valide seus dados.</h1>
                <p>Caso esteja tudo ok, clique em enviar.</p>

                <hr />

                <label>
                    Seu nome completo
                    <label className='Results' >{state.name}</label>
                </label>
                
                <label>
                    Seu nível
                    {state.level === 0  &&   
                    <label className='Results' > 
                    🥳 Comecei a programar há menos de 2 anos
                    </label>
                    }
                    {state.level === 1  &&   
                    <label className='Results' > 
                    😎 Programo há 2 anos ou mais
                    </label>
                    }
                </label>

                <label>
                    Seu email
                    <label className='Results' >{state.email}</label>
                </label>

                <label>
                    Seu Github
                    <label className='Results' >{state.github}</label>
                </label>

                <Link to="/step3" className="backButton">Voltar</Link>    
                <button onClick={handleNextStep}>Enviar</button>

            </C.Container>
        </Theme>

    );
}