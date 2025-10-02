<?php
require_once __DIR__ . '/config/db.php';     // correcto: apunta a /config/db.php
require_once __DIR__ . '/routes/routes.php'; // correcto: apunta a /routes/routes.php

$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

handleRequest($requestUri, $requestMethod);
