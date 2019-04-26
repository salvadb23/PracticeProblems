let sortArrayByParity = function(A) {
    let even = []
    let odd = []
    
    A.forEach(index => {
      if(index % 2 !== 0){
        odd.push(index)
      } else {
        even.push(index)
      }    
    })
    let both = [...even,...odd]
    return both
};


