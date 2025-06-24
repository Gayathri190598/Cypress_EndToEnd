pipeline {
    agent any

    tools {
        nodejs 'node16' // Match the name in Global Tools
    }

    environment {
        CYPRESS_CACHE_FOLDER = '.cache/Cypress'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Gayathri190598/Cypress_EndToEnd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.*', allowEmptyArchive: true
        }
    }
}