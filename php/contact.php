<?php
    session_start();
    $flash_message = '';
    $errors = array();
    
    if($_SESSION['flash_message'] !== null){
        $flash_message = $_SESSION['flash_message'];
        $_SESSION['flash_message'] = null;
    }
    if($_SESSION['errors'] !== null){
        $errors = $_SESSION['errors'];
        $_SESSION['errors'] = null;
    }

?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/My_Portfolio/portfolio.5.css">
    <title>My portfolio</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="/My_Portfolio/js/Menu.js"></script>
  </head>
  <body>
    <div id="content-wrapper">
      <header>
        <div id="pc-menu">
          <div class="nav">
            <ul>
              <li><a href="/My_Portfolio/index.html">Home</a></li>
              <li><a href="/My_Portfolio/profile.html">Profile</a></li>
              <li><a href="/My_Portfolio/My_skills.html">My skills</a></li>
              <li><a href="/My_Portfolio/work.html">Works</a></li>
              <li><a href="/My_Portfolio/php/contact.php">Contact</a></li>
            </ul>
          </div>
        </div>
        <div id="sp-menu">
          <span class="material-icons" id="open" >menu</span>
          <span class="material-icons" id="close">close</span>
          <div id="overlay">
            <div class="nav">
              <ul>
                <li><a href="/My_Portfolio/index.html">Home</a></li>
                <li><a href="/My_Portfolio/profile.html">Profile</a></li>
                <li><a href="/My_Portfolio/My_skills.html">My skills</a></li>
                <li><a href="/My_Portfolio/work.html">Works</a></li>
                <li><a href="/My_Portfolio/php/contact.php">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div id="container">
        <h3 class="content-title">Contact Me</h3>
        <div class="my-message">
          <p>ポートフォリオWebサイト、楽しんで頂けましたか？なにかコメントがありましたら下記のフォームをご利用ください。</p>
        </div>
            <div class="row">
                <h2 class="col-sm-12 text-center"><?= $flash_message ?></h2>
            </div>
            <div class="row">
                <ul>
                    <?php foreach($errors as $error): ?>
                    <li><?= $error ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <form action="send.php" method="POST" class="text-center">
                      <!-- 1行 -->
                      <div class="form-group row">

                          <div class="col-sm-8 mb-3">
                              <input type="text" class="form-control" name="name" placeholder="氏名">
                          </div>
                      </div>
                      <!-- 1行 -->
                      <div class="form-group row">
                          <div class="col-sm-8 mb-3">
                              <input type="email" class="form-control" name="email" placeholder="メールアドレス">
                          </div>
                      </div>
                      <!-- 1行 -->
                      <div class="form-group row">
                          <div class="col-sm-8 mb-3">
                              <input type="text" class="form-control" name="title" placeholder="タイトル">
                          </div>
                      </div>
                      <!-- 1行 -->
                      <div class="form-group row">

                          <div class="col-sm-12 mb-4">
                              <textarea name="message" class="form-control" placeholder="内容" style="height: 100px"></textarea>
                          </div>
                      </div>
                      <!-- 1行 -->
                      <div class="form-group row">
                          <div class="offset-2 col-8">
                              <button type="submit" class="btn btn-primary">送信</button>
                          </div>
                      </div>
            </form>
      </div>
    </div>
  </body>
</html>