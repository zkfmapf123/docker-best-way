# Docker Best Practice roles Devops

![vm](./public/architecture.png)

## Desc

> Community Edition

    - Free

> Enterprice Edition

    - Paid
    - Management Container Runtime
    - Management Orchestration

## Pre-Execute

```
    https://github.com/zkfmapf123/infra-automation
```

## 1. Docker Run Command

```
    docker pull jenkins/jenkins:lts

    docker run -d --name jenkins_conatiner \                // Naming
    -p 8080:8080 -p 50000:50000 \                           // Port Mapping
    -v /root/my-jenkins-data:/var/jenkins_home \            // Volume
    -u root --restart always \                              // User & Restart Option
    jenkins/jenkins:lts                                     // Image
```

## 2. 도커 이미지 허브에 올리는 방법

### Docker Registery

```
    images: docker.io  /      nginx      /         nginx
            <Registry> / < User Account> / < Image Or Repository>

    example)
        docker push zkfmapf123/node-todolist-e2e-test:1.0
```

### Private Docker Registry

- <a href="https://hub.docker.com/_/registry"> Docker Registry </a>

```
    docker run -d -p 5000:5000 --name registry registry:2

    docker images tag my-image localhost:5000/my-image

    docker push localhost:5000/my-image

    docker pull localhost:5000/my-image (in localhost)
    docker pull 192.168.56.100:5000/my-image (other host)
```

### push image to docker hub

```

    // 1. 도커 로그인
    docker login

    // 2. 이미지 생성
    docker build . -f [Docker path] -t [Image Name]
    docker build . -f Dockerfile -t simple_app

    // 3. 이미지 태그 attach
    docker tag [Docker iamge name] [docker hub id]/[docker image name]:[version]
    docker tag simple_app:latest zkfmapf123/simple_app:1.0

    // 4. docker push [Docker image name]
    docker push zkfmapf123/simple_app:1.0

    // 5. pull docker images
    docker pull zkfmapf123/simple_app:1.0
```

## 3. Docker Engine

- 분리된 컨테이너에서 Docker Container들은 어떻게 통신을 할까?

## ...

- docker images의 용량을 줄이기위해 왠만하면 :alpine 이미지를 쓰자
- alpine이미지는 docker exec -it [docker_container] /bin/bash가 안먹힘 -> /bin/sh
- 현재 나의 컴퓨터는 mac(arm64), ec2 컴퓨터는 ubuntu(x86_64) 환경에 따른 이미지를 생성해야 한다.
