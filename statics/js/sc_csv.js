var input = document.querySelector('input');
var data = "";
input.addEventListener('change', function() {
  if(this.files.length){
    let file = this.files[0];
    let reader = new FileReader();
    reader.onload = function(){
      console.log(this.result);  // 文件数据流，变成相应格式数据了。（ 文本文件，就输出文本内的文本数据 ）
    };
    reader.readAsDataURL(file);
  }
}, false);
for (var i=0; i<8; i++) {
    data += this.result[i];
}
for (var i=0; i<4; i++) {
    data += this.result[i];
}
for (var i=8; i<this.result.length; i++) {
    data += this.result[i];
}

var pack = decompress_files(data);

download(pack,"decoded");

