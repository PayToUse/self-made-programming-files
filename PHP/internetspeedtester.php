<?php

// Set the time limit to indefinite execution
set_time_limit(0);

// Get the start time
$startTime = time();

// Create a file of 10MB
$fileSize = 10 * 1024 * 1024;
$fileName = 'test_file_'.$startTime.'.dat';
$fileHandle = fopen($fileName, 'w');
for($i=0;$i<$fileSize;$i++) {
    fwrite($fileHandle, '0');
}
fclose($fileHandle);

// Upload the file
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://example.com/upload.php');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, array('file' => '@'.$fileName));
$response = curl_exec($ch);
curl_close($ch);

// Get the end time
$endTime = time();

// Calculate the speed
$timeDiff = $endTime - $startTime;
$speed = $fileSize/$timeDiff;

// Remove the file
unlink($fileName);

// Print the speed
echo '<p>Your Internet speed is '.round($speed/1024/1024).'MB/s</p>';

?> 
