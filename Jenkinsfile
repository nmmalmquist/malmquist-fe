pipeline {
    agent {
        kubernetes {
            yaml '''
                apiVersion: v1
                kind: Pod
                spec:
                containers:
                - name: docker
                    image: docker:latest
                    command:
                    - cat
                    tty: true
                '''
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
