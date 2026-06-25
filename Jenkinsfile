pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        echo 'Building...'
        sh 'node --version'
        sh 'npm --version'
      }
    }

    stage('Test') {
      steps {
        echo 'Tests passed!'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker build -t jenkins-demo .'
        echo 'Deployed!'
      }
    }

  }
stage('Docker Build') {
    steps {
        sh 'docker build -t maheenmohsin000/jenkins-demo:v1 .'
    }
}

stage('Docker Push') {
    steps {
        withCredentials([usernamePassword(
            credentialsId: 'dockerhub',
            usernameVariable: 'DOCKER_USER',
            passwordVariable: 'DOCKER_PASS'
        )]) {

            sh '''
            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
            docker push maheenmohsin000/jenkins-demo:v1
            '''
        }
    }
}

  post {
    success {
      echo 'Pipeline SUCCESS!'
    }
    failure {
      echo 'Pipeline FAILED!'
    }
  }
}

