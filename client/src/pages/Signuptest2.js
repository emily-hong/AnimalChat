const Form = () => {
  const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
}

const submitForm = () => {
  console.log(formValues);
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmitting(true);
};

const validate = (values) => {
  let errors = {};
  
  //정규식 표현
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
  //이메일 값이 없을시
  if (!values.email) {
    errors.email = "Cannot be blank";
    //이메일 정규식 표현이 옳지 않을시
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid email format";
  }
  
  //비밀번호 값이 없을시
  if (!values.password) {
    errors.password = "Cannot be blank";
    //비밀번호의 길이(length)가 4글자 이하일 때
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  }
  
  //에러를 반환해줘 !
  return errors;
};

// 폼태그에 값이 0 이거나, isSubmitting 이 false 상태일 때,
//submitForm을 누르면 [formErrors]가 마운트 되도록!
useEffect(() => {
  if (Object.keys(formErrors).length === 0 && isSubmitting) {
    submitForm();
  }
}, [formErrors]);


return (
  <div className="container">
    <h1>Sign in to continue</h1>
    
    {Object.keys(formErrors).length === 0 && isSubmitting && (
      <span className="success-msg">Signed in successfully</span>
    )}
    
    // 버튼을 누르면 이 폼에 데이터들이 제출되도록 handleSubmit
    <form onSubmit={handleSubmit} noValidate>
      
      //이메일 검사
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
          className={formErrors.email && "input-error"}
        />
        
        //에러시
        {formErrors.email && (
          <span className="error">{formErrors.email}</span>
        )}
      </div>
      
      //비밀번호 검사
      <div className="form-row">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={handleChange}
          className={formErrors.password && "input-error"}
        />
        
        //에러시
        {formErrors.password && (
          <span className="error">{formErrors.password}</span>
        )}
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
);