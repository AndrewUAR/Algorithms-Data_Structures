function binary_search(array, search_value){
    // First we establish the lower and upper bounds of where the value
    // we're searching for can be. To start, the lower bound is the first 
    // value in the array, while the upper bound is the last value:
    let lower_bound = 0;
    let upper_bound = array.length - 1;
    // We begin a loop in which we keep inspecting the middlemost value
    // between the upper and lower bounds:
    while (lower_bound <= upper_bound) {
        // We find the midpoint between the upper and lower bounds:
        let midpoint = Math.floor((upper_bound + lower_bound) / 2);
        // We inspect the value at the middpoint:
        let value_at_midpoint = array[midpoint];
        // If the value at the midpoint is the one we're looking for, we're done.
        // If not, we change the lower or upper bound based on whether we need
        // to guess higher or lower:
        if (search_value == value_at_midpoint) {
            return midpoint;
        } else if (search_value < value_at_midpoint) {
            upper_bound = midpoint - 1;
        } else if (search_value > value_at_midpoint) {
            lower_bound = midpoint + 1;
        }
    }
    // If we're narrowed the bounds until they've reached each other, that
    // means that the value we're searching for is not contained within this array:
    return null;
}

