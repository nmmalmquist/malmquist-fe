pipeline {
    agent {
        kubernetes {
            yamlFile 'docker_pod.yaml'
        }
    }
    environment {
        DOCKER_IMAGE = 'nmmalmquist/malmquist-fe'
        DOCKER_HUB_USERNAME = "nmmalmquist"
        DOCKER_HUB_ACCESS_TOKEN = credentials('docker-hub-token-nmmalmquist')
    }
    stages {
        stage('Build Docker Image') {
            steps {
                container('docker'){
                    echo "---> Starting to build image! ${env.DOCKER_IMAGE}"
                    sh "ls"
                    sh "docker build . -t ${env.DOCKER_IMAGE}"
                    sh "docker login -u ${env.DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_ACCESS_TOKEN}"
                    sh "docker push ${env.DOCKER_IMAGE}"
                    echo "---> Finished building image!"
                }
            }
        }
    }
}
