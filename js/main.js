
let matrix = math.matrix([[3,0.01,0.1],[0.01,2,0.1],[0.1,0.1,1]]);

const loop = 100;
const eps = 10**(-3);
for(let l = 0;l<loop;l++){

    showMatrix(matrix);

    if ( getMaxValue(matrix) < eps){
        break;
    }

    const rote = calcRoteMatrix(matrix);
    const T_rote = math.transpose(rote);

    matrix = math.multiply(math.multiply(T_rote, matrix), rote);
}