<?php

$start = microtime(true); // start time

// loop from 1 to 1 billion
for ($i = 1; $i <= 1000000000; $i++) {
  // do nothing, just count
}

$end = microtime(true); // end time
$elapsedTime = $end - $start; // elapsed time in seconds

echo "Elapsed time: $elapsedTime seconds"; 
