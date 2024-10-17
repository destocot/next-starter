<!-- Auth Execution Order -->

<!-- FIRST TIME CREATE ACCOUNT -->

[prisma-adapter][getUserByAccount]
[1A] { providerAccountId: '65960587', provider: 'github' }
[1B] null

[prisma-adapter][getUserByAccount]
[1A] { providerAccountId: '65960587', provider: 'github' }
[1B] null

[prisma-adapter][getUserByEmail]
2A null

[prisma-adapter][createUser]
[1A] f72218b8-96d4-45f4-b775-ef74d5b52d1a
[1B] {
name: 'Khurram Ali',
email: 'khurramcali@gmail.com',
image: 'https://avatars.githubusercontent.com/u/65960587?v=4',
emailVerified: null
}
[1C] {
id: 'cm29r0p1p000fsmst96sgq6gc',
createdAt: 2024-10-15T01:12:32.461Z,
updatedAt: 2024-10-15T01:12:32.461Z,
email: 'khurramcali@gmail.com',
password: null,
emailVerified: null,
image: 'https://avatars.githubusercontent.com/u/65960587?v=4',
name: 'Khurram Ali'
}

[prisma-adapter][linkAccount]
[prisma-adapter][createSession]
GET /api/auth/callback/github?code=4462bef53be35414a198 302 in 591ms
GET /dashboard 200 in 189ms
[prisma-adapter][getSessionAndUser]
GET /api/auth/session 200 in 35ms
[prisma-adapter][getSessionAndUser]
GET /api/auth/session 200 in 25ms
[prisma-adapter][getSessionAndUser]
GET /api/auth/session 200 in 17ms
[prisma-adapter][getSessionAndUser]
GET /api/auth/session 200 in 12ms

<!-- SECOND TiME LOGIN -->

[prisma-adapter][getUserByAccount]
[1A] { providerAccountId: '65960587', provider: 'github' }
[1B] {
user: {
id: 'cm29r0p1p000fsmst96sgq6gc',
createdAt: 2024-10-15T01:12:32.461Z,
updatedAt: 2024-10-15T01:12:32.461Z,
email: 'khurramcali@gmail.com',
password: null,
emailVerified: null,
image: 'https://avatars.githubusercontent.com/u/65960587?v=4',
name: 'Khurram Ali'
}
}
[prisma-adapter][getUserByAccount]
[1A] { providerAccountId: '65960587', provider: 'github' }
[1B] {
user: {
id: 'cm29r0p1p000fsmst96sgq6gc',
createdAt: 2024-10-15T01:12:32.461Z,
updatedAt: 2024-10-15T01:12:32.461Z,
email: 'khurramcali@gmail.com',
password: null,
emailVerified: null,
image: 'https://avatars.githubusercontent.com/u/65960587?v=4',
name: 'Khurram Ali'
}
}
[prisma-adapter][createSession]
GET /api/auth/callback/github?code=1b92e5053fc3bae22427 302 in 601ms
✓ Compiled /dashboard in 695ms (1192 modules)
[prisma-adapter][getSessionAndUser]
GET /dashboard 200 in 1166ms
[prisma-adapter][getSessionAndUser]
GET /api/auth/session 200 in 51ms
[prisma-adapter][getSessionAndUser]
GET /api/auth/session 200 in 24ms
[prisma-adapter][getSessionAndUser]
GET /api/auth/session 200 in 17ms
[prisma-adapter][getSessionAndUser]
GET /api/auth/session 200 in 16ms
