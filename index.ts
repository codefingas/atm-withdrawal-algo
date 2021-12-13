
const withdraw = (amount: number): number[] => {
    const notes: [100, 50, 20] = [100, 50, 20];
    const noteCounter: number[] = Array(3).fill(0);

    while(amount > 0){
        if(amount % 20 != 0){
            noteCounter[1]++;
            amount = amount - 50;
        } else {
            let factor = amount / 20;
            if (factor >= 5){
                noteCounter[0] = Math.floor(factor / 5);
                amount = amount - noteCounter[0] * 100;
            } else {
                noteCounter[2] = factor;
                amount = amount - noteCounter[2] * 20;
            }
        }
    }

    return noteCounter;
}

console.log(withdraw(260));