type OTPData = {
  otp: string;
  expiresAt: number;
  attemptsLeft: number;
};

const otpStore: Record<string, OTPData> = {};

export const generateOtp = (email: string) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[email] = {
    otp,
    expiresAt: Date.now() + 60000,
    attemptsLeft: 3,
  };

  return otp;
};

export const validateOtp = (email: string, enteredOtp: string) => {
  const data = otpStore[email];

  if (!data) {
    return { success: false, message: "No OTP found" };
  }

  if (Date.now() > data.expiresAt) {
    return { success: false, message: "OTP expired" };
  }

  if (data.attemptsLeft <= 0) {
    return {
      success: false,
      message: "No attempts left. Please resend OTP.",
    };
  }

  if (data.otp !== enteredOtp) {
    data.attemptsLeft--;

    if (data.attemptsLeft === 0) {
      return {
        success: false,
        message: "No attempts left. Please resend OTP.",
      };
    }

    return {
      success: false,
      message: `Invalid OTP. Attempts left: ${data.attemptsLeft}`,
    };
  }

  return { success: true };
};
