

export default function ColorboxLayout({children,left,right}){
    const isSidebar =false;
    return (
       
        <div className="container"> 
        <div>{children}</div>
         <section>{isSidebar ? right:left}</section>
        </div>
    )
}