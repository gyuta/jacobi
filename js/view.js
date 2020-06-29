const getHtmlOfMatrix = (matrix) => {
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
    return MathJax.tex2chtml(" A = \\begin{array}{ccc} "+ text + " \\end{array} ").outerHTML
}

const showMatrix = (matrix) => {
    let div = document.createElement("div"); 
    div.innerHTML = getHtmlOfMatrix(matrix);
    matrixs.appendChild(div);
}

const showMaxIndex = (matrix) => {
    const max_index = getMaxElmIndex(matrix);

    let div = document.createElement("div"); 
    div.innerHTML = `a_km (k=${max_index[0]} m=${max_index[1]})に着目し回転行列を作成します。`
    matrixs.appendChild(div);

}

const matrixs = document.getElementById("matrixs");