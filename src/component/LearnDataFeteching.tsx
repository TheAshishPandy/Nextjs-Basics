async function GetData() {
    try {
        const response = await fetch('http://localhost:3000/api/blog/posts');
        return response.json()
    }
    catch (error) {
        console.log(error);
    }
}

const DataFeteching = async () => {
    const data = await GetData();
    console.log("Data : " + data);
    return (
        <>
            {
               data.data.map((post,i) => (
                    <div key={i} className="post">
                        < h1 > {post.title}</h1 >
                        <p>{post.body}</p>
                    </div >
                ))

            }
        </>
    )
}

export default DataFeteching