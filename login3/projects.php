<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
session_start();
include('db.php');
$id = $_REQUEST['id'];


$selQry = "SELECT p.id, p.assigned_emp, p.project_name FROM project p, client c 
        where p.is_deleted='n' && p.status='work_in_progress' && p.client_id = c.id && c.status = 'active' "; 

$result = mysqli_query($objCon->con,$selQry);

$data = array();
$mydata="";
$i = 0;
while($row = mysqli_fetch_assoc($result)){

    $assigned_employee  = trim($row['assigned_emp']); 
    if(!empty($assigned_employee))
    {

         $array_assigned_emp= explode("," ,$assigned_employee);

         if(in_array($id,$array_assigned_emp))
         {
            $mydata.="<ul><li class='project-title'><a class='title-hover'>".$row['project_name']."</a>";
            $data[$row['id']] = array(
                'project'=> $row['project_name'],
        'project_id'=> $row['id']
              );
            //query to fetch all password of project id  = $row['id']
            $selQry2 = "SELECT `title`,`url`,`userName`,`password`,`pro_id` FROM `all_passwords` WHERE `pro_id`='".$row['id']."' "; 
             $result2 = mysqli_query($objCon->con,$selQry2);
  
              while($row2 = mysqli_fetch_assoc($result2))
              {

        
		$mydata.="<ul class='project-detail'>";
        $mydata.="<li><img src='li-img.png'>
        <a href= '".$row2['url']."'>
        <div id='title_".$i."' data-user='".$row2['userName']."' data-pass='".$row2['password']."' data-url='".$row2['url']."'>".$row2['title']."</div>
        </a>";
        $mydata.="<div id='url_".$i."'></div>";
        $mydata.="<div id='user_".$i."'></div>";
        $mydata.="<div id='pwd_".$i."'></div>";
        
        $mydata.="</li>";
        $mydata.="</ul>";  
			
          $i++;
          
          //$data[$row['id']]['passwords'][] = $row2;
              }
          $mydata.="</li>";
          $mydata.="</ul>";      
       

            //loop querty for password
            // $data[$row['id']]['passwords'][] = $row2

            
             
         }
    }
}
$alldata=$mydata;
$alldata .= '<div id="clickdata" style="display:none"></div>';
//echo json_encode($data);
echo json_encode($alldata);

?>
