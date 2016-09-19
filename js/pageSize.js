// JavaScript Document
//获取页面可见区域的宽高
	function pageSize(){
		var arr=[];
		var pageWidth=0;
		var pageHeight=0;
		if(window.innerWidth){
			pageWidth=window.innerWidth;
			pageHeight=window.innerHeight;
		}else{
			if(document.compatMode=='CSS1Compat'){
				pageWidth=document.documentElement.clientWidth;
				pageHeight=document.documentElement.clientHeight;
			}else{
				pageWidth=document.body.clientWidth;
				pageHeight=document.body.clientHeight;
				}
		}
		arr.push(pageWidth);
		arr.push(pageHeight);
		return arr;
		}