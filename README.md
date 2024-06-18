## Description
This is a job search application that allows users to log in, view popular and featured jobs, and explore job details. The application consists of multiple custom components that enhance the user experience and provide a seamless job searching journey.

## Components

1. SignUpScreen
Usage: This is the login screen where users enter their name and email to log in. Upon pressing the login button, the user is navigated to the HomeScreen with their name and email passed as parameters.

Key Features:

- Input fields for name and email.
- Navigation to the HomeScreen with user data.
- Styled buttons and layout matching the UI design.

2. HomeScreen
Usage: This is the main screen displayed after the user logs in. It shows the user's name and email, provides a search bar, and displays popular and featured job cards.

Key Features:

- Displays user's name and email.
- Contains a search bar component.
- Shows popular and featured job sections using custom components.

3. PopularJobs
Usage: This component displays a list of popular job cards in a scrollable view. It accepts a list of job details as props and renders each job card with the provided data.

Key Features:

- FlatList to display job cards.
- Custom styling for each job card.
- Props to pass job details dynamically.

4. CategoryImage
Usage: This component displays a list of featured job cards in a horizontal scrollable view. Each card shows job details including job title, company, location, salary, and a background image.

Key Features:

- FlatList to display job cards.
- Custom styling for each job card.
- Props to pass job details dynamically.

5. Search
Usage: This component provides a search bar for the user to search for jobs. It is included in the HomeScreen.

Key Features:

- TextInput for user input.
- Custom styling matching the UI design.

## Screenshots
 
- ![Screenshot](https://github.com/cryptomathematician/rn-assignment3-11288689/blob/main/assets/Screenshot1.png)
- ![Screenshot](https://github.com/cryptomathematician/rn-assignment3-11288689/blob/main/assets/Screenshot2.png)

