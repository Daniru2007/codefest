<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    session_start();
    if (isset($_SESSION['SESSION_EMAIL'])) {
        $email = $_POST["email"];
        $_SESSION['otp'] = $otp;
        $_SESSION['uniqueid'] = $uniqueid;
        $_SESSION['mail'] = $email;
        $password = $_POST["password"];
        header("Location: welcome.php");
        die();
    }
    require 'vendor/autoload.php';

    include 'config.php';
    //db connection
    $msg = "";

    if (isset($_POST['submit'])) {
                //VARIABLE

        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $uniqueid = rand(111111,999999);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, md5($_POST['password']));
        $confirm_password = mysqli_real_escape_string($conn, md5($_POST['confirm-password']));
        $code = mysqli_real_escape_string($conn, md5(rand()));
        $otp = rand(1111,9999);


        if (mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE email='{$email}'")) > 0) {
            $msg = "<div class='alert alert-danger'>{$email} - This email address has been already exists.</div>";

            //exsisting account detection
        } else {
            if ($password === $confirm_password) {
                $sql = "INSERT INTO users ( uniqueid , name, email, password, code) VALUES ('{$uniqueid}','{$name}', '{$email}', '{$password}', '{$code}')";
                $result = mysqli_query($conn, $sql);

                if ($result) {
                    echo "<div style='display: none;'>";
                    $mail = new PHPMailer(true);

                    try {
                        //Server settings
                        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
                        $mail->isSMTP();                                            //Send using SMTP
                        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
                        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                        $mail->Username   = 'mahasonatadennam@gmail.com';                     //SMTP username
                        $mail->Password   = 'mrkfdqwjusosftok';                               //SMTP password
                        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                        //Recipients
                        $mail->setFrom('mahasonatadennam@gmail.com');
                        $mail->addAddress($email);

                        //Content
                        $mail->isHTML(true);                                  //Set email format to HTML
                        $mail->Subject = 'no reply';
                        $mail->Body    = 'Here is the verification link <b><a href="http://localhost/3/?verification='.$code.'">http://localhost/3/?verification='.$code.'</a></b>';
                            // this is verification link that we send to your mail
                        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                        $mail->send();
                        echo 'Message has been sent';
                    } catch (Exception $e) {
                        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                    }
                    echo "</div>";
                    $msg = "<div class='alert alert-info'>We've send a verification link on your email address.</div>";
                } else {
                    $msg = "<div class='alert alert-danger'>Something wrong went.</div>";
                }
            } else {
                $msg = "<div class='alert alert-danger'>Password and Confirm Password do not match</div>";
            }

            // this above code has been copyed from php mailer git and we made some changes also  
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>register</title>
    <link rel="stylesheet" href="css/lol.css" type="text/css" media="all" />
</head>
<body>
<div class="login-box">
                        <h2>Register Now</h2>
                        <!-- header  -->
                        <p>Register with us its only taking 2 - 3 min to register </p>
                            <!-- paragrapf  -->
                        <?php echo $msg; ?>
                        <form action="" method="post">
                        <div class="user-box">
                            <input type="text" class="name" name="name"  value="<?php if (isset($_POST['submit'])) { echo $name; } ?>" required>
                            <label>Name</label>
                                                        <!-- name of ths user  -->
                            </div>
                            <div class="user-box">
                            <input type="email" class="email" name="email"  value="<?php if (isset($_POST['submit'])) { echo $email; } ?>" required>
                            <label>Email</label>
                            </div>
                                                        <!-- mail  -->
                            <div class="user-box">
                            <input type="password" class="password" name="password" required>
                            <label>password</label>
                                                        <!-- password  -->
                            </div>
                            <div class="user-box">
                            <input type="password" class="confirm-password" name="confirm-password"  required>
                            <label>confirm-password</label>
                                                        <!-- confirm password  -->
                            </div>
                            <div class="btm">
                            <button name="submit"  type="submit">
                             <span></span>
                            <span></span>
                          <span></span>
                           <span></span>
                              Submit
                            </button>
                <!-- animating login button-->
                        </form>
                        <div class="social-icons">
                            <p>Have an account! <a href="index.php">Login</a>.</p>
                            <!-- redirector to login page  -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
</body>

<!-- this is the html part act as frontend  -->

</html>