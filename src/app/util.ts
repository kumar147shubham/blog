
//(1-4,6,9,11) should return 1,2,3,4,6,9,11
function getPageNumbers(range: string): number[]{
    const pageNumbers: number[] = [];
    if(!range.includes(",") && !range.includes("-"))
        return [parseInt(range)];

    if(!range.includes(",")){
        let num1 = parseInt(range.split("-")[0])
        let num2 = parseInt(range.split("-")[1])
        for(let i = num1; i<= num2; i++){
            pageNumbers.push(i)
        }
        return pageNumbers;
    }

    let parts = range.split(',');
    for(var part of parts){
        if(part.includes("-")){
            let num1 = parseInt(range.split("-")[0])
            let num2 = parseInt(range.split("-")[1])
            for(let i = num1; i<= num2; i++){
                pageNumbers.push(i)
            }
        }
        else{
            pageNumbers.push(parseInt(part));
        }
    }
    return pageNumbers;
}