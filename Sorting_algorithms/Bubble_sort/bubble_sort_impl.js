function bubble_sort(list) {
    let unsorted_until_index = list.length - 1;
    let sorted = false;

    while (sorted == false) {
        sorted = True;
        for (let i = 0; i <= unsorted_until_index; i++) {
            if (list[i] > list[i+1]) {
                list[i], list[i+1] = list[i+1], list[i];
                sorted = False;
            }
        }
        unsorted_until_index -= 1;
    }
    return list;
}

console.log(bubble_sort([65, 55, 45, 35, 25, 15, 10]));