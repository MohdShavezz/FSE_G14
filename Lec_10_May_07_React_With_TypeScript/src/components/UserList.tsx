import useUserdata from "../hooks/useUserdata"

const UserList:React.FC = () => {
    const {data,loading,error}=useUserdata('https://jsonplaceholder.typicode.com/users')
    console.log(data,loading,error)
  return (
    <div>
        <h2>USER LIST</h2>

        {
            data.slice(0,5).map(user=>(
               <p key={user.id}>
                {user.name}
               </p>
            ))
        }   
    </div>
  )
}

export default UserList
