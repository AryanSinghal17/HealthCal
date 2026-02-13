# 🔐 React Native OTP Authentication with Persistent Session

A production-style OTP authentication flow built using **React Native CLI + TypeScript**.  
This project demonstrates clean architecture, OTP validation logic, expiry handling, attempt tracking, and session persistence using AsyncStorage.

---

# 📌 Features

## 🔑 Authentication
- 6-digit OTP generated locally
- OTP stored per email
- OTP expires after 60 seconds
- Maximum 3 incorrect attempts
- Displays remaining attempts
- Resend OTP generates a new OTP and invalidates the old one

## ⏱ Session Management
- Displays session start time
- Shows live session duration (mm:ss format)
- Session persists after app reload
- Logout clears persistent session

## ✅ Validation
- Regex-based `.com` email validation
- OTP input limited to 6 digits
- Proper error handling for:
  - Expired OTP
  - Invalid OTP
  - Exceeded attempts

---

# 🏗 Architecture

src/
├── screens/ 
│ ├── LoginScreen.tsx
│ ├── OtpScreen.tsx
│ └── SessionScreen.tsx
│
├── services/ 
│ └── otpManager.ts
│
├── hooks/ 
│ └── useSessionTimer.ts



### Responsibilities

- **Screens (UI Layer)**  
  Handles rendering and user interactions.

- **Services (Business Logic)**  
  OTP generation, validation, expiry logic, attempt tracking.

- **Hooks**  
  Timer lifecycle management with proper cleanup.

- **AsyncStorage (Side Effects)**  
  Persistent session handling.

---

# 🔎 OTP Logic Explanation

## OTP Generation
Data Structure Used
type OTPData = {
  otp: string;
  expiresAt: number;
  attemptsLeft: number;
};

## Why This Structure?
Supports multiple users independently.
Tracks expiry timestamp.
Tracks attempt count.
Keeps logic isolated inside service layer.


## Expiry Handling
expiresAt = Date.now() + 60000
During validation:
If current time > expiresAt → OTP expired
Resending OTP resets expiry.

## Attempt Handling
Each OTP starts with 3 attempts.
On wrong attempt:
attemptsLeft--
User sees remaining attempts.
After 3 failures:
Validation blocked until resend.

## before Installation
Read Installation document
