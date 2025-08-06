import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const EmployeeLoginScreen = ({ navigation }) => {
  const [employeeId, setEmployeeId] = useState('');

  const handleNumberPress = (number) => {
    if (employeeId.length < 10) {
      setEmployeeId(prev => prev + number);
    }
  };

  const handleBackspace = () => {
    setEmployeeId(prev => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    if (employeeId.length >= 4) {
      // Validate employee ID here
      console.log('Employee ID:', employeeId);
      navigation.navigate('Menu', { employeeId }); // Navigate to menu with employee ID
    } else {
      Alert.alert('Error', 'Please enter a valid Employee ID');
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const NumberButton = ({ number, onPress }) => (
    <TouchableOpacity
      style={styles.numberButton}
      onPress={() => onPress(number)}
      activeOpacity={0.7}
    >
      <Text style={styles.numberText}>{number}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Staff Access</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>ENTER YOUR EMPLOYEE ID</Text>
          
          <TextInput
            style={styles.input}
            value={employeeId}
            editable={false}
            placeholder="Employee ID"
            placeholderTextColor="#999"
          />

          {/* Number Pad */}
          <View style={styles.numberPad}>
            <View style={styles.numberRow}>
              <NumberButton number="1" onPress={handleNumberPress} />
              <NumberButton number="2" onPress={handleNumberPress} />
              <NumberButton number="3" onPress={handleNumberPress} />
            </View>
            <View style={styles.numberRow}>
              <NumberButton number="4" onPress={handleNumberPress} />
              <NumberButton number="5" onPress={handleNumberPress} />
              <NumberButton number="6" onPress={handleNumberPress} />
            </View>
            <View style={styles.numberRow}>
              <NumberButton number="7" onPress={handleNumberPress} />
              <NumberButton number="8" onPress={handleNumberPress} />
              <NumberButton number="9" onPress={handleNumberPress} />
            </View>
            <View style={styles.numberRow}>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={handleBackspace}
                activeOpacity={0.7}
              >
                <Text style={styles.numberText}>⌫</Text>
              </TouchableOpacity>
              <NumberButton number="0" onPress={handleNumberPress} />
              <View style={styles.numberButton} />
            </View>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirm}
            activeOpacity={0.8}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleCancel}
            activeOpacity={0.8}
          >
            <Text style={styles.cancelText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c3155',
    padding: 10,
  },
  header: {
    backgroundColor: '#0c3155',
    paddingVertical: height * 0.03,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: width > 768 ? 32 : 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0)', // Transparent background
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingTop: height * 0.05,
  },
  inputSection: {
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  inputLabel: {
    fontSize: width > 768 ? 24 : 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: height * 0.03,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: height * 0.02,
    fontSize: width > 768 ? 24 : 18,
    textAlign: 'center',
    marginBottom: height * 0.04,
    minWidth: width * 0.7,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  numberPad: {
    marginBottom: height * 0.04,
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 20,
  },
  numberButton: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    width: width > 768 ? 80 : 60,
    height: width > 768 ? 80 : 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  numberText: {
    fontSize: width > 768 ? 28 : 22,
    fontWeight: '600',
    color: '#0271CB',
  },
  confirmButton: {
    backgroundColor: 'rgba(255,255,255,0)', // Transparent background
    borderRadius: 12,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.15,
    marginBottom: 15,
    borderWidth: 2, // Added border
    borderColor: '#0271CB', // Brand color border
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  confirmText: {
    fontSize: width > 768 ? 22 : 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text for visibility
    textAlign: 'center',
  },
  cancelButton: {
    paddingVertical: 10,
  },
  cancelText: {
    fontSize: width > 768 ? 18 : 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default EmployeeLoginScreen;