<form action="multiply.php" method="post">
    <input type="text" name="num1" />
    <input type="text" name="num2" />

    <input type="submit" value="Submit" />
</form>

<?php
    if(isset($_GET['num1'])&isset($_GET['num2'])){
        echo $_GET['num1'] + $_GET['num2'];
    }
    if(isset($_POST['num1'])&isset($_POST['num2'])){
        echo $_POST['num1'] * $_POST['num2'];
    }

?>