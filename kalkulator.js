
//fungsi Menampilkan input skalar jika operasi adalah perkalian skalar, sebaliknya sembunyikan
function toggleScalarInput() {
    const scalarContainer = document.getElementById('scalarContainer');
    const vector2Container = document.getElementById('vector2Container');
    const operation = document.getElementById('operation').value;

    if (operation === 'multiplyScalar') {
        scalarContainer.style.display = 'block';
        vector2Container.style.display = 'none';
    } else {
        scalarContainer.style.display = 'none';
        vector2Container.style.display = 'block';
    }
}

//fungsi perkalian cross product
function crossProduct(vector1, vector2) {
    const v1 = vector1.split(',').map(Number);
    const v2 = vector2.split(',').map(Number);

    //pengkondisian jika vektor bukan 3 dimensi
    if (v1.length !== 3 || v2.length !== 3) {
        throw new Error('Cross product is only defined for 3-dimensional vectors');
    }

    const result = [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ];

    const crossProductResult = `vector1 x vector2 = (${v1[0]},${v1[1]},${v1[2]}) x (${v2[0]},${v2[1]},${v2[2]})\n
    = (${v1[1]} x ${v2[2]})i - (${v1[2]}x${v2[1]})i, (${v1[2]} x ${v2[0]})j - (${v1[0]}x${v2[2]})j, (${v1[0]} x ${v2[1]})k - (${v1[1]}x${v2[0]})k\n
    result = ${result[0]}i,${result[1]}j,${result[2]}k`;

    return crossProductResult;
}

//perkalian dott product
function multiplyVectors(vector1, vector2) {
    const v1 = vector1.split(',').map(Number);
    const v2 = vector2.split(',').map(Number);

    //pengkondisian jika dimensi vektor tidak sama maka akan error
    if (v1.length !== v2.length) {
        throw new Error('Vectors must have the same length');
    }

    //inisialisasi 
    let result = [];
    let dotProductResult = `vector1 x vector2 = (`;

    //menghitung hasil perkalian
    for (let i = 0; i < v1.length; i++) {
        result.push(v1[i] * v2[i]);
        dotProductResult += `${v1[i]},`;
    }

    dotProductResult = dotProductResult.slice(0, -1) + `) x (`;

    for (let i = 0; i < v2.length; i++) {
        dotProductResult += `${v2[i]},`;
    }

    dotProductResult = dotProductResult.slice(0, -1) + `)\n= (`;

    for (let i = 0; i < v1.length; i++) {
        dotProductResult += `${v1[i]} x ${v2[i]} + `;
    }

    dotProductResult = dotProductResult.slice(0, -2) + `)\nresult = `;

    //menghitung hasil
    let sum = result.reduce((acc, curr) => acc + curr, 0);
    dotProductResult += sum;

    return dotProductResult;
}

//fungsi untuk pertambahan vektor
function addVectors(vector1, vector2) {
    const v1 = vector1.split(',').map(Number);
    const v2 = vector2.split(',').map(Number);

    //pengkondisian jika dimensi vektor tidak sama maka akan error
    if (v1.length !== v2.length) {
        throw new Error('Vectors must have the same length');
    }

    let result = [];
    let addVectorsResult = `vector1 + vector2 = (`;

    for (let i = 0; i < v1.length; i++) {
        result.push(v1[i] + v2[i]);
        addVectorsResult += `${v1[i]},`;
    }

    addVectorsResult = addVectorsResult.slice(0, -1) + `) + (`;

    for (let i = 0; i < v2.length; i++) {
        addVectorsResult += `${v2[i]},`;
    }

    addVectorsResult = addVectorsResult.slice(0, -1) + `)\n= (`;

    for (let i = 0; i < v1.length; i++) {
        addVectorsResult += `(${v1[i]} + ${v2[i]}) , `;
    }

    addVectorsResult = addVectorsResult.slice(0, -2) + `)\nresult = `;

    for (let i = 0; i < result.length; i++) {
        addVectorsResult += `${result[i]} , `;
    }

    addVectorsResult = addVectorsResult.slice(0, -2) + ` `;
    return addVectorsResult;
}

