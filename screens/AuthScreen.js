import React, { useState, useReducer, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';
import Input from '../components/UI/Input';
import Card from '../components/UI/Card';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import * as AuthActions from '../store/action/auth';
import { useDispatch } from 'react-redux';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const AuthScreen = props => {
  const [isSignup, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      Alert.alert('An Error occured', error, [{ text: 'OK' }]);
    }
  }, [error]);
  const signupHandler = async () => {
    let action;
    if (isSignup) {
      action = AuthActions.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    } else {
      action = AuthActions.signup(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate('Games');
    } catch (err) {
      setError(err.message);
      Alert.alert('');
      setIsLoading(false);
    }
    setError(null);
  };
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });
  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id='email'
              label='E-mail'
              keyboardType='email-address'
              required
              email
              autoCapitalize='none'
              errorText='Please Enter a valid email address'
              onInputChange={inputChangeHandler}
              initialValue=''
            />
            <Input
              id='password'
              label='Password'
              keyboardType='default'
              secureTextEntry
              required
              minLength={5}
              autoCapitalize='none'
              errorText='Please Enter a valid password'
              onInputChange={inputChangeHandler}
              initialValue=''
            />
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size='small' color={Colors.primary} />
              ) : (
                <Button
                  title={isSignup ? 'Login' : 'Signup'}
                  color={Colors.primary}
                  onPress={signupHandler}
                />
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title={isSignup ? 'Switch to Signup' : 'Switch to Login'}
                color={Colors.accent}
                onPress={() => {
                  setIsSignUp(prevState => !prevState);
                }}
              />
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};
AuthScreen.navigationOptions = {
  headerTitle: 'Authenticate'
};
const styles = StyleSheet.create({
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  screen: {
    flex: 1
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 10
  }
});

export default AuthScreen;
