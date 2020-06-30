
const calc = () => {
    const input = document.getElementById("input_matrix");
    const n = Number(document.getElementById("n").value);
    const row = n;
    const column = n;

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
    let flg = false;
    let P = math.identity(n);

    for(let l = 0;l<max_loop;l++){

        showMatrix(matrix, l);

        const max = math.abs(getMaxValue(matrix));
        if ( max > eps){
            showContinue(max, eps);
        } else {
            showBreak(max, eps);
            flg = true;
            break;
        }

        showMaxIndex(matrix);

        const rote = calcRoteMatrix(matrix);
        const T_rote = math.transpose(rote);

        showMatrix(rote, l, "P");

        showFomula(l);
        matrix = math.multiply(math.multiply(T_rote, matrix), rote);
        P = math.multiply(P, rote);
    }

    if (!flg) {
        showMsg('最大ループに到達したので終了します。');
    }

    showMatrix(P, " ", "P = P_0P_1P_2...")

}

const clear = () => {
    document.getElementById("matrixs").innerHTML = "";
}

async function view() {
    await clear();
    await calc();
    MathJax.typeset();
}

const change = () => {
    const n = Number(document.getElementById("n").value);

    const matrix = document.getElementById('input_matrix');
    matrix.innerHTML = "";

    for (let i=0;i<n;i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<n;j++){
            const input = document.createElement('input');
            input.setAttribute('type', 'number');
            input.setAttribute('step', 'any');
            row.appendChild(input);
        }
        matrix.appendChild(row);
    }
}

document.getElementById("start").addEventListener('click', view);
document.getElementById("n").addEventListener('change', change);