//fungsi untuk pengurangan vektor
function subtractVectors(vector1, vector2) {
    const v1 = vector1.split(',').map(Number);
    const v2 = vector2.split(',').map(Number);

    //pengkondisian jika dimensi vektor tidak sama maka akan error
    if (v1.length !== v2.length) {
        throw new Error('Vectors must have the same length');
    }

    let result = [];
    let subtractVectorsResult = `vector1 - vector2 = (`;

    for (let i = 0; i < v1.length; i++) {
        result.push(v1[i] - v2[i]);
        subtractVectorsResult += `${v1[i]},`;
    }

    subtractVectorsResult = subtractVectorsResult.slice(0, -1) + `) - (`;

    for (let i = 0; i < v2.length; i++) {
        subtractVectorsResult += `${v2[i]},`;
    }

    subtractVectorsResult = subtractVectorsResult.slice(0, -1) + `)\n= (`;

    for (let i = 0; i < v1.length; i++) {
        subtractVectorsResult += `(${v1[i]} - ${v2[i]}) , `;
    }

    subtractVectorsResult = subtractVectorsResult.slice(0, -2) + `)\nresult = `;

    for (let i = 0; i < result.length; i++) {
        subtractVectorsResult += `${result[i]} , `;
    }

    subtractVectorsResult = subtractVectorsResult.slice(0, -2) + ` `;
    return subtractVectorsResult;
}

//fungsi untuk perkalian skalar dengan vektor
function multiplyVectorByScalar(vector, scalar) {
    const v = vector.split(',').map(Number);

    let result = [];
    let multiplyVectorByScalarResult = `vector x ${scalar} = (`;

    for (let i = 0; i < v.length; i++) {
        result.push(v[i] * scalar);
        multiplyVectorByScalarResult += `${v[i]},`;
    }

    multiplyVectorByScalarResult = multiplyVectorByScalarResult.slice(0, -1) + `) x ${scalar}\n= (`;

    for (let i = 0; i < v.length; i++) {
        multiplyVectorByScalarResult += `(${v[i]} x ${scalar}) , `;
    }

    multiplyVectorByScalarResult = multiplyVectorByScalarResult.slice(0, -2) + `)\nresult = `;

    for (let i = 0; i < result.length; i++) {
        multiplyVectorByScalarResult += `${result[i]} , `;
    }

    multiplyVectorByScalarResult = multiplyVectorByScalarResult.slice(0, -2) + ` `;
    return multiplyVectorByScalarResult;
}

// Fungsi untuk menghitung panjang vektor
function vectorLength(vector) {
    const v = vector.split(',').map(Number);
    return Math.sqrt(v.reduce((acc, val) => acc + Math.pow(val, 2), 0));
}
  
// Fungsi untuk menghitung dot product antara dua vektor
function dotProduct(vector1, vector2) {
    const v1 = vector1.split(',').map(Number);
    const v2 = vector2.split(',').map(Number);
    if (vector1.length !== vector2.length) {
      throw new Error("Panjang vektor tidak sama");
    }
    return v1.reduce((acc, val, index) => acc + val * v2[index], 0);
  }

// Fungsi untuk menghitung sudut antara dua vektor
function angleBetweenVectors(vector1, vector2) {
    const dot = dotProduct(vector1, vector2);
    const length1 = vectorLength(vector1);
    const length2 = vectorLength(vector2);
    
    const cosTheta = dot / (length1 * length2);
    
    // Menghitung sudut dalam radian
    const angleInRadians = Math.acos(cosTheta);
  
    // Menghitung sudut dalam derajat
    const angleInDegrees = (angleInRadians * 180) / Math.PI;
  
    // Membuat hasil output
    const angleResult = `sudut vector1 dan vector2 = ${angleInDegrees.toFixed(2)} derajat`;
  
    const v1 = vector1.split(',').map(Number);
    const v2 = vector2.split(',').map(Number);

    // Menampilkan cara penyelesaian
    const solutionDetails = `penyelesaian : 
      1. Hitung dot product: (${vector1}) ⋅ (${vector2}) = ${dot.toFixed(2)}
      2. Hitung magnitudo vektor A: ||${vector1}|| = √(${v1.reduce((acc, val) => acc + Math.pow(val, 2), 0)}) = ${length1.toFixed(2)}
      3. Hitung magnitudo vektor B: ||${vector2}|| = √(${v2.reduce((acc, val) => acc + Math.pow(val, 2), 0)}) = ${length2.toFixed(2)}
      4. Hitung sudut: arccos(${dot} / (${length1.toFixed(2)} * ${length2.toFixed(2)})) = arccos(${cosTheta.toFixed(2)}) = ${angleInRadians.toFixed(2)} radian
      5. Konversi sudut radian ke derajat: ${angleInDegrees.toFixed(2)} derajat\n`;
  
    return angleResult + "\n\n" + solutionDetails;
}

