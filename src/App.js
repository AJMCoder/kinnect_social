import NavBar from "./components/NavBar";
import styles from './App.module.css';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefault';
import Registration from './pages/auth/RegistrationForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";


function App() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  

  return (
    
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <PostsPage message="No results could be found. Adjust the search parameters." />} />
              <Route exact path="/feed" render={() => <PostsPage message="No results could be found. Adjust the search parameters or follow an account." filter={`owner__followed__owner__profile=${profile_id}&`} />} />
              <Route exact path="/liked" render={() => <PostsPage message="No results could be found. Adjust the search parameters or like a post." filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/register" render={() => <Registration />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
              <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
              <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
              <Route render={() => <NotFound />} />
            </Switch>
          </Container>
        </div>
      
  );
}

export default App;