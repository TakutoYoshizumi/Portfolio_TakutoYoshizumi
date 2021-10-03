<?php
    // (M)
    class Message{
        public $name;
        public $email;
        public $title;
        public $message;
        public $date;
        
        public function __construct($name="", $email="", $title="", $message=""){
            $this->name = $name;
            $this->email = $email;
            $this->title = $title;
            $this->message = $message;
        }
        //バリデーション
        public function validate(){
            $errors = array();
            if($this->name === ''){
                $errors[] = 'お名前を入力してください';
            }
            if($this->email === ''){
                $errors[] = 'メールアドレスを入力してください';
            }else if(preg_match('/[\w\-._]+@[\w\-._]+\.[A-Za-z]+/', $this->email) === 0){
                $errors[] = 'メールアドレスを正しく入力してください';
            }
            if($this->title === ''){
                $errors[] = 'タイトルを入力してください';
            }
            if($this->message === ''){
                $errors[] = '問い合わせ内容を入力してください';
            }
            
            return $errors;
        }
    }