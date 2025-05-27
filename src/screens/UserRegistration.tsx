import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const UserRegistration = ({ navigation }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = () => {
    // Placeholder logic
    console.log('Registering user:', form);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5', justifyContent: 'center' }}>
      <Text style={styles.title}>User Registration</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onChangeText={(text) => handleChange('name', text)}
          value={form.name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => handleChange('email', text)}
          value={form.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => handleChange('password', text)}
          value={form.password}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Google Auth')}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]} onPress={() => console.log('Facebook Auth')}>
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <Text style={styles.loginRedirect} onPress={() => navigation.navigate('Login')}>
          Already have an account? Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20
  },
  card: {
    backgroundColor: '#d4a017',
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    elevation: 10,
    shadowColor: 'black',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10
  },
  socialButton: {
    backgroundColor: '#db4a39',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#333'
  },
  loginRedirect: {
    marginTop: 15,
    textAlign: 'center',
    color: '#0000ff'
  }
});

export default UserRegistration;
