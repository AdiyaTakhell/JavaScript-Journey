// Global count variable tracks high/low cards remaining (Hi-Lo system)
let count = 0;

// Updates count based on card value and returns betting advice
function cc(card) {
    // Low cards (2-6) favor player - increase count by 1
    if (card >= 2 && card <= 6) {
        count += 1;
    }
    // Neutral cards (7-9) - no change
    else if (card >= 7 && card <= 9) {
        count += 0;
    }
    // High cards (10,J,Q,K,A) favor dealer - decrease count by 1
    else {
        count -= 1;
    }
    
    // Return count + betting decision
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}
