# JobSeekers BD

[Live Link: https://jobseekers-bd.web.app/](https://jobseekers-bd.web.app/)

## Description

JobSeekers BD is an online job portal designed to connect job seekers with potential employers. The platform offers a range of features to facilitate job searching, application management, and job posting.

## Features and Highlights

- **Home Page**

  - Overview of the job portal.

- **User Authentication**

  - **Login:** Secure login for existing users.
  - **Register:** User registration for new users.

- **Job Listings**

  - **All Jobs:** View all job listings.
  - **Job Details:** View detailed job information.
    - _Private Route:_ Accessible only to authenticated users.
    - _Data Loading:_ Fetch job details from the API.

- **User Dashboard**

  - **My Jobs:** Manage jobs posted by the user.
    - _Private Route:_ Accessible only to authenticated users.
  - **Add Job:** Post a new job listing.
    - _Private Route:_ Accessible only to authenticated users.
  - **Update Job:** Edit an existing job listing.
    - _Private Route:_ Accessible only to authenticated users.
    - _Data Loading:_ Fetch job details from the API for editing.

- **Application Management**

  - **Applied Jobs:** View jobs the user has applied for.
    - _Private Route:_ Accessible only to authenticated users.

- **Additional Features**

  - **Blogs:** Access blog posts related to the job market and career advice.
  - **Error Page:** Custom error page for routing errors.
  - **Dark Mode:** Toggle between light and dark themes for better user experience.

- **Routing**
  - Utilizes `react-router-dom` for client-side routing.
  - **Private Route:** Component for protecting routes that require authentication.

## Technology Stack

- **React:** JavaScript library for building user interfaces.
- **React Router:** Declarative routing for React applications.
- **React Query:** Data-fetching library to manage server-state in React applications.
- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **Framer Motion:** Production-ready motion library for React.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **SweetAlert2:** Responsive, customizable popup boxes.
- **DaisyUI:** Pre-styled components plugin for Tailwind CSS.
