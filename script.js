
//fair bill check
//from => https://www.hackerrank.com/challenges/bon-appetit/problems

let checkBill=(bill,remove,amount)=>{
    let sharedBill=0,annaBill=0;
    //get element that anna did not take
    for (let i=0;i<remove.length;i++){

        if(bill[remove[i]]){
            bill.splice(remove[i],1);
        }
    }
    //add remaining stuff
    for(let a=0;a<bill.length;a++){
        sharedBill+=bill[a];
    }
    annaBill=sharedBill/2;
    //compare the sharebill with th 
    if(amount > annaBill){
        console.log("Bill has to give back to Anna "+(amount-annaBill))
    }else{
        console.log("Bon Appetit!")
    }
}

checkBill([4,3,5],[1,63,9],5)