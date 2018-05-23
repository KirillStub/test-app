export const UserPoolClient = {
  UserPoolId: 'eu-central-1_bvFiHtYBv',
  LastModifiedDate: 1516807128.922,
  ClientId: '5bro699otcfov7a21cmc7hsdqc',
  AllowedOAuthFlowsUserPoolClient: false,
  WriteAttributes: [
    'address',
    'birthdate',
    'email',
    'family_name',
    'gender',
    'given_name',
    'locale',
    'middle_name',
    'name',
    'nickname',
    'phone_number',
    'picture',
    'preferred_username',
    'profile',
    'updated_at',
    'website',
    'zoneinfo'
  ],
  ReadAttributes: [
    'address',
    'birthdate',
    'email',
    'email_verified',
    'family_name',
    'gender',
    'given_name',
    'locale',
    'middle_name',
    'name',
    'nickname',
    'phone_number',
    'phone_number_verified',
    'picture',
    'preferred_username',
    'profile',
    'updated_at',
    'website',
    'zoneinfo'
  ],
  RefreshTokenValidity: 30,
  CreationDate: 1512030095.352,
  ClientName: 'testclient'
};

export const IdentityPool = {
  IdentityPoolId: 'eu-central-1:3804a3af-e373-486c-8e19-80308d530835',
  AllowUnauthenticatedIdentities: false,
  CognitoIdentityProviders: [
    {
      'ServerSideTokenCheck': false,
      'ClientId': '5bro699otcfov7a21cmc7hsdqc',
      'ProviderName': 'cognito-idp.eu-central-1.amazonaws.com/eu-central-1_bvFiHtYBv'
    }
  ],
  IdentityPoolName: 'stm_identity_pool'
};
