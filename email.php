<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'gianclarke@hotmail.com';
$subject = 'LSB Cleaning Website Enquiry';
$content = "
<!doctype html>
<html>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <title>Simple Transactional Email</title>
    <style>
        .container{
            width: 50%;
            background-color: white;
            margin: 0 auto;
            padding: 20px;
        }
        body{
            background-color: silver;
            font-size: 20px;
            font-family: Arial;
        }
        span{
            display: block;
            padding-top: 10px;
        }
        table{


        }
        td{
           padding-bottom: 20px;
        }
        th{
            vertical-align: top;
            text-align: right;
            padding-right: 10px;
        }
        h2{
            text-align: center;
        }
    </style>
</head>
<body>
<div class='container'>
    <h2>LSB Cleaning Website Enquiry</h2>
    <table>
        <tr>
            <th>Name: </th>
            <td>$name</td>
        </tr>
        <tr>
            <th>Phone: </th>
            <td>$phone</td>
        </tr>
        <tr>
            <th>Email: </th>
            <td>$email/td>
        </tr>
        <tr>
            <th>Message: </th>
            <td>$message</td>
        </tr>
    </table>
</div>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: $email' . "\r\n";

mail($to,$subject,$content,$headers);

?>