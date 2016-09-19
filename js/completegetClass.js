// JavaScript Document
//完整的通过类名获取元素
/*className:类名，必须
  ele:限定的范围，可选
  tagName:限定标签名，可选
*/
function getClassOption(className,ele,tagName){

		var arr=[];
		var eles=null;
		if(ele){
			if(tagName){
				eles=ele.getElementsByTagName(tagName);
			}else{
				eles=ele.getElementsByTagName('*');
				}
		}else{
			 if(tagName){
				eles=document.getElementsByTagName(tagName);
			 }else{
				 eles=document.getElementsByTagName('*');
			 }
			}
		for(var i=0;i<eles.length;i++){
			//也可eles[i].className.split(' ').indexOf(className)!=-1
			if(eles[i].className.search(new RegExp('\\b'+className+'\\b'))!=-1){
				arr.push(eles[i]);
			}
		}
		return arr;
	}
	
//只有两个参数，className及限定范围
function getClass(className,ele){
	if(document.getElementsByClassName){
			return ele.getElementsByClassName(className);
		
	}else{
			var arr=[];
			var eles=ele.getElementsByTagName('*');
			for(var i=0;i<eles.length;i++){
				if(eles[i].className.search(new RegExp('\\b'+className+'\\b'))!=-1){
					arr.push(eles[i]);
				}
			}
			return arr;
		}
	}