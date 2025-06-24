pipeline {
    agent any

    tools {
        nodejs 'node22'
    }

    environment {
        CYPRESS_INSTALL_BINARY = "C:\\Users\\HP\\AppData\\Local\\Cypress\\Cache\\14.5.0"
        HOME = "${env.WORKSPACE}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Gayathri190598/Cypress_EndToEnd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --browser electron --headless'
            }
        }
    }

    post {
        always {
            echo 'Post actions: archiving artifacts...'
            archiveArtifacts artifacts: '**/cypress/screenshots/**, **/cypress/videos/**', allowEmptyArchive: true
            echo 'Build failed. Check Cypress logs and screenshots.'
        }
    }
}