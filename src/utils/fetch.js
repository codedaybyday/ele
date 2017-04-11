/*export const fetch = (type = 'GET',url,data) => new Promise((resolve,reject) => {
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
});*/
export default async (type='GET',url,data) => {
	let headers = new Headers({
		'Content-Type':'application/json',
		'Accept':'application/json'
	});
	let init = {
		method:type,
		headers:headers,
		mode:'cros',
		cache:'default'
	};
	//let request = new Request(url,init);
	if(type == 'GET'){
		let search = [];
		for(let i in data){
			search.push([i,data[i]].join('='));
		}
		search = search.join('&');
		url = [url,search].join('?');
	}
	let res = await fetch(url,init);
	let resJson = await res.json();
	return resJson;
};