function superbowlWin(record){
    const object = record.find( x => x.result === "W" )
    if (object) {
        return object.year
    } 
}



