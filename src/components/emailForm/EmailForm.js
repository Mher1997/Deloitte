import React, { Component, Fragment, memo } from 'react';
import getAppFields from '../../core/appAPI/GetAppFieldsAPI';
import TextInput from '../textInput/TextInput';
import './EmailForm.scss';

class EmailForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            fields: [],
            loading: false,
            success: false
        }
    }

    handleChangeValue = (e, key) => this.setState({[key]: e.target.value});

    handleCheckboxChange = (key) => this.setState(prevState => {
        return {[key]: !prevState[key]}
    })

    handleSubmitForm = e => {
        e.preventDefault();
        this.setState(
            {loading: true},
            () => setTimeout(
                () => this.setState({
                    success: true,
                    loading: false
                }),
                2000
            )
        );
    }

    async componentDidMount(){
        this.setState({loading: true});
        const res = await getAppFields();
        const fields = res.appFields.filter(elem => elem.required);
        this.setState({
            fields,
            loading: false
        })
    }

    render(){
        const {
            state: {
                fields,
                loading,
                success
            },
            handleSubmitForm,
            handleChangeValue,
            handleCheckboxChange
        } = this;

        const radioField = fields.find(field => field.type === 'radio');

        let validForm = true;

        for(let field of fields){
            if(this.state[field.name] === undefined || this.state[field.name] === ''){
                validForm = false
                break
            }
            if((field.type === 'radio' || field.type === 'checkbox') && (this.state[field.name] === false || this.state[field.name] === 'No')){
                validForm = false
                break
            }
        }

        return (
            <div className="email-form">
                <div className="email-form-body">
                    {loading ? <h3>Loading...</h3> 
                    : success ? (
                        <div>
                            <h3 className="txt-success">Form has been successfully sent</h3>
                        </div>
                    )
                    : <div className="email-form-body-form">
                        <form onSubmit={handleSubmitForm}>
                            <div className="email-form-body-form-text_inputs">
                                {
                                    fields.map((field, index) => (
                                        (field.type === 'text' || field.type === 'email') && 
                                        <TextInput
                                            key={index}
                                            value={this.state[field.name] || ''} 
                                            onChange={(e) => handleChangeValue(e, field.name)} 
                                            placeholder={field.title}
                                            required={field.required}
                                        />
                                    ))
                                }
                            </div>
                            <div className="email-form-body-form-radio">
                                {radioField && (
                                    <Fragment>
                                        <p>{radioField.title}</p>
                                            {radioField.options.map((option, index) => (
                                                <Fragment key={index}>
                                                    <input 
                                                        type="radio" 
                                                        name={radioField.name} 
                                                        value={option.value} 
                                                        checked={this.state[radioField.name] === option.value}
                                                        onChange={(e) => handleChangeValue(e, radioField.name)}
                                                        required={option.required}
                                                    />
                                                        {option.value}
                                                    <br/>
                                                </Fragment>
                                            )
                                        )}
                                    </Fragment>
                                )}
                            </div>
                            <div className="email-form-body-form-checkbox">
                                {
                                    fields.map((field, index) => field.type === 'checkbox' && (
                                        <Fragment key={index}>
                                            <input 
                                                type="checkbox" 
                                                checked={!!this.state[field.name]} 
                                                onChange={()=>handleCheckboxChange(field.name)}
                                                required={field.required}
                                            /> 
                                            <span>{field.title} <span className="txt-red"> *</span></span>
                                            <br/>
                                            <br/>
                                        </Fragment>
                                    ))
                                }
                            </div>
                            <div className="email-form-body-form-events">
                                <div className="email-form-body-form-events-reset">
                                    <p>RESET</p>
                                </div>
                                <div className="email-form-body-form-events-submit">
                                    <button 
                                        className="btn-def blue" 
                                        type="submit" 
                                        onClick={handleSubmitForm}
                                        disabled={!validForm}
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>}
                </div>
            </div>
        )
    }

}

export default memo(EmailForm);
