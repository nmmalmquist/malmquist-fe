pipeline {
    agent {
        kubernetes {
            podTemplate(yaml: readTrusted('pod.yaml')) {
                namespace('jenkins-ns')
            }
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
