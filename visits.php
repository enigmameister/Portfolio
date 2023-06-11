<?php

$file = 'counter.txt'; // file PATH

if(file_exists($file)) // read the file
{
    $visit = file_get_contents($file); 
    $visit = intval($visit); // convert to int
}

else $visit = 0;

$visit++;

file_put_contents($file, $visit);

echo $visit;

?>