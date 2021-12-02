document.querySelector('#boton').addEventListener('click',regresarDatos);
function regresarDatos(){
    
  let url = `https://jsonplaceholder.typicode.com/posts`

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

        xhttp.send();

    xhttp.onreadystatechange = function(){


    if(this.readyState == 4 && this.status == 200){
        
        let datos = JSON.parse(this.responseText);
       
        let antwort = document.querySelector('#antwort');
        antwort.innerHTML = '';

        
        for(let item of datos){
          
          antwort.innerHTML += `
          <tr>
            <td>${item.userId}</td>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
          </tr>
          
          `


        }


        }
    }
}
