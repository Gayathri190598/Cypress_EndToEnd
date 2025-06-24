pipeline {
    agent any

    tools {
        nodejs 'node22' // Match this with your configured Node.js in Jenkins
    }

    environment {
        CYPRESS_CACHE_FOLDER = '.cache/Cypress'
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
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
        }

        failure {
            echo 'Build failed. Check Cypress logs and screenshots.'
        }

        success {
            echo 'Build passed successfully!'
        }
    }
}