import { FC, ReactNode } from "react";
type Props={
  children:ReactNode
}
const Form:FC<Props> = ({children}) => {
  return (
    <>
      <main 
        className='text-center'
        style={{
          position:"relative",
          width:"100%",
          height:"100vh",
        }}
      >
        <div 
          style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translateY(-50%) translateX(-50%)",      
          }}
        >
          {children}
        </div>
      </main>
    </>
  );
}

export default Form;