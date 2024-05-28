function getTricks(){
    fetch('http://localhost:3001/api/v1/tricks')
    .then(res => res.json)
    .then(data => {
        if(!data){
            console.log("Something went wrong")
        }
        console.log(data)
    }
)
    .catch(error => console.log(error.message))
}

export default getTricks