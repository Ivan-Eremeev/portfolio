<?php
if ((isset($_POST['email']) && isset($_POST['message']) != "")) { //Проверка отправилось ли наше поля name и не пустые ли они
  $to = 'ivan.eremeev@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
  $subject = 'Письмо с портфолио';
  $message = '
  <html>
    <head>
      <title>' . $subject . '</title>
    </head>
    <body>
      <p>Почта: ' . $_POST['email'] . '</p>
      <p>Сообщение: ' . $_POST['message'] . '</p>
    </body>
  </html>';
  $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
  $headers .= "From: Portfolio <".$to.">\r\n"; //Наименование и почта отправителя
  if (mail($to, $subject, $message, $headers)) {
    echo 'success';
  } else {
    echo 'error';
  }
}?>
