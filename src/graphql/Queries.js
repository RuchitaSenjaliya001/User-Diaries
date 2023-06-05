import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUsers($id: ID!) {
    user(id: $id) {
      id
      name
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
        address {
          street
          suite
          city
          zipcode
        }
        phone
        website
        company
      }
    }
  }
`;
