<!DOCTYPE html>
<html lang="en">
<head>
    <title>ok</title>
    <link rel="stylesheet" href="lol.css" type="text/css" media="all" />
</head>
<body>
<div class="login-box">
    <h2>All Done </h2>
        <p>Account has been registerd please login to continue </p>
        <img src="R.png"width="200" height="150"style="style="text-align:center;   alt="centered image">
        <form action="index.php" >
        <button href="index.php">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
       </button>
        </form>
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