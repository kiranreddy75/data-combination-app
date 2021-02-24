# Data Combination Challenge

A Frontend Challenge for potential candidates that focuses on visualizing the combination two distinct but related endpoints. Using the provided API, create an Angular 2+ application that renders the data combined from two endpoints in a single view.

## Overview

A client recently reached out to us and mentioned that they are tired of manually digesting the data returned from the `Platforms` and `Users` endpoints in our API. You were hoping that your BE teammates would be back by now, but unfortunately they're still all on vacation. In order to satisfy our customer's needs, you will need to create a small Web Application that makes the related data from these two endpoints easier to understand.

This means that you will be doing some client-side data manipulation. Generally, this is frowned upon, but we have to hit our deadline!

## Cut the Noise!
In our API we expose information about Users, Platform Summaries and Platforms. The schemas for each entity can be found in the [Swagger Docs](#swagger). 

Here's a quick list of the information that our client WANTS to see for each User they have access to:

* id
* first_name
* last_name
* email
* gender
* ip_address
* username

_Then for EACH platform the User is a part of_

* Shared On <PLATFORM_NAME>
* <PLATFORM_NAME> Platform ID
* <PLATFORM_NAME> Display Order
* <PLATFORM_NAME> Last Shared

**NOTE:** This data should be as flat as possible. 

## API

Included with the challenge repo is a small NestJS API with 3 endpoints. These will be used to complete the challenge.

### Starting the API

#### Docker

There is a `Dockerfile` included in `api/`.

##### Building

```bash
docker build -t data-combination/api .
```

##### Running

```bash
docker run -d --rm -p 3333:3333 data-combination/api
```

#### Node

Alternatively you can run w/ Node directly.

##### Installing

```bash
yarn
```

##### Running

```bash
yarn start
```

### Swagger
It is recommended that you use the Swagger Docs for this API. These can be found at `localhost:3333/api/docs` once the API is up and running.

## Required Technologies

- Angular 2+

## Suggested Technologies

- Angular Component Library (i.e. Angular Material)
- If you have experience with a Redux pattern library, it would be great to see that implemented here.

## How To Complete

1. Fork this Repo
2. Create your application in the root of this directory
3. Submit the updated repo, with git history, to the hiring team via email (`.zip` of repo), PR (of your fork), or a link to your repo.

### Example of Directory Structure

```bash
./
├── README.md
├── api
└── <YOUR_APP_NAME>
    └── src
        └── app
```

## Requirements

While working on this project, try to keep Angular and Web Development best practices in mind as much as possible. An attempt was made to keep the application simple to leave room for this. Here's a list of a few concepts you might consider when working on the application:

- How different types of modules might be used (Routed Modules, Feature Modules, etc)
- The differences in responsibilities of the core Angular constructs (Component Controllers, Component Templates, Services, Pipes, Directives, etc)
- Scoping of core Angular Constructs ('Where should this service be scoped?', 'Should this component be declared in my AppModule or in my FeatureModule?')
- Responsive Web Behaviors

### User Stories
#### Required
**As a** User
**I want** a simple application that helps me digest my Platforms Summary data
**So** I can spend less time fiddling with the data, and more time responding to it!

**As a** User
**I want to** quickly understand how the data in `api/platforms` and `api/users` is related
**So** I can spend less time fiddling with the data, and more time responding to it!

**As a** User
**I want to** have all extraneous or 'noisy' data removed
**So** I can focus on what really matters to me.

**As a** User
**I want to** export the cleaned and collated raw data as a CSV
**So** I can bring this data into my preferred software and tinker to my heart's content.

#### Stretch Goals
**As a** User
**I want to** a consistently replicable route to view the 'details' of a given entity in the application
**So** I can share the URL with my co-worker when necessary.

**As a** User
**I want to** know when the application is loading something
**So** I'm not confused when I perform an action without a discernable result.

### Behaviors
#### Required
**Scenario: Platforms Summary Dashboard**  
**GIVEN** I visit the appropriate address for this new web application
**WHEN** the application is loaded
**THEN** ensure that I am viewing a 'dashboard' component that visualizes the Platforms Summary endpoint data (`/api/platforms`).

**Scenario: Extended User Data**  
**GIVEN** I am viewing the list of my Users' data
**WHEN** the view is loaded
**THEN** show a list item or row for each User in my dataset
**AND** decorate that data with details about each platform.

**Scenario: Less Noisy Extended User Data**  
**GIVEN** I am viewing the list of my Users' data
**WHEN** the view is loaded
**THEN** ensure that I can easily access a breakdown of my Users' Data
**AND** ensure that the extraneous information listed below is removed from each row or list item.

**Scenario: Export as CSV**  
**GIVEN** I am visiting a list view of my Users' Data
**WHEN** I click the 'export to CSV' button
**THEN** ensure that the data is downloaded for the User
**AND** ensure that the exported data closely aligns with the data shown in the application (collated and less noisy).


#### Stretch Goals
**Scenario: User Details**  
**GIVEN** I have identified a User that I view more information on
**WHEN** I click the 'Details' button
**THEN** ensure that I am taken to a new page in the application with a sensible route that displays the details of this entity.

**Scenario: Platform Details**  
**GIVEN** I have identified a Platform that I view more information on
**WHEN** I click the 'Details' button
**THEN** ensure that I am taken to a new page in the application with a sensible route that displays the details of this entity.


**Scenario: Loading States**  
**GIVEN** I am interacting with the application  
**WHEN** I perform an operation that requires a network request  
**THEN** ensure there is visual feedback in the application to show me my data is loading


## Bonus Points

### None of the Following Is Expected

#### Seriously...

##### No, I Mean It.

- Animations
  - List View Animations
  - Router Transitions
  - Micro Interactions
- Light/Dark Mode ('cause fashion 💅)
- Client-Side Sorting of Similarity Results
- ...✨anything your heart desires✨...
