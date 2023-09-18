
const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-auto min-w-[1280px] text-center font-extrabold">
            <div>
                
            </div>
            <div className="m-4 p-4 bg-blue-100">
                {children}
            </div>
        </div>
     );
}
 
export default BasicLayout;