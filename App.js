import { StyleSheet, Text, View } from 'react-native';
import Navigate from './src/Navigation/Navigate';
import BookLate from './src/Screens/BookLate';
import BookNow from './src/Screens/BookNow';
import Driver from './src/Screens/Driver';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';

export default function App() {
  return (
    <Navigate/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
