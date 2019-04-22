define({
	function init(){
		mui.init();
		getFind();
	}
	function getFind(){
			mui.ajax("/api/find",{
				type:"get",
				success(rs){
					add(rs.data)
				}
			})
		}
		function add(data){
			let cont=document.querySelector(".cont");
			cont.innerHTML=map(item=>{
				 return `<label for="">金额：${item.a}</label>
					     <br/>
						<label for="">时间：${item.time}</label>
						<br/>
						<label for="">备注：${item.name}</label>
						<br/>
						<label for="">成员：${item.people}</label>` 
			}).join("")
		}
		location.href="../index.html"
	}
	init();
})