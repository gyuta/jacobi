
const calc = () => {
    const input = document.getElementById("input_matrix");
    const row = 3;
    const column = 3;

    let arr = [];

    for(let i=0;i<row;i++){
        const tmp = input.children[i];
        let row_arr = [];
        for(let j=0;j<column;j++){
            row_arr.push(tmp.children[j].value)
        }
        arr.push(row_arr)
    }

    let matrix = math.matrix(arr);

    const max_loop = document.getElementById('loop').value;
    const eps = document.getElementById('eps').value;
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

}

// document.getElementById("start").addEventListener('click', calc());
// calc();