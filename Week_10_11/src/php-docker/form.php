<form action="form.php" method="post">
    <li><label for="firstname">First Name   </label><input type="text" name="firstname" /></li> 
    <li><label for="surname">Surname       </label><input type="text" name="surname" /></li>
    <li><label for="emailaddress">Email Address    </label><input type="text" name="emailaddress" /></li>
    <li><label for="faviroutecolor">Favouroute Colour </label>
    <select name="faviroutecolor" />
        <option value="">Choose An Option</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
    </select></li>
    <li><label for="address">Address </label><textarea name="address" cols="30" rows="10"></textarea></li>
    <li><input type="submit" value="Submit"></li>
</form>

<?php
    //print_r($_POST);
    if(isset($_POST['firstname'])){
        echo '<p><b>First Name: </b>' . $_POST['firstname'] . '</p>';
    }
    if(isset($_POST['surname'])){
        echo '<p><b>Surname: </b>' . $_POST['surname'] . '</p>';
    }
    if(isset($_POST['emailaddress'])){
        echo '<p><b>Email Address: </b>' . $_POST['emailaddress'] . '</p>';
    }
    if(isset($_POST['faviroutecolor'])){
        echo '<p><b>Faviroute Color: </b>' . $_POST['faviroutecolor'] . '</p>';
    }
    if(isset($_POST['address'])){
        echo '<p><b>Address: </b>' . $_POST['address'] . '</p>';
    }
?>