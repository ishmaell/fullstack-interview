class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;

    if (this.currentCalories > this.maxCalories) {
      logMessage("Max calories exceeded o");
    }
  }

  /**
   * This is violating the SRP because if we decide to want to email the user on 
   * their calories, this too will have to change.
   */
  // logMessage() {
  //   console.log("Max calories exceeded");
  // } 
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(50);

function logMessage(message) {
  console.log(message);
}
