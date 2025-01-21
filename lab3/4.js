function fetchData(callback){
    setTimeout(()=>{
        let n=Math.random()
        if(n>0.5){
            
            let user = 
            {
                
                name: "Abhi",
                roll: "5r9",
            }
            callback(user)
        }
        else{
            let error ="fecth failed"
            callback(error)
            
        }
    },1000)
}

fetchData((res)=>{
  
        console.log(res)
   
})