import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

export const GenerateError = (error) =>{
    toast.error(error,{
        position: 'top-center',
      theme: 'colored',
      autoClose: 1000
    })
}

export  const GenerateSuccess = (success) => {
    toast.success(success, {
      position: 'top-center',
      theme: 'colored',
      autoClose: 1000
    });
  };