import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      _id
      email
      password
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($_id: String!, $username: String!, $email: String!, $password: String!) {
    addUser(_id: $_id, username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($book: String!, $userId: ID) {
    saveBook(book: $book, userId: $userId) {
      _id
      book
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($userId: ID, $book: String!) {
    removeBook(userId: $userId, book: $book) {
      _id
      book
    }
  }
`;
