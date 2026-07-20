let count =0;

function updateCount(){
    document.getElementById("count").innerHTML = count;
}

function increaseCount(){
    count++;
    updateCount();
}

function dec(){
    if(count > 0){
        count--;
        updateCount();

    }
    // count--;
    // updateCount();
}

//Event Listener function 

document.getElementById("incr").addEventListener("click" , increase);

let counts=0;


function update(){
    document.getElementById("countt").innerHTML=counts;
}

function increase(){
    counts++;
    update();
}