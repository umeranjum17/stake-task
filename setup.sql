CREATE DATABASE IF NOT EXISTS stake
GRANT ALL PRIVILEGES ON stake.* TO 'someuser'@'%' IDENTIFIED BY 'mysql';
GRANT ALL PRIVILEGES ON stake.* TO 'someuser'@'localhost' IDENTIFIED BY 'mysql';
USE stake