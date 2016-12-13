<?php
class Connection
{
		public $host;
		public $username;
		public $password;
		public $db;
		public $con;
		
		function __construct()
		{
			$this->host = 'localhost';
			$this->username = 'root';
			$this->password = 'root';
			$this->db = 'report_system';
			$this->con = mysqli_connect($this->host,$this->username,$this->password,$this->db);

			if (mysqli_connect_errno()) {
			    printf("Connect failed: %s\n", mysqli_connect_error());
			    exit();
			}
			
			//mysqli_select_db($this->db);
		}
		/*
		public function connect($host,$username,$password,$db)
		{
			$this->host = $host;
			$this->username = $username;
			$this->password = $password;
			$this->db = $db;
			$this->con = mysqli_connect($this->host,$this->username,$this->password);
			mysqli_select_db($this->db);
		}
		*/
}
$objCon = new Connection();

?>