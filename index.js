class Onboarding {
    constructor(user) {
      this.user = user;
    }
  
    welcomeUser() {
      console.log(`Welcome, ${this.user}! We're excited to have you on board.`);
    }
  
    provideTraining() {
      console.log(`Here's a brief training to get you started.`);
      // Include training content and resources
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
  