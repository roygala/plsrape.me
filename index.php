<!DOCTYPE html>
<html ondragstart="return false;" oncontext="return false;" onselectstart="return false;" oncontextmenu="return false;">

	<head>
		<title>Mayhem</title>
		<link rel="stylesheet" type="text/css" href="./src/css/style.css" />
		<link rel="stylesheet" type="text/css" href="./src/css/lobibox.min.css" />
		<link rel="stylesheet" type="text/css" href="./src/css/font-awesome.min.css" />
		<link rel="icon" type="image/jpeg" href="./src/media/icon.jpg" />
		<script src="./src/js/jquery-3.2.1.min.js"></script>
		<script src="./src/js/jquery.color-2.1.2.min.js"></script>
		<script src="./src/js/lobibox.min.js"></script>
		<script src="./src/js/mayhem.js"></script>
		<!--[if lt IE 9]
		<script>
			document.createElement('video');
		</script>
		<![endif]-->
	</head>

	<body>
		<video playsinline autoplay loop poster="./src/media/video.png" id="bgvid">
			<source src="./src/media/8bit.mp4" type="video/mp4" />
			<script>
				$("video#bgvid").prop("volume", 0);
			</script>
		</video>
		<audio autoplay loop id="bgmusic">
			<source src="./src/media/8bit.mp3" type="audio/mp3" />
			<script>
				$("audio#bgmusic").prop("volume", 0.3);
			</script>
		</audio>
		<center><div class="centered" id="pageInfo">
			<span class="mayhem">Mayhem</span> <span class="mayhemSmall">//your #1 HvH tranny</span><br />
			<div class="links">
				// <span class="discord">DISCORD:</span> <span class="discordTag">MAYHEM#0001</span> <span class="dot">•</span> 
				<a href="https://rifk7.com/forum/index.php?action=profile;u=829" target="_blank">RIFK7</a> \\
			</div>
			<div class="links2">
				// <a href="http://steamcommunity.com/profiles/76561198236628206" target="_blank">STEAM</a> <span class="dot">•</span> 
				<a href="https://youtube.com/user/roygala" target="_blank">YOUTUBE</a> <span class="dot">•</span> 
				<a href="#" id="downloadContainer">CONFIGS</a> <span class="dot">•</span> 
				<a href="steam://connect/5.196.142.77:27015">HVH SERVER</a> \\
			</div>
		</div></center>
		<!--<div class="mayhemSmall">//your #1 HvH tranny</div>-->
	</body>

</html>