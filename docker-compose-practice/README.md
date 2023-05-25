# Docker way

## Docker run MYSQL use volume

```
    docker pull mysql:latest

    docker volume create mysql-volume

    docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=todos -v volume-mysql:/var/lib/mysql --name mysql_container mysql:latest
```

## Use Docker-Compose

```
    chmod -R 777 [volume]

    docker-compose up
    docker-compose up --build
    docker-compose up --build -d
```
