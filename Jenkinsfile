pipeline {
    agent any

    parameters {
        choice(name: 'TEST_SUITE', choices: ['Suite1', 'Suite2'], description: 'Select a test suite')
    }

    stages {

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    if (params.TEST_SUITE) {
                        echo "Running tests for suite: ${params.TEST_SUITE}"
                        sh "TEST_SUITE=${params.TEST_SUITE} npm test"
                    } else {
                        error 'Please provide a test suite parameter'
                    }
                }
            }
        }
    }
}
