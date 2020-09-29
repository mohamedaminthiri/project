
			 
			    $(".spinner").click(function(){
			    window.close()
			     window.open("login.html")
			    })

			     $("#log").click(function(){
			    if(($("#compte").val() === "") && ($("#pasword1").val() === "")){
			    $("#c1").show()	
			    $("#p1").show()
			}
			    else{
			    	var count=0; 
			    for(var i=0;i<user.length;i++){
		
			 if(user[i]["rib"] === Number($("#compte").val()) && user[i]["password"] === ($("#pasword1").val()) && user[i]["status"]=== 0){
			          count++;
			          localStorage.setItem("comptes","123")
			             
}	
			}
			if(count>0){
				window.close()
				window.open("user.html")

				
             
			}else{
				window.alert("verify compte is blocked or error information")
			}
		}
			    })

			$("#li1").click(function(){
				if(window.confirm("Are you sure to quit??")){
					window.close()
					window.open("login.html")
				}
			})

			$("#ch1").click(function(){
			  var x = document.getElementById("pasword1");
			  if (x.type === "password") {
			    x.type = "text";
			  } else {
			    x.type = "password";
			  }
			})
			  var c=123456789;

			var user=[{rib:123456789,cin:05905664,name:"Mohamed Amine",balance:10000,lastName:"kthiri",adresse:"Gabes",password:"aaaa123",status:0},
			{rib:123456790,cin:05050505,name:"ahmed",balance:20000,lastName:"rafrafi",adresse:"Bizert",password:"aaaa050505",status:0}

			]

			var operation=[{rib:123456789,type:"versement",date:"24/09/2020",value:150},
			{rib:123456789,type:"versement",date:"20/09/2020",value:150},
			{rib:123456789,type:"versement",date:"24/09/2020",value:200},
			{rib:123456789,type:"versement",date:"27/09/2020",value:2700},
			{rib:123456789,type:"virement",date:"26/09/2020",value:150},
			{rib:123456789,type:"virement",date:"01/09/2020",value:200},
			{rib:123456789,type:"versement",date:"03/09/2020",value:180},
			{rib:123456790,type:"versement",date:"24/09/2020",value:150},
			{rib:123456790,type:"versement",date:"24/09/2020",value:150}

			]


var pay=[{rib:123456789,companyaccount:1230202,
			nbill:0530263,
			amout:320,
			company:"SONEDE",
			date:"20/05/2020"
			},
			{rib:123456789,companyaccount:1230202,
			nbill:0530263,
			amout:320,
			company:"STEG",
			date:"24/05/2020"
			},
			{rib:123456789,companyaccount:1230202,
			nbill:0530263,
			amout:320,
			company:"ORANGE",
			date:"29/05/2020"
			},
      {rib:123456790,companyaccount:1230202,
			nbill:0530263,
			amout:500,
			company:"ORANGE",
			date:"29/05/2020"
			}

			]

