import React, { useState, type FormEvent } from 'react'

type FORM_TYPE = {
    name: string,
    email: string
}

const UserForm: React.FC = () => {
    // const [name,setName]=useState<string>('')
    // const [email,setEmail]=useState<string>('')

    // const [formdata,setFormdata]=useState<FORM_TYPE>({name:'',email:''})


    // function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    //     const {name,value}=e.target
    //     setFormdata(data=>({
    //         ...data,
    //         [name]:value
    //     }))

    // }


    // function handleSubmit(e: FormEvent<HTMLFormElement>) {
    //     e.preventDefault()
    //     const { name, email } = formdata
    //     // validation
    //     if (name === '' || email === '') {
    //         alert('fields are required.')
    //     }
    //     setFormdata({ name: '', email: '' })
    //     console.log(`NAME: ${name}, EMAIL: ${email}`)
    // }
    
    function handleSubmitWithFormData(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        console.log(formData.get("name"));
        const data = Object.fromEntries(formData.entries());
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmitWithFormData}>
                <input type="text" placeholder='enter name' name='name'
                // value={formdata.name}
                // onChange={(e)=>setName(e.target.value)} 
                // onChange={handleChange}
                />
                <input type="text" placeholder='enter email' name='email'
                // value={formdata.email}
                // onChange={handleChange}
                // onChange={(e)=>setEmail(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
