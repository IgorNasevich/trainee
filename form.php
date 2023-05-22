<?php
$inp = $_GET['ajaxForm__inp'];

switch ($inp){
    case 'hello@1':
        echo '1';
        break;
    default:
        echo 'default';
}
