<?php
    $server = 'db';
    $username = 'root';
    $password = 'csym019';

    //name of database
    $schema = 'internet_programming';

    $pdo = new PDO('mysql:dbname=' . $schema . ';host=' . $server, $username, $password,
                [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

if (isset($_POST['submit'])) {
    $stmt = $pdo->prepare('INSERT INTO person (email, birthday, firstname, surname) VALUES (:email, :birthday, :firstname, :surname)');
    $values = [
        'firstname' => $_POST['firstname'],
        'surname' => $_POST['surname'],
        'email' => $_POST['email'],
        'birthday' => $_POST['birthday']
    ];
    $stmt->execute($values);
}
?>

<form action="form.php" method="POST">
    <label>First name:</label>
    <input type="text" name="firstname" />
    <label>Surname:</label>
    <input type="text" name="surname" />
    <label>Email:</label>
    <input type="text" name="email" />
    <label>Birthday:</label>
    <input type="text" name="birthday" />
    <input type="submit" name="submit" value=”Submit” />
</form>