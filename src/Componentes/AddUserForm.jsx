import React from 'react';
import {useForm} from 'react-hook-form';

const AddUserForm= (props) =>{

    /* El componente useForm recibe como parametros el registro, los errores, y la funcion */
    const{register,errors,handleSubmit} = useForm();

    const onSubmit=(data,e) =>{
        console.log(data);
        props.addUser(data);
        e.target.reset();
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <tr>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required:{value:true,message:'Campo Requerido'}
                })
            }/>
            </tr>
            <div className="text-danger text-small d-block mb-2">{errors?.name?.message}</div>
            <tr>
            <label>UserName</label>
            <input type="text" name="username" ref={
                register({
                    required:{value:true,message:'Campo Requerido'}
                })
            }/>
            </tr>
            <div className="text-danger text-small d-block mb-2">{errors?.username?.message}</div>
            <tr colSpan={2}>
            <button>Add new user</button>
            </tr>
        </form>
    );
}

export default AddUserForm;