pipeline {
    agent {
        kubernetes {
            yamlFile 'docker_pod.yaml'
        }
    }
    stages {
        stage('Hello') {
            steps {
                sh 'ls'
                sh 'pwd'
                sh 'docker --version'
                sh 'echo "Nick"'
            }
        }
    }
}
