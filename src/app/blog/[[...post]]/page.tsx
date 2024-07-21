const Posts= ({params} :{params :{post:string}})=>{
    console.log(params);
    return( 
        <div>  <h1>Post About {params.post}</h1></div>
    )
}

export default Posts;