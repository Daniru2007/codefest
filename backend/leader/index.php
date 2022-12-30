<!DOCTYPE html>
<html lang="zxx">
<head>
    <title>score
	</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />
    <meta name="keywords"
        content="" />
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
                    <div class="w3l_form align-selfs">
                        <div class="left_grid_info">
						</div>
                    </div>
                    <div class="content-wthree">
		                   <h2>leaderboard</h2>
		 <table>
			<tr>
				<th>Rank</th>
				<th>Name</th>
				<th>L-points</th>
			</tr>

			<?php
$con = mysqli_connect("localhost",
		"root", "", "leaderboard");
$result = mysqli_query($con, "SELECT userName,
marks FROM leaderboard ORDER BY marks DESC");
$ranking = 1;
if (mysqli_num_rows($result)) {
	while ($row = mysqli_fetch_array($result)) {
				
		echo "
		<tr> 
		<td>{$ranking}</td>
		<td>{$row['userName']}</td>
		<td>{$row['marks']}</td>
		<tr>";
		$ranking++;
	}
}
?>

</table>
</body>
</html>