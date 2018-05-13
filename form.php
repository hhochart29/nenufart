<?php

$data = json_decode(file_get_contents("php://input"));

$errors = [];
if ( !$data->name || $data->name === '') {
    $errors['name'] = "Vous n'avez pas saisi votre nom";
}

if ( !$data->email || $data->email === '' || !filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    $errors['mail'] = "Vous n'avez pas saisi un email valide";
}

if ( !$data->message || $data->message === '' || $data->message == 'Votre message') {
    $errors['message'] = "Vous n'avez pas saisi de message";
}

if ( !empty($errors)) {
    echo json_encode($errors);
} else {
    $headers = 'FROM : '.$data->email;
    $message = 'Nom : '.$data->name;
    $message .= ' '.$data->message;
    mail('h.hochart29@gmail.com', 'Formulaire de contact', $message, $headers);
    echo json_encode(['success' => 'Votre mail a bien été envoyé!']);
}