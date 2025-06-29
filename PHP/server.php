<?php

if (isset($_POST["name"])) {
    echo "The name is " . htmlspecialchars($_POST["name"]);
}

?>
