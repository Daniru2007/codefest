 <?php

session_start();

if (!isset($_SESSION["SESSION_EMAIL"])) {
    header("Location: index.php");
}
// if the user is not loged in he will be back to login page

include 'config.php';
// db authontiocation

if (isset($_POST["submit"])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $password = mysqli_real_escape_string($conn, md5($_POST["password"]));
    $cpassword = mysqli_real_escape_string($conn, md5($_POST["cpassword"]));

    if ($password === $cpassword) {
        $photo_name = mysqli_real_escape_string($conn, $_FILES["photo"]["name"]);
        $photo_tmp_name = $_FILES["photo"]["tmp_name"];
        $photo_size = $_FILES["photo"]["size"];
        $photo_new_name = rand() . $photo_name;

        if ($photo_size > 5242880) {
            echo "<script>alert('Photo is very big. Maximum photo uploading size is 5MB.');</script>";
        } else {
            $sql = "UPDATE users SET name='$name', password='$password', photo='$photo_new_name' WHERE email='{$_SESSION["SESSION_EMAIL"]}'";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo "<script>alert('Profile Updated successfully.');</script>";
                move_uploaded_file($photo_tmp_name, "uploads/". $photo_new_name);

            } else {
                echo "<script>alert('Profile can not Updated.');</script>";
                echo  $conn->error;
            }
        }
    } else {
        echo "<script>alert('Password not matched. Please try again.');</script>";
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="css/lol2.css">
    <title>edit your profile</title>
</head>

<body class="profile-page">
  <div class="boxer">
    <div class="wrapper">
        <h2>Edit your profile</h2>
        <form action="" method="post" enctype="multipart/form-data">
            <?php

            $sql = "SELECT * FROM users WHERE email='{$_SESSION["SESSION_EMAIL"]}'";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
            ?>
                                </div>
          <div class="right">
            <img src="uploads/<?php echo $row["photo"]; ?>"width="200px" height="auto" alt="">
        </div>
    
                    <div class="inputBox">
                    <label>name</label>
                        <input type="text" id="name" name="name" placeholder="Name" value="<?php echo $row['name']; ?>" required>
                    </div>
                    <div class="inputBoxbecible">
                    <label>email</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" value="<?php echo $row['email']; ?>" disabled required>
                    </div>
                    <div class="inputBox">
                    <label>password</label>
                        <input type="password" id="password" name="password" placeholder="Password" value="<?php echo $row['password']; ?>" required>
                    </div>
                    <div class="inputBox">
                    <label>retype your password </label>
                        <input type="password" id="cpassword" name="cpassword" placeholder="Confirm Password" value="<?php echo $row['password']; ?>" required>
                    </div>
                    <div class="inputBoxfile" style="  width: 100%; padding: 10px 0;font-size: 16px; border-radius:100%; color: #fff;;margin-bottom: 30px; ">
                        <label for="photo">Photo</label>
                        <input type="file" accept="image/*" id="photo" name="photo" required>
                    </div>
            <?php
                }
            }

            ?>
            <div>
                <button type="submit" name="submit" class="btn">Update Profile</button>
                <a href="http://localhost:5173/" className="link home-main__link"><h3>Home</h3></a>
                <a href="logout.php">Logout</a>
                                            <!-- logout function  -->
            </div>
        </form>
    </div>  
    </div>

</body>

</html>