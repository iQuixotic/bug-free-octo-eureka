<?php

// // All pages here
// class Employee {
//     public function __construct() {
//         $this->postModel = $this->model('Post');
//     }
    
//     // Index page
//     public function index() {
//         $posts = $this->postModel->getPosts();
//         $data = [
//             'title' => 'Blogger', 
//             'description' => 'Simple blog set-up.'
//     ];
//         $this->view('pages/index', $data);
//     }

//     // About page
//     public function about() {
//         $data = [
//             'title' => 'About Us',
//             'description' => 'App to share posts with other users.'
//         ];
//         $this->view('pages/about', $data);
//     }
// }