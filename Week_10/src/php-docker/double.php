<form action="double.php" method="POST">
    <input type="text" name="input1" />

    <input type="submit" value="Submit" name="Submit" />
</form>
<?php
    if(isset($_POST['input1'])){
        echo $_POST['input1'] + $_POST['input1'];
    }


?>