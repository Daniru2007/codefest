<?php
$msg = "";
include 'config.php';
if (isset($_GET['reset'])) {
    if (mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE code='{$_GET['reset']}'")) > 0) {
        if (isset($_POST['submit'])) {
            $password = mysqli_real_escape_string($conn, md5($_POST['password']));
            $confirm_password = mysqli_real_escape_string($conn, md5($_POST['confirm-password']));

            if ($password === $confirm_password) {
                $query = mysqli_query($conn, "UPDATE users SET password='{$password}', code='' WHERE code='{$_GET['reset']}'");

                if ($query) {
                    header("Location: index.php");
                }
            } else {
                $msg = "<div class='alert alert-danger'>Password and Confirm Password do not match.</div>";
            }
        }
    } else {
        $msg = "<div class='alert alert-danger'>Reset Link do not match.</div>";
    }
} else {
    header("Location: forgot-password.php");
}
?>
<!DOCTYPE html>
<html lang="zxx">
<head>
    <title>change password</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />
    <meta name="keywords"
        content="Login Form" />
    <link href="//fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="lol.css" type="text/css" media="all" />
    <script src="https://kit.fontawesome.com/af562a2a63.js" crossorigin="anonymous"></script>
</head>
<body>
<div class="login-box">
            <h2>Login</h2>
                    <form>
                        <h2>Change Password</h2>
                        <p>From here you can change your password </p>
                        <?php echo $msg; ?>
                        <form action="" method="post">
                        <div class="user-box">
                            <input type="password" class="password" name="password" required>
                            <label>password</label>
                            </div>
                            <div class="user-box">
                            <input type="password" class="confirm-password" name="confirm-password"  required>
                            <label>confirm password</label>
                            </div>
                            <button name="submit"  type="submit" lass="btn" type="submit">
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             Submit
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