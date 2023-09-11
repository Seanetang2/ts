// for every one sec

setInterval(() =>{
    // console.log("i am ester");
    
}, 1000);

//after one sec
setTimeout(() =>{
    // console.log("i am lady");
    
}, 1000);

setInterval(() =>{
    let ad ="skip this ad in the next five secs"
    // console.log(ad);

    setTimeout(() =>{
        // console.log(`click this button to skip ad`);
    }, 5000);
    
}, 1000);

function add(myMoney){
    setInterval(() =>{
        console.log(`${(myMoney += 2)}`);
        
    }, 3000);
}
add(700);