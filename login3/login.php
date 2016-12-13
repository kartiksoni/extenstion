<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
   	session_start();
   	include('db.php');

   

          global $objCon;
          $email = mysqli_real_escape_string($objCon->con,$_REQUEST['username']);
          $pass = $_REQUEST['password'];
          
          $email = stripslashes($email);
          $email = mysqli_real_escape_string($objCon->con,$email);
          

   	    	$_SESSION['username'] = $_POST['username'];
   	    	$_SESSION['password'] = $_POST['password'];

   	    	if (!empty($_POST['username']) 
               && !empty($_POST['password']) )
   	    	{
   	        $login = "SELECT *
                    FROM employee 
                    WHERE email = '". $email ."' 
                    AND password = '". md5($pass) ."' 
                    AND is_deleted != 'y' 
                    AND locked = 'n'
                    AND status = 'active'";


            
             $result = mysqli_query($objCon->con,$login);

            $row = mysqli_fetch_assoc($result);
            
                
              if ($row >0) {
                //print_r($row['email']);exit;
                  $email = $row['email'];
                  $password = $row['password'];
                  $succ['id'] = $row['id'];
                  $succ['status'] = "Successfull";
                  $succ['msg'] = "Login Successfully";
                  echo json_encode($succ);exit;        
              }
              else
                 {
                    $err['status'] = "Error";
                    $err['msg'] = "Login Failed";
                    echo json_encode($err);exit;
                 }
   	    	
   	    }
   	?>
   	 