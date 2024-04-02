pipeline {
    agent {
        kubernetes {
            yamlFile 'docker_pod.yaml'
        }
    }
    stages {
        stage('Hello') {
            steps {
                container('docker'){
                    sh 'ls'
                    sh 'pwd'
                    sh 'docker --version'
                    sh 'echo "Nick"'
                }
            }
        }
    }
}
