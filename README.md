# Docker Best Practice roles Devops

![vm](./public/architecture.png)

## Docker Run Command

```
    docker pull jenkins/jenkins:lts

    docker run -d --name jenkins_conatiner \                // Naming
    -p 8080:8080 -p 50000:50000 \                           // Port Mapping
    -v /root/my-jenkins-data:/var/jenkins_home \            // Volume
    -u root --restart always \                              // User & Restart Option
    jenkins/jenkins:lts                                     // Image
```

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

## ...

- docker images의 용량을 줄이기위해 왠만하면 :alpine 이미지를 쓰자
- alpine이미지는 docker exec -it [docker_container] /bin/bash가 안먹힘 -> /bin/sh
