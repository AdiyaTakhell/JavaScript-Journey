const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

const golfScore = (par, strokes) => {
  // Check for hole-in-one (always 1 stroke)
  if (strokes === 1) {
    return names[0];
  }
  // Calculate strokes relative to par
  const relativeScore = strokes - par;
  
  // Eagle: 2 or more under par
  if (relativeScore <= -2) {
    return names[1];
  }
  // Birdie: 1 under par
  if (relativeScore === -1) {
    return names[2];
  }
  // Par: exactly on par
  if (relativeScore === 0) {
    return names[3];
  }
  // Bogey: 1 over par
  if (relativeScore === 1) {
    return names[4];
  }
  // Double Bogey: 2 over par
  if (relativeScore === 2) {
    return names[5];
  }
  // Go Home!: 3 or more over par
  return names[6];
};
