# Dashboard GitHub


## Problem Statement
The GITHUB COMPARE company provides insights for small startups on how they can get
traction and succeed with their business. To better serve its customers, GITHUB COMPARE
wants to build a Dashboard application that will show comparisons of repositories
selected by customers on Github so that, with this information in hand, they can provide
insight into favorite repositories and which repository is best for the startup use.
The MVP, for the GITHUB COMPARE, wants to gather data from the GitHub API (v3
or v4 it's up to you to decide), and display insightful information about a given
GitHub repository.


### Requirements
- The project should be implemented using React.js.
- (Optional) All design was implemented based on our CSS framework https://clayui.com/ but feel free
  to use any libraries or frameworks available out there.

 - IMPORTANT: In Software Development, it's completely natural for questions to arise
during development. If you have any questions, please feel free to contact the team at
work time and you can take your own decisions. We are looking forward to working with
you and will try to answer any questions you may have as fast as we can.
Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Mock-ups: https://www.figma.com/file/CiGDDaIHDT1J1xOONJ4IqN/project_frontend_associate

### Technologies used
- [react JS](https://reactjs.org/) 
- [reactstrap](https://reactstrap.github.io/) 
- [react icons](https://react-icons.github.io/react-icons/) 

## Install

install the necessary packages.

```sh
sudo apt install npm
```
The installation of npm also installs node.js and you can confirm the version of node installed using the command:

```sh
$ node --version
v10.16.0  [Output]
```

Installing create-react-app Utility

```sh
$ sudo npm -g install create-react-app
```

Once installed, you can confirm the version of installed by running:

```sh
$ create-react-app --version
4.0.1  [Output]
```
Create & Launch Your First React Application

```sh
$ create-react-app liferay-app
```

Then run the command:

```sh
$ npm start
```
### Features
- LFA-01 Add a new repository
- LFA-02 Delete an existing repository
- LFA-03 Order by repository property
- LFA-04 Filter by existing repository
- LFA-05 Favorite repository
 
# LFA-01 Add a new repository

As an app Admin, I want to add new repositories and list them all

Acceptance criteria
 1. Empty state
Given there is still no repository created when the user loads the screen, the empty state must
be displayed **(not implemented)**

2. Input to add a new repository
Given the user, when clicking on the add button, a popover should be displayed with the input
text to insert the organization name OR username followed by the repository name **(implemented)**


3. API error OR repository not found
Given the user receives an API error or the repository is not found, the input text must display
feedback to the user about the error and the add button must be disabled **(partially implemented)**


4. Sort by new repository
Given when adding a new repository, the newly added repository must be displayed first in the
repository listing **(not implemented)**

# LFA-02 Delete an existing repository
As an app Admin, I want to delete a repository that no longer has value for my list of repositories
Acceptance criteria
1. Icon (trash) to delete an existing repository
Given the icon (trash) in the repository card, when the user clicks on the icon, should open a
modal to confirm the deletion of the repository and then update the dashboard **(implemented)**

# LFA-03 Order by repository property
As an app Admin, I want to order the apps by the repository property

Acceptance criteria
1. Order the repositories list by the chosen property
Given the app is listing the repositories the user has added when the user clicks the Filter and
order button. Then a dropdown should be displayed containing the repository properties **(not implemented)**.

2. Order by descending order
Given the Filter and order dropdown lists the repository properties when the user clicks one
of the properties shown then the app should order by the selected property in descending
order **(not implemented)**.

# LFA-04 Filter by existing repository
As an app Admin, I want to filter by existing repository

Acceptance criteria
1. Search by a nonexistent repository
Given the search by repositories when the user types a nonexistent repository then show the
empty state **(partially implemented)**.

2. Clear filter
Given the empty state when the user clicks on the button, the search must be cleared **(not implemented)**.

3. Search by an existing repository
Given the search for repositories when the user types an existing repository, then only shows
the repositories found **(implemented)**.

# LFA-05 Favorite repository

As an app Admin, I want to favorite repositories

Acceptance criteria
1. Mark the repository as favored Given the repository cards when the user clicks the (star) icon,
then the icon must remain checked and the repository must be favored **(not implemented)**.

2. Filter the repositories checked as favored
Given the icon (star) in the header toolbar, when the user clicks on the icon, then the favorite
repositories must be filtered **(not implemented)**.
