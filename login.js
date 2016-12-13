

function _clickHandler() {
 
    var elements = document.getElementsByClassName("formVal");

                var formData = new FormData();
                for(var i=0; i<elements.length; i++)
                {
                    formData.append(elements[i].name, elements[i].value);
                }
				// Front Validation Here
				
					var email = document.form.username;
					var password = document.form.password;

					if (email.value == "") 
					{
						
			          document.getElementById('errors').innerHTML="Please enter a username";
			          return false;
			        }
			        
			        if (password.value == "") 
					{
						
			          document.getElementById('errors').innerHTML="Please enter a password";
			          return false;
			        }
			        
                var xmlHttp = new XMLHttpRequest();
                    xmlHttp.onreadystatechange = function()
                    {
                        if(xmlHttp.readyState == 4 && xmlHttp.status == 200 && xmlHttp.responseText.trim() != '')
                        {
               				//xmlHttp.responseText
                        	var data = JSON.parse(xmlHttp.responseText);
                            console.log(data.status);
                            sessionStorage.id =data.id;
                           // alert(data.id);
                            //condition after login
                            //data.status

                            if (data.status == "Successfull") {
                              window.location.href="userinfo.html";
			    chrome.browserAction.setPopup({popup: 'userinfo.html'});
                                var email = $("#text").val();
                                var pass = $("#password").val();
                                var id = sessionStorage.id;

                                chrome.storage.sync.set({'email': email});
                                chrome.storage.sync.set({'pass':pass});
                                chrome.storage.sync.set({'id':id});
                               }   else {
                                window.location.href="login.html";
                                chrome.browserAction.setPopup({popup: 'login.html'});  
                               }

                           //store username password in local

                            chrome.storage.sync.get('email', function (result) {
                              var  email = result.email;
                                
                           });
                           

                            
                       	
                        }

                    }
                    xmlHttp.open("post", "http://report.acquaintsoft.com/extension/login/login.php"); 


                    xmlHttp.send(formData); 
                    return false;

}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("test").onclick = _clickHandler;

});



