const profile =({ params }:{params :{id:string,name:string}})=>{
    console.log(params);
    return(
        
        <div className="profile">
            <h1>Profile</h1>
            <p>Profile {params.id}</p>
        </div>
    )
}
export default profile