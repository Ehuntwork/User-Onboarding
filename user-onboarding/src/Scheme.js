import * as Yup from 'yup'

const formSchema = Yup.object().shape(
    {
        name: Yup
        .string().min(6, 'Length must be at least six')
        ,
        password: Yup.required('Password Required')
        ,
        TOS: Yup.oneOf([true], "You must accept Terms and Conditions")
    }
)
export default formSchema