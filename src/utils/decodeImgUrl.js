export default image_path => {
	function getExt(str){
        const re = /(png|jpeg|gif)$/.exec(str);
        return re && re[1];
    }
    const pic_root_url = 'https://fuss10.elemecdn.com/';
	if(!image_path) return ;
    return pic_root_url+image_path.substr(0,1)+'/'+image_path.substr(1,2)+'/'+image_path.substr(3,image_path.length-2)+'.'+getExt(image_path);
}