// Fungsi untuk menampilkan history
function showHistory() {
    const historyList = document.getElementById('historyList');

    if (historyList.style.display === 'none' || historyList.style.display === '') {
        historyList.style.display = 'block';
    } else {
        historyList.style.display = 'none';
    }
}

// Fungsi untuk menambahkan history pemakaian
function addToHistory(operation, vector1, vector2, scalar = null) {
    const historyList = document.getElementById('historyList');
    let result = '';

    switch (operation) {
        case 'multiply':
            result = multiplyVectors(vector1, vector2);
            break;
        case 'add':
            result = addVectors(vector1, vector2);
            break;
        case 'subtract':
            result = subtractVectors(vector1, vector2);
            break;
        case 'multiplyScalar':
            result = multiplyVectorByScalar(vector1, scalar);
            break;
        case 'crossProduct':
            result = crossProduct(vector1, vector2);
            break;
        case 'angle':
                result = angleBetweenVectors(vector1, vector2);
                break;
        default:
            result = 'Invalid operation';
    }

    const historyItem = `Vector1(${vector1}), Vector2(${vector2}), Result: ${result}`;
    const listItem = document.createElement('li');
    listItem.textContent = historyItem;
    historyList.appendChild(listItem);
}

// Fungsi untuk menampilkan history
function showHistory() {
    const historyList = document.getElementById('historyList');

    if (historyList.style.display === 'none' || historyList.style.display === '') {
        historyList.style.display = 'block';
    } else {
        historyList.style.display = 'none';
    }
}

function clearHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ""; // Mengosongkan isi dari elemen ul dengan id 'historyList'
}

// Fungsi untuk menangani kunci tombol "Enter"
function handleKeyPress(event) {
    // Cek apakah tombol yang ditekan adalah tombol "Enter" (kode 13)
    if (event.keyCode === 13) {
        // Panggil fungsi submitForm() saat tombol "Enter" ditekan
        calculate();
    }
}

// Fungsi untuk membersihkan input yang sedang dilakukan
function clearInput() {
    document.getElementById('vector1').value = '';
    document.getElementById('vector2').value = '';
    document.getElementById('scalar').value = '';
    document.getElementById('result').innerText = '';
}

//fungsi utama
function calculate() {
    const vector1 = document.getElementById('vector1').value;
    const vector2 = document.getElementById('vector2').value;
    const scalar = parseFloat(document.getElementById('scalar').value);
    const scalarContainer = document.getElementById('scalarContainer');
    const operation = document.getElementById('operation').value;

    if (vector1.trim() === '' || vector2.trim() === '') {
        document.getElementById('result').innerHTML = 'Error: Vektor 1 dan Vektor 2 harus diisi';
        return; // Menghentikan eksekusi lebih lanjut jika terdapat kesalahan
    }

    try {
        let result;
        switch (operation) {
            case 'multiply':
                result = multiplyVectors(vector1, vector2);
                break;
            case 'add':
                result = addVectors(vector1, vector2);
                break;
            case 'subtract':
                result = subtractVectors(vector1, vector2);
                break;
            case 'multiplyScalar':
                scalarContainer.style.display = 'block';
                result = multiplyVectorByScalar(vector1, scalar);
                break;
            case 'crossProduct':
                result = crossProduct(vector1, vector2);
                break;
            case 'angle':
                result = angleBetweenVectors(vector1, vector2);
                break;
            default:
                throw new Error('Invalid operation');
        }
        document.getElementById('result').innerText = result;
        addToHistory(operation, vector1, vector2, scalar);
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}