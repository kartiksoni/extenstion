console.log("I am background.js");
//chrome.browserAction.onClicked.addListenr(function(){
//});
 
$(document).ready(function(){
	$('body').on('click', 'a', function(){
	$('#clickdata').html(this);
	var clicktitle = $('#clickdata > a > div').text();
	var clickid = $('#clickdata > a > div').attr('id');
	var clickuser = $('#clickdata > a > div').attr('data-user');
	var clickpass = $('#clickdata > a > div').attr('data-pass');
	var clickurl = $('#clickdata > a > div').attr('data-url');
	//alert(clickurl+'****'+clickid+'****'+clickuser+'****'+clickpass);
	//return false;
     //console.log(clickuser);
	//sessionStorage.username1 = userName;
	chrome.storage.local.set({'url':clickurl});
	chrome.storage.local.set({'title':clicktitle});
	chrome.storage.local.set({'userName': clickuser});
	chrome.storage.local.set({'password':clickpass});
	chrome.tabs.query({active:true, currentWindow: true}, function(arrayOfTabs)

              { 
              	var currentTabURL = arrayOfTabs[0].url;
                var currentTabId = arrayOfTabs[0].id; 
                var n = currentTabURL.startsWith(clickurl);
               if (n)
                {
            	chrome.tabs.reload(arrayOfTabs[0].id);
                 }
                 else
                 {
                 chrome.tabs.create({active:true,url:clickurl});
                 }
               
                       //
                  
                        //var n = clickurl.localeCompare(sessionStorage.url1);
                        
                      // if (window.location.href  !== clickurl){
                        	//chrome.tabs.create({active:true,url:clickurl});
                        	
                        /*}
                        else
                        {
	                         chrome.tabs.remove(arrayOfTabs[0].id);
                        }*/
    //chrome.tabs.remove(arrayOfTabs[0].id);
           chrome.tabs.executeScript(arrayOfTabs[0].id,{file:"project.js"});

       });
       
 
    //chrome.tabs.executeScript(null,{file:"project.js"});
    //alert("works");
	
  
	});
 return false;
});
