import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUsers($id: ID!) {
    user(id: $id) {
      id
      name
      username
      email
      website
      phone
      address {
        street
        suite
        city
        zipcode
      }
      company {
        name
      }
    }
  }
`;

export const ALL_USERS = gql`
  query AllUsers {
    users {
      data {
        id
        name
        username
        email
        company {
          name
        }
        website
        phone
      }
    }
  }
`;

export const ALL_POSTS = gql`
  query posts {
    posts {
      data {
        id
        title
        body
        user {
          name
        }
      }
    }
  }
`;
