import { toast } from 'react-hot-toast';

export async function passwordReset(values)
{
    const errors = {};
    if(!values.password)
    {
        errors.password = toast.error('Password Required... !');
    }
    else if(!values.confirmPassword)
    {
        errors.confirmPassword = toast.error('Re-Enter Password... !');
    }
    else if(values.password != values.confirmPassword)
    {
        errors.notMatched = toast.error(`Password doesn't not match... !`)
    }
    else
    {
        errors.success = toast.success('OTP Sent Succesfully... !')
    }

    return errors;
}

export async function loginValidate(values) {
  const errors = {}; 
  if(!values.email)
  {
    errors.email = toast.error('Email Required... !');
  }
  else if (!values.password) {
    errors.password = toast.error('Password Required... !');
  } else if (values.password.length < 4) {
    errors.password = toast.error('Password is too weak... !');
  }
  else
  {
    errors.success = toast.success('Login Success... !');
  }

  return errors; 
}


export async function registerValidate(values) {
    const errors = {}; 
    if(!values.username)
    {
        errors.username = toast.error('Username Required... !');
    }
    else if(!values.email)
    {
      errors.email = toast.error('Email Required... !');
    }
    else if (!values.password) {
      errors.password = toast.error('Password Required... !');
    } else if (values.password.length < 4) {
      errors.password = toast.error('Password is too weak... !');
    }
    else
    {
      errors.success = toast.success('Registration Success... !');
    }
  
    return errors; 
}
  
  
  
