<!DOCTYPE html>
<html lang="en">
<head>
    <title>ok</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />
    <meta name="keywords"
        content="Login Form" />
    <link href="//fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css" type="text/css" media="all" />
    <script src="https://kit.fontawesome.com/af562a2a63.js" crossorigin="anonymous"></script>
</head>
<body>
    <section class="w3l-mockup-form">
        <div class="container">
            <div class="workinghny-form-grid">
                <div class="main-mockup">
                <div class="">
                        <span class=""></span>
                    </div>
                    <div class="w3l_form align-self">
                        <div class="left_grid_info">
                            <img src="3.png" alt="">
                        </div>
                    </div>
                    <div class="content-wthree">
                        <h2>All Done </h2>
                        <p>Account has been registerd please login to continue </p>
                        <form action="index.php" >
                            <button name="welcome"class="btn">OK</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="jquery.min.js"></script>
    <script>
        $(document).ready(function (c) {
            $('.alert-close').on('click', function (c) {
                $('.main-mockup').fadeOut('slow', function (c) {
                    $('.main-mockup').remove();
                });
            });
        });
    </script>

</body>

</html>