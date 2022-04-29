# Introduction

This repo holds the angular project for the front end to be used with the
RotboxAPI. It's pretty bare bones right now. The API is more of a priority than
this since I can just curl. There's lots that can be improved especially in the
realm of form validation.

# Configuration

These environment variables need to be defined in environment.prod.ts:

- loginUrl: string
- registerUrl: string
- authenticateTokenUrl: string
- constructGetFilesUrl(): string
- getUserToken(): string
- deleteUserToken(): void
- setUserToken(token: string): void
- setUserId(userid: string): void
