<?php
    require_once dirname(__FILE__).'/../config/global.php';
    require_once $cfg['source_root'] . "includes/common_form_includes.php";
    $libhtml->standard_form(array(
        "class_name"=>"Setting",
        "type"=>"edit",
        "title"=>"Edit System Setting"
    ));