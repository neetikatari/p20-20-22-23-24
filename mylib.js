//my own function for the alogrithm -FUNCTION DEFINATION
//(r1,r2)- r1 and r2 is called as parameters
//r1,r2 have local scope = can be used only in this function
//true and false is called boolean values - yes(true) and no(false)
function touch (r1,r2){
    if(r1.width/2+r2.width/2 > r1.x-r2.x && 
        r1.width/2+r2.width/2 > r2.x-r1.x &&
        r1.height/2+r2.height/2 > r1.y-r2.y && 
        r1.height/2+r2.height/2 > r2.y-r1.y ) {

    return true
            
    }
    else{
        return false
    }
}
