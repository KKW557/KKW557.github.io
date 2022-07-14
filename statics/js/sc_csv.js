function decode() {
    var file = document.getElementById('csv').files[0];
    var file_name = file.name.replace('.csv', '');
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function(e) {
        var arrayBuffer = new ArrayBuffer(this.result.byteLength + 4);
        var view = new Uint8Array(arrayBuffer);
        view.set(new Uint8Array(this.result.slice(0, 8)));
        view.set(0, 8);  //LOL i just not write fori :P
        view.set(0, 9);
        view.set(0, 10);
        view.set(0, 11);
        view.set(new Uint8Array(this.result.slice(8, this.result.byteLength)), 12);
        var blob = new Blob([view], {type: "application/octet-stream"});
        var url  = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; 
        a.download = file_name + ".csv.lzma";
        a.click();
    }
}

function encode() {
    var file = document.getElementById('lzma').files[0];
    var file_name = file.name.replace('.lzma', '');
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function(e) {
        var arrayBuffer = new ArrayBuffer(this.result.byteLength - 4);
        var view = new Uint8Array(arrayBuffer);
        view.set(new Uint8Array(this.result.slice(0, 8)));
        view.set(new Uint8Array(this.result.slice(12, this.result.byteLength)), 8);
        var blob = new Blob([view], {type: "application/octet-stream"});
        var url  = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = file_name;
        a.click();
    }
}