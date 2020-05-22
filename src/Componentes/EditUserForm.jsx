import React from 'react';
import {useForm} from 'react-hook-form';

const EditUserForm = (props) =>{

    //console.log(props.currentUSer);

    /* El componente useForm recibe como parametros el registro, los errores, y la funcion */
    const{register,errors,handleSubmit,setValue} = useForm({
        defaultValues: props.currentUSer
    });

    setValue('name', props.currentUSer.name);
    setValue('username', props.currentUSer.username);

    const onSubmit=(data,e) =>{
        console.log(data);
        data.id = props.currentUSer.id
        props.updateUser(props.currentUSer.id,data)
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
            <button>Edit user</button>
            </tr>
        </form>
    );
}

export default EditUserForm;