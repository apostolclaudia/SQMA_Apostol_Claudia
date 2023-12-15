pipeline {
    agent any

    parameters {
        choice(name: 'TEST_SUITE', choices: ['AdditionSuite', 'SubtractionSuite','MultiplyDivideSuite'], description: 'Select a test suite')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    echo "Installing dependencies..."
                    bat 'npm install'
                }
            }
        }

        stage('OWASP Dependency-Check Vulnerabilities') {
            steps {
                dependencyCheck additionalArguments: ''' 
                            -o './'
                            -s './'
                            -f 'ALL' 
                            --prettyPrint''', odcInstallation: 'OWASP Dependency-Check Vulnerabilities'
                
                dependencyCheckPublisher pattern: 'dependency-check-report.xml'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    if (params.TEST_SUITE) {
                        echo "Running tests for suite: ${params.TEST_SUITE}"
                        withEnv(["TEST_SUITE=${params.TEST_SUITE}"]){bat "npm test"}
                    } else {
                        error 'Please provide a test suite parameter'
                    }
                }
            }
        }

        stage('All Tests (No Parameters)') {
            steps {
                build job: 'All_tests_no_parameters'
            }
        }
    }
}
