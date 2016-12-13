console.log("I am project.js");
console.log(location.hostname);

document.addEventListener('DOMContentLoaded', function() {
document.body.style.height = '0px';
document.body.style.minHeight = '0px';
document.documentElement.style.height = '0px';
document.documentElement.style.minHeight = '0px';
   var xmlHttp = new XMLHttpRequest();
         xmlHttp.onreadystatechange = function()
            {	
             if(xmlHttp.readyState == 4 && xmlHttp.status == 200 && xmlHttp.responseText.trim() != '')
                {
              xmlHttp.responseText
                  var data = JSON.parse(xmlHttp.responseText);
                  //console.log(data);
          
          //for (var key in data)
                    //{
                     //if (data.hasOwnProperty(key))
                      //{
                $("#myproject").html(data);
                
                //var data1 = data[key].passwords;
                //console.log(data1);
                       // for (var key1 in data1){
                          //if (data1.hasOwnProperty(key1)){
                              
                              //chrome.storage.sync.set({'url':data1[key1].url});
            //  }
              //}
            //}
         // }
                    
                }
            }
 
                    id = 0;
                        chrome.storage.sync.get('id', function (result) {
                                id = result.id;
                                sessionStorage.id1 = id;
                               // alert(sessionStorage.id);
                               // alert(result.id);

                                xmlHttp.open("post", "http://report.acquaintsoft.com/extension/login/projects.php?id="+id); 

                    xmlHttp.send(); 
                            });
                    
});
chrome.storage.local.get('userName', function (result) {
                               var userName = result.userName;
                                sessionStorage.username1 = userName;
                                //alert(sessionStorage.username1);

chrome.storage.local.get('password', function (result1) {
                               var pass = result1.password;
                                sessionStorage.pwd1 = pass;
                                //alert(pass);

chrome.storage.local.get('url', function (result) {
                               var url = result.url;
                               //alert(url);
                                sessionStorage.url1 = url;
                                
            var url = sessionStorage.url1;
           
            var lurl = location.pathname;
            var lurl1 = location.search;
            var final = url.substr(url.lastIndexOf('/') + 1);
          

             if(final == "")
            {
              var final1 = url.split('/'),
              final = final1[final1.length-2];
            }
         
            // Start Vidisha

            var final3 = url.substr(url.lastIndexOf(':') + 1);

            final3 =  final3.slice(0, -1);

            if(!isNaN(final3)){
              final = 'cpanel';

            }
            // End Vidisha
          switch(final)
          {  

            
          //cpanel
          case "cpanel":  
          document.getElementById("user").value = sessionStorage.username1;
          document.getElementById("pass").value= sessionStorage.pwd1;
          if(lurl == "/logout/")
          {
             
          }else{
          document.getElementById('login_form').submit();
           }
          break;

           //wordpress
           case "wp-admin":
          document.getElementById("user_login").value =  sessionStorage.username1;
          document.getElementById("user_pass").value=sessionStorage.pwd1;
          if(lurl1 == "?loggedout=true")
          {
             
          }else{
         document.getElementById('loginform').submit();
           }
          
          break;

          //Report system
          case "index.php":
           document.getElementById("txtEmail").value = sessionStorage.username1;
           document.getElementById("txtPass").value = sessionStorage.pwd1;
          jQuery('#submit').trigger( "click" );

          break;

          //Report system admin
          case "project_info.php?proj_id=292":
           document.getElementById("email").value = sessionStorage.username1;
           document.getElementById("password").value = sessionStorage.pwd1;
          jQuery('#submit').trigger( "click" );
  
          break;

          //Magento
          case "admin":
           document.getElementById("username").value = sessionStorage.username1;
           document.getElementById("login").value = sessionStorage.pwd1;
           document.getElementById("login-form").submit();

           break;

            //Magento
          case "admin123":
           document.getElementById("username").value = sessionStorage.username1;
           document.getElementById("login").value =sessionStorage.pwd1;
           document.getElementById("login-form").submit();

           break;

            //Upwork
          case "login":
           document.getElementById("login_username").value = sessionStorage.username1;
           document.getElementById("login_password").value = sessionStorage.pwd1;
           jQuery('.btn').trigger( "click" );
           
           break;
        }
});
});
});

                