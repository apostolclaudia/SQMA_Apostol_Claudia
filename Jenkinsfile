pipeline {
    agent any

    parameters {
        choice(name: 'TEST_SUITE', choices: ['Suite1', 'Suite2'], description: 'Select a test suite')
    }

    stages {
        
        stage('Cloning Git') {
            steps {
                git 'https://github.com/apostolclaudia/SQMA_Apostol_Claudia.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    echo 'Installing dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run the tests with the provided TEST_SUITE parameter
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
