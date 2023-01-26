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
        //this function is for verification process this is checking database and finding the code raw then
        // if the user verified his account then code will update to 0 it will be null so that how i made verification process
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

    // this is the login page main thing ths one will check if the user verified his account or not if not its print verify your account 
    //and checking the password from the database if its not match it will denied the login prosses
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>login</title>
    <meta name="keywords"
        content="Login Form" />
    <link rel="stylesheet" href="css/lol.css" type="text/css" media="all" />
    <script src="https://kit.fontawesome.com/af562a2a63.js" crossorigin="anonymous"></script>
</head>

<body>
<div class="login-box">
<section class="w3l-mockup-form">
        <div class="container">
                <div class="main-mockup">
                    <div class="">
                        <span class=""></span>
                    </div>
                    </div>
                        <h2>Login Now</h2>
                        <p>Let's login to our site i would be easy for you </p>
                        <?php echo $msg; ?>
                        <form action="" method="post">
                        <div class="user-box">
                            <input type="email" class="email" name="email"  required>
                            <label>email</label>
                            </div>
                            <div class="user-box">
                            <input type="password" class="password" id="password" name="password" style="margin-bottom: 2px;" required>
                            <label>password</label>
                            </div>
                            <p><a href="forgot-password.php" style="margin-bottom: 15px; display: block; text-align: right;">Forgot Password?</a></p>
                            <button name="submit" name="submit" class="btn" type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                             <span></span>
                             Login
                          </button>
                        </form>
                        <div class="social-icons">
                            <p>Create Account! <a href="register.php">Register</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>