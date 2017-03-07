export const fetch = (type = 'GET',url,data) => new Promise((resolve,reject) => {
	let xhr = new XMLHttpRequest(),
		data_str = '';

	xhr.responseType = 'json';
	//xhr.setRequestHeader('Acept','application/json');
	xhr.onreadystatechange = function(){
		if(this.readyState !== 4) return;
		if(this.status == 200){
			resolve(this.response);
		}else{
			reject(new Error(this.statusText));
		}
	};
	if(type === 'GET'){
		for(let key in data){
			if(Array.isArray(data[key])){
				data_str += key+'[]='+data[key]+'&';
			}else{
				data_str += key+'='+data[key]+'&';
			}
			
		}
		data_str = data_str.substr(0,data_str.length-1);
		url += '?'+data_str;
		xhr.open(type,url,true);
		xhr.send(null);
	}else if(type === 'POST'){
		xhr.open(type,url,true);
		xhr.send(data);
	}
});