pipeline {
    agent any

    stages {
        stage('Cloning Git') {
        steps {
            git 'https://github.com/apostolclaudia/SQMA_Apostol_Claudia.git'
        }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run the tests with the provided TEST_SUITE parameter
                script {
                    if (params.TEST_SUITE) {
                        sh "TEST_SUITE=${params.TEST_SUITE} npm test"
                    } else {
                        error 'Please provide a test suite parameter'
                    }
                }
            }
        }
    }
}
