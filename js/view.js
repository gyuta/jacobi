const getHtmlOfMatrix = (matrix, loop, name) => {
    let text = "";
    matrix.forEach( (value, index) => {
        let q = ""
        if (index[1] !== 2) {
            q = " &";
        } else if (index[0] !== 2) {
            q = " \\\\";
        }
        text += String(value) + q;
    })
    return MathJax.tex2chtml(` ${name}_{${loop}} = \\begin{array}{ccc} ${text} \\end{array} `).outerHTML
}

const showMatrix = (matrix, loop, name="A") => {
    let div = document.createElement("div"); 
    div.innerHTML = getHtmlOfMatrix(matrix, loop, name);
    matrixs.appendChild(div);
}

const showMaxIndex = (matrix) => {
    const max_index = getMaxElmIndex(matrix);

    let div = document.createElement("div"); 
    div.innerHTML = MathJax.tex2chtml(`a_{${max_index[0]}${max_index[1]}}に着目し回転行列を作成します。`).outerHTML;
    matrixs.appendChild(div);

}

const showFomula = (loop) => {
    let div = document.createElement("div"); 
    div.innerHTML = MathJax.tex2chtml(`A_{${loop+1}} = P^T_{${loop}}A_{${loop}}P_{${loop}}を計算します。`).outerHTML;
    matrixs.appendChild(div);
}

const showContinue = (max, eps) => {
    let div = document.createElement("div"); 
    div.innerHTML = MathJax.tex2chtml(`\\max_{i \\neq j} |a_{ij}| = ${max} であり eps = ${eps} よりも大きいため計算を続行します。`).outerHTML;
    matrixs.appendChild(div);
}

const showBreak = (max, eps) => {
    let div = document.createElement("div"); 
    div.innerHTML = MathJax.tex2chtml(`\\max_{i \\neq j} |a_{ij}| = ${max} であり eps = ${eps} を下回ったので終了します。`).outerHTML;
    matrixs.appendChild(div);
}

const showMsg = (msg) => {
    let div = document.createElement("div"); 
    div.innerHTML = MathJax.tex2chtml(msg).outerHTML;
    matrixs.appendChild(div);
}



const matrixs = document.getElementById("matrixs");