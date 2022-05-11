export function fontToDataURI(file_path) {

    return fetch(file_path)
        .then(resp => resp.blob())
        .then(blob => {
            console.log(blob.type)
            return new Promise(resolve => {
                const dataView = new DataView(blob)
                // let f = new FileReader();
                // f.onload = e => resolve(f.result);
                // f.readAsDataURL(blob);
                return Blob([dataView], {type: mimeString})

            })
        })
        .then(blob => {
            console.log(blob.type)
            return new Promise(resolve => {

                let f = new FileReader();
                f.onload = e => resolve(f.result);
                f.readAsDataURL(blob);

            })
        })
        .then(dataURL => {

            let fontRule = `@font-face {
           font-family: "testfont face";
           src: url(${dataURL});
     
        }`

            return fontRule;
        })
};

// fetch(myRequest)
//   .then(response => response.blob())
//   .then(myBlob => {
//     myImage.src = URL.createObjectURL(myBlob);
//   });

// var dataView = new DataView(arrayBuffer);
// var blob = new Blob([dataView], { type: mimeString });