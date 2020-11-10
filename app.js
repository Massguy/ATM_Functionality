
function vaultex(cassetes=4,fives,tens,twenty,fifty){
    let newArr = []
    let arr=[]
  newArr.push(['cassetes',cassetes]);
  if(cassetes > 4) return ['error, Only Allowed 4 cassetes maximum']
  else if(typeof cassetes !== 'number'){
    return ['error','please choose as an integer as cassetes input']
  }
  
  if(typeof fives === 'number'){
  while(fives <= 10000000000000000){
    if(fives <=10000){
      newArr.push(['5',fives])
      break
    }else if(fives <= 20000){
      newArr.push(['5',10000])
      newArr.push(['5',fives-10000])
      break
    }else if(fives <= 30000){
      newArr.push(['5',10000])
      newArr.push(['5',10000])
      newArr.push(['5',fives-20000])
      break
    }else if(fives <= 40000){
      newArr.push(['5',10000])
      newArr.push(['5',10000])
      newArr.push(['5',10000])
      newArr.push(['5',fives-30000])
      break
  }else if( fives > 40000){
    return ['error', 'Exceeded Maximum you are only allowed £5 notes with a maximum value of £40000 ']
  }
  }
  }else{
    return ['error','please choose an integer as input']
  }
  
  if(typeof tens=== 'number'){
  while(tens<= 10000000000000000){
    if(tens<=20000){
      newArr.push(['10',tens])
      break
    }else if(tens<= 40000){
      newArr.push(['10',20000])
      newArr.push(['10',tens-20000])
      break
    }else if(tens<= 60000){
      newArr.push(['10',20000])
      newArr.push(['10',20000])
      newArr.push(['10',tens-40000])
      break
    }else if(tens<= 80000){
      newArr.push(['10',20000])
      newArr.push(['10',20000])
      newArr.push(['10',20000])
      newArr.push(['10',tens-60000])
      break
  }else if( tens> 80000){
    return ['error', 'Exceeded Maximum you are only allowed £10 notes with a maximum value of £80000 ']
  }
  }
  }else{
    return ['error','please choose an integer as input']
  }
  if(typeof twenty=== 'number'){
  while(twenty<= 10000000000000000){
    if(twenty<=40000){
      newArr.push(['20',twenty])
      break
    }else if(twenty<= 80000){
      newArr.push(['20',40000])
      newArr.push(['20',twenty-40000])
      break
    }else if(twenty<= 120000){
      newArr.push(['20',40000])
      newArr.push(['20',40000])
      newArr.push(['20',twenty-80000])
      break
    }else if(twenty<= 160000){
      newArr.push(['20',40000])
      newArr.push(['20',40000])
      newArr.push(['20',40000])
      newArr.push(['20',twenty-120000])
      break
  }else if( twenty> 160000){
    return ['error', 'Exceeded Maximum you are only allowed £20 notes with a maximum value of £160000 ']
  }
  }
  }else{
    return ['error','please choose an integer as input']
  }
  if(typeof fifty=== 'number'){
  while(fifty<= 10000000000000000){
    if(fifty<=100000){
      newArr.push(['50',fifty])
      break
    }else if(fifty<= 200000){
      newArr.push(['50',100000])
      newArr.push(['50',fifty-100000])
      break
    }else if(fifty<= 300000){
      newArr.push(['50',100000])
      newArr.push(['50',100000])
      newArr.push(['50',fifty-200000])
      break
    }else if(fifty<= 400000){
      newArr.push(['50',100000])
      newArr.push(['50',100000])
      newArr.push(['50',100000])
      newArr.push(['50',fifty-300000])
      break
  }else if( fifty> 400000){
    return ['error', 'Exceeded Maximum you are only allowed £50 notes with a maximum value of £400000 ']
  }
  }
  }else{
    return ['error','please choose an integer as input']
  }
    
  for(let i=0; i<newArr.length; i++){
    for(let j=0; j<newArr[i].length; j++){
      if(newArr[i][1] !==0) 
      {arr.push(newArr[i])
        break
      }else if( fives % 5 !==0){
      return ['error','Value not compatible for £5 notes choose a number divisible by 5']
    }else if( tens % 10 !==0){
      return ['error','Value not compatible for £10 notes choose a number divisible by 10']
    }else if( twenty % 20 !==0){ 
      return ['error','Value not compatible for £20 notes choose a number divisible by 20']
    }else if( fifty % 50 !==0){
      return ['error','Value not compatible for £50 notes choose a number divisible by 50']
    }
      }
    }
    if(arr.length === cassetes + 1){
        return ["valid", "order valid, send for packing"]
    }else if(arr.length <= cassetes +1){
      return ['error',`you have not filled in ${cassetes} cassetes you need`]
    }else if(arr.length >= cassetes + 1 ){
     return ['error','You are only allowed a maximum of 4 cassetes']
  }  
  }
  
  

  
  module.exports = {vaultex}