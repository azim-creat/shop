export default function(params) {
  return new Promise((resolve, reject) => {

    let formData = new FormData();
    for (let i in params) {
      formData.append(i, params[i]);
    }
    
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://demo.zovi.kz/request.php");
      xhr.onload = () => {
        if (xhr.status === 200) {
          let res = JSON.parse(xhr.responseText);
          debugger
          if ((res && res.success && res.success === true) || !res.error) {
            resolve(res);
          } else {
            reject(res.error_message || res.tittle);
          }
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => {
        reject(xhr.statusText);
      };
      xhr.send(formData);
    } catch (e) {
      reject("error " + e.name + ":" + e.message + "\n" + e.stack);
    }
  });
}
