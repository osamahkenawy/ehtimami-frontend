export const toDataUrl = async function (url, callback) {
  //Convert to base64
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = () => {
      reject({
        statusText: xhr.statusText,
      });
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  });
}
