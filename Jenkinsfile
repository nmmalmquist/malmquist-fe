pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                ls
                docker --version
                sh 'echo "Nick"'
            }
        }
    }
}
