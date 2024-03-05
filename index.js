class Onboarding {
    constructor(user) {
      this.user = user;
    }
  
    welcomeUser() {
      console.log(`Welcome, ${this.user}! We're excited to have you on board.`);
    }
  
    provideTraining() {
    }
  
    setInitialPreferences(preferences) {
      console.log(`Setting up your initial preferences:`, preferences);
      // Set user preferences in the system
    }
  
    completeOnboarding() {
      console.log(`Congratulations, ${this.user}! Your onboarding is complete.`);
    }
  }
  
  // Example usage
  const newUser = 'John Doe';
  const onboardingProcess = new Onboarding(newUser);
  
  onboardingProcess.welcomeUser();
  onboardingProcess.provideTraining();
  onboardingProcess.setInitialPreferences({ theme: 'light', notifications: 'on' });
  onboardingProcess.completeOnboarding();
  