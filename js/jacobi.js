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
    let rote = math.identity(3);

    const max_index = getMaxElmIndex(A);
    const k = max_index[0];
    const m = max_index[1];

    const a_km = A.subset(math.index(k,m));
    const a_mm = A.subset(math.index(m,m));
    const a_kk = A.subset(math.index(k,k));

    const cos2phi = math.abs(a_kk - a_mm)/(math.sqrt(4*a_km**2 + (a_kk - a_mm)**2));
    const cosphi = math.sqrt((1+cos2phi)/2.0);
    const sinphi = math.sign(a_km*(a_kk - a_mm))*math.sqrt((1-cos2phi)/2.0);

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
