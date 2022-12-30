<?php
session_start();
if (isset($_SESSION['SESSION_EMAIL'])) {
    header("Location: welcome.php");
    die();
}
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
include 'config.php';
$msg = "";
if (isset($_POST['submit'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $otp = mysqli_real_escape_string($conn, md5(rand()));
    if (mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE email='{$email}'")) > 0) {
        $query = mysqli_query($conn, "UPDATE users SET otp='{$otp}' WHERE email='{$email}'");
        if ($query) {        
            echo "<div style='display: none;'>";
            $mail = new PHPMailer(true);
            try {
                //Server settings
                $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = 'rockyio207nethnu@gmail.com';                     //SMTP username
                $mail->Password   = 'yqjiwzdmrmrcdrww';                               //SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                //Recipients
                $mail->setFrom('rockyio207nethnu@gmail.com');
                $mail->addAddress($email);

                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = 'no reply';
                $mail->Body    = 'Here is the verification link <b><a href="http://localhost/login/change-password.php?reset='.$code.'">http://localhost/login/change-password.php?reset='.$code.'</a></b>';

                $mail->send();
                echo 'Message has been sent';
            } catch (Exception $e) {
                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }
            echo "</div>";        
            $msg = "<div class='alert alert-info'>We've send a verification link on your email address.</div>";
        }
    } else {
        $msg = "<div class='alert alert-danger'>$email - This email address do not found.</div>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Verify Account</title>
    <link rel="stylesheet" href="lol.css" type="text/css" media="all" />
</head>
<body>
<div class="login-box">
             <h2>Login</h2>
                   <form>
                        <h2>Forgot Password</h2>
                        <p>OOPS! dont worry we got this </p>
                        <?php echo $msg; ?>
                        <form action="" method="post">
                        <div class="user-box">
                            <input type="email" class="email" name="email"  required>
                            <label>Email</label>
                            </div>
                            <p><a href="lost_ac.php" style="margin-bottom: 15px; display: block; text-align: right;">No mail?</a></p>
                            <button name="submit"  type="submit" lass="btn" type="submit">
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                            Send Reset Link
                            </button>
                        </form>
                        <div class="social-icons">
                            <p>Back to! <a href="index.php">Login</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</body>
</html>