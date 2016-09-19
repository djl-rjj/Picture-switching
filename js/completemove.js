//获取样式
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}
//运动框架
function startMove(obj,json,fnEnd){
	//清除定时器
	clearInterval(obj.timer);
	//设置定时器
	obj.timer=setInterval(function(){
		//设置一个boolean参数，原值为true
		var bStop=true;
		
		//遍历想要设置相应的属性及属性值的json数据
		for(var attr in json){
		var curr=0;
		//若属性是透明度，则将值转换成float格式
		if(attr=='opacity'){
			//四舍五入，保留整数
			curr=Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			//若属性不是透明度，则直接转为整数
			curr=parseInt(getStyle(obj,attr));
		}
		//速度是打算设置的属性值-当前属性值然后除以10	
		var speed=(json[attr]-curr)/10;
        //若速度>0则向上取整，<0则向下取整
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//若当前属性值不为目标属性的值，则将boolean设置为false
		if(curr!=json[attr])
			bStop=false;
			
			if(attr=='opacity'){

				obj.style.filter='alpha(opacity:'+(curr+speed)+')';
				obj.style.opacity=(curr+speed)/100;
			}else{
				obj.style[attr]=curr+speed+'px';
			}
		}
		//如果boolean参数为true，则关闭定时器
		if(bStop){
			clearInterval(obj.timer);
			if(fnEnd){
			    fnEnd();
			}
		}
		},30)
}