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

const matrixs = document.getElementById("matrixs");