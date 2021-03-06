const getMaxElmIndex = (matrix) => {
    let max = matrix.subset(math.index(0,1));
    let max_index = [0,1];
    matrix.forEach( (value, index) => {
        if (index[0] !== index[1]) {
            if ( math.abs(max) < math.abs(value) ) {
                max = value;
                max_index = index;
            }
        }
    })

    return max_index;
}

const calcRoteMatrix = (A) => {
    const n = Number(document.getElementById("n").value);
    let rote = math.identity(n);

    const max_index = getMaxElmIndex(A);
    const k = max_index[0];
    const m = max_index[1];

    const a_km = A.subset(math.index(k,m));
    const a_mm = A.subset(math.index(m,m));
    const a_kk = A.subset(math.index(k,k));

    let cosphi;
    let sinphi;
    if(a_mm !== a_kk) {
        const cos2phi = math.abs(a_kk - a_mm)/(math.sqrt(4*a_km**2 + (a_kk - a_mm)**2));
        cosphi = math.sqrt((1+cos2phi)/2.0);
        sinphi = math.sign(a_km*(a_kk - a_mm))*math.sqrt((1-cos2phi)/2.0);
    } else {
        cosphi = 1.0/math.sqrt(2);
        sinphi = 1.0/math.sqrt(2);
    }

    // console.log(cos2phi);
    // console.log(cosphi);
    // console.log(sinphi);
    // dump(rote);

    rote = math.subset(rote, math.index(k,k), cosphi);
    rote = math.subset(rote, math.index(k,m), -sinphi);
    rote = math.subset(rote, math.index(m,k), sinphi);
    rote = math.subset(rote, math.index(m,m), cosphi);

    return rote;
}

const getMaxValue = (matrix) => {
    const index = getMaxElmIndex(matrix);
    return matrix.subset(math.index(index[0], index[1]));
}

const dump = (matrix) => {
    console.table(JSON.stringify(matrix));
}
