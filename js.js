// создает масив от и до
const range = (start,end,step=null) =>{             
    let m = []
    for(let i = start; i <= end; i++) {
        if(step !== null){
            if(step) i%step ? m.push(i) : null
            if(step<0) m.unshift(i)
        }else m.push(i)
    }
    return m
}

// возвращает сумму масива 
const sum = (array) => array.reduce((a,e) => a+e, 0) 

// масив в список
const arrayToList = (array) => array.length != 0 ? {value:array[0], rest:arrayToList(array.slice(1)) || null}:null

//список в масив
const listToArray = (list) => list ? [list.value].concat(listToArray(list.rest)): []
   
 //console.log(arrayToList([10,20,30]))

const prepend = (element,list) => ({value:element, rest:list})

//console.log(prepend(10, arrayToList([20,30,40])));

const nth = (list,index) =>listToArray(list)[index]

//console.log(nth(arrayToList([10,20,30]),1))


// глибоке порiвняння обьектов
const deepEqual = (a,b) =>{
    if(a !== null && b !== null){       // решаем проблему с null == object
        if(typeof a == 'object' && typeof b == 'object')
        {
            let keyA = Object.keys(a)
            let keyB = Object.keys(b)
            if(keyA.length !== keyB.length) return false
            
            for(let key of keyA){
                if (!deepEqual(a[key], b[key])) return false
            }
        }else return a == b
    }
    return true
}


let o1 ={
    a:{e:{p:{a1:1}},d:{a2:2}},
    b:{j:{z:4,x:3},h:{u:9}},
    c:{t:{n:34,v:{r:45}},f:{io:{d:3,yu:4}}},
    d:{s:{k:3},y:{i:{i2:22,y:{t:{tt:99}}}}}
}

let o2 ={
    a:{e:{p:{a1:1}},d:{a2:2}},
    b:{j:{z:4,x:3},h:{u:9}},
    c:{t:{n:34,v:{r:45}},f:{io:{d:3,yu:4}}},
    d:{s:{k:3},y:{i:{i2:22,y:{t:{tt:99}}}}}
}


console.log(deepEqual(o1,o2))
