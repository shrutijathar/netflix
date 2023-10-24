1. create react app 
==> npx create-react-app netflix
2. Configured TailwindCss
==> npm install -D tailwindcss
    npx tailwindcss init
3. Configure react router dom 
==> npm i -D react-rounter-dom
4. Login Form
5. Sign up Form
6. Form Validation (Formik for long form validation)
7. Authentication
==> Configure firebase
    - create project on firebase
    - npm install firebase
    - npm install -g firebase-tools
    - goto project overview - goto authentication - enable email/password
    - firebase login
    - Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? Yes
    - firebase init
    - Are you ready to proceed? Yes
    - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    - Use an existing project
    - netflix-a6519 (Netflix)
    - What do you want to use as your public directory? build
    - Configure as a single-page app (rewrite all urls to /index.html)? No
    - Set up automatic builds and deploys with GitHub? No
    - npm run build
    - firebase deploy
    - create a sign up user in firebase
    - create sign in using firebase
8. Setup redux store
==> npm i -D @reduxjs/toolkit
    npm i react-redux
    - create redux store
    - create user Slice
9. implemented sign out
10. Update profil
11. 