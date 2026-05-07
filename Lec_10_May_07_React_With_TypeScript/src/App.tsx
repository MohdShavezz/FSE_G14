import UserForm from "./components/UserForm"
import UserList from "./components/UserList"
import Wrapper from "./components/Wrapper"

const App = () => {
  return (
    <div>
      My App
      <Wrapper>

        <UserForm />
      </Wrapper>
      <UserList/>
    </div>
  )
}

export default App
