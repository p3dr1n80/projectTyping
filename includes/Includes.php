<?php

    class Includes
    {

        public function insert_head_links(){
            $links = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="public/css/all.css">
            <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">';

            echo $links;
        }


        public function insert_scripts(){
            $scripts = '<script src="public/js/jquery.js"></script>
            <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
            <script src="public/js/all.js"></script>
            <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>';

            echo $scripts;
        }
    }