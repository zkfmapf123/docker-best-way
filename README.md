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

## ...

- docker images의 용량을 줄이기위해 왠만하면 :alpine 이미지를 쓰자
- alpine이미지는 docker exec -it [docker_container] /bin/bash가 안먹힘 -> /bin/sh
- 현재 나의 컴퓨터는 mac(arm64), ec2 컴퓨터는 ubuntu(x86_64) 환경에 따른 이미지를 생성해야 한다.
