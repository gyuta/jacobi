
let matrix = math.matrix([[3,0.01,0.1],[0.01,2,0.1],[0.1,0.1,1]]);

const max_loop = 5;
const eps = 10**(-2);
for(let l = 0;l<max_loop;l++){

    showMatrix(matrix, l);

    const max = getMaxValue(matrix);
    if ( max > eps){
        showContinue(max, eps);
    } else {
        showBreak(max, eps);
    }

    showMaxIndex(matrix);

    const rote = calcRoteMatrix(matrix);
    const T_rote = math.transpose(rote);

    showMatrix(rote, l, "P");

    showFomula(l);
    matrix = math.multiply(math.multiply(T_rote, matrix), rote);
}