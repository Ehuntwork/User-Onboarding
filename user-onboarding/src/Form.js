import './Form.css'

function Form(props) {
    const {onSubmitHandler, formData, onChangeHandler} = props
    return (
      <form className="form" onSubmit={onSubmitHandler}>
        <div className='formInputs'>
            <label>
                Name:<input onChange={onChangeHandler} name='name' value={formData.name} type='text'/>
            </label>
            <label >
                Email:<input onChange={onChangeHandler} name='email' value={formData.email} type='email'/>
            </label>
            <label>
                Password:<input onChange={onChangeHandler} name='password' value={formData.password} type='password'/>
            </label>
            <label className='AOT'>
                Terms of service:<input onChange={onChangeHandler} name='TOS'  type='checkbox' checked={formData.TOS}/>
            </label>
        </div>
        <button>Submit</button>
      </form>
    );
  }
  
  export default Form;