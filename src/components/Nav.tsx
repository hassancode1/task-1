

const Nav = () => {
  return (
  
    <div style={{boxShadow:" 0px 1px 18px 0px rgba(0, 0, 0, 0.12)" }} className=" bg-white   flex justify-between items-center px-36 w-full  h-20 absolute left-0  ">
  <div>
    <h2 className="">Program Details</h2>
  </div>

 
  <div className="bg-active text-white   h-full  flex flex-col items-center justify-center px-4  relative">
  <div className="w-0 h-0 
  border-t-[35px] border-t-transparent
  border-l-[50px] border-l-active
  border-b-[35px] border-b-transparent
  absolute left-28
  ">
</div>
      <h2 className="text-center  z-10">Application Form</h2>

  </div>

  <div>
    <h2>Workflow</h2>
  </div>

  <div>
    <h2>Preview</h2>
  </div>
 
 
    </div>

  )
}

export default Nav