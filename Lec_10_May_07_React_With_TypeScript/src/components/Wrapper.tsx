type WrapperType={
    children:React.ReactNode
}

const Wrapper:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div style={{background:'yellow'}}>
      {children}
    </div>
  )
}

export default Wrapper
