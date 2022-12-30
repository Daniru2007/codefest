<?php
    session_start();
    if (isset($_SESSION['SESSION_EMAIL'])) {
        header("Location: welcome.php");
        die();
    }
    include 'config.php';
    $msg = "";

    if (isset($_GET['verification'])) {
        if (mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE code='{$_GET['verification']}'")) > 0) {
            $query = mysqli_query($conn, "UPDATE users SET code='' WHERE code='{$_GET['verification']}'");
            
            if ($query) {
                $msg = "<div class='alert alert-success'>Account verification has been successfully completed.</div>";
                header("Location: ok.php");
            }
        } else {
            header("Location: index.php");
        }
    }

    if (isset($_POST['submit'])) {
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, md5($_POST['password']));

        $sql = "SELECT * FROM users WHERE email='{$email}' AND password='{$password}'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) === 1) {
            $row = mysqli_fetch_assoc($result);

            if (empty($row['code'])) {
                $_SESSION['SESSION_EMAIL'] = $email;
                header("Location: welcome.php");
            } else {
                $msg = "<div class='alert alert-info'>First verify your account and try again.</div>";
            }
        } else {
            $msg = "<div class='alert alert-danger'>Email or password do not match.</div>";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>login</title>
    <link rel="stylesheet" href="lol.css" type="text/css" media="all" />

</head>
<body>
<div class="login-box">
          <h2>Login</h2>
                    <form>
                        <p>Let's login to our site i would be easy for you </p>
                        <?php echo $msg; ?>
                        <form action="" method="post">
                        <div class="user-box">
                            <input type="email" class="email" name="email"  required>
                            <label>email</label>
                            </div>
                            <div class="user-box">
                            <input type="password" class="password" name="password" style="margin-bottom: 2px;" required>
                            <label>password</label>
                            </div>
                            <p><a href="forgot-password.php" style="margin-bottom: 15px; display: block; text-align: right;">Forgot Password?</a></p>
                    
                            <button name="submit"  type="submit" lass="btn" type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                             <span></span>
                             Submit
                          </button>
                        </form>
                        <div class="social-icons">
                            <p style="margin-bottom: 15px; display: block; text-align: right;">Create Account! <a  href="register.php" >Register</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</body>
</html>