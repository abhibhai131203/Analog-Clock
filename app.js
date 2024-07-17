// console.log(Date());
let datee = new Date();

// console.log(datee.getHours());
// console.log(datee.getMinutes());
// console.log(datee.getSeconds());

//getting elements from the HTML

let hour = document.querySelector(".hour");
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");

// getting sec,min,hour
// let vhour = datee.getHours();
// let vmin = datee.getMinutes();


//writing function
const getSec=()=>{
    let dat = new Date();
    // console.log(dat.getSeconds());
    return dat.getSeconds();
}

const getMin=()=>{
    let h = new Date();
    return h.getMinutes();
}

const getHour=()=>{
    let m = new Date();
    return m.getHours();
}
const secmove=()=>{
    let vsec = getSec();
    sec.style.transform=`rotate(${(vsec*6)+270}deg`;
    // console.log(vsec);
}

const minmove=()=>{
    let vmin = getMin();
    let s = getSec();
    min.style.transform=`rotate(${(vmin*6)+270+s*0.1}deg`;
}

const hourmove=()=>{
    let vh = getHour();
    let hourr= vh%12;
    let minn = getMin();
    hour.style.transform=`rotate(${(hourr*30)+270+minn*0.5}deg`
}

 setInterval(secmove,1000);
 setInterval(minmove,1000);
 setInterval(hourmove,1000);

