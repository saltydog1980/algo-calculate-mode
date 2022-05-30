const calculateMode = (arr) => {
    //object to map value, count, and type of each index in input array
    const eleMap = {};
    //answer array to push final values into and return
    const ansArray = [];
    //looping through input array to populate the map
    for (let i = 0; i < arr.length; i++){
        //if the value is already present in map then increasing it's count value by 1
        if (eleMap[arr[i]]) {
            eleMap[arr[i]]['count'] += 1;
        //if it is not in map I am creating a key of the value and it's value is an object
        //with keys value, count, and type of the orginal value...just in case
        } else {
            eleMap[arr[i]] = {
                value: arr[i],
                count: 1,
                type: typeof(arr[i])
            }
        }
    }
    //array to push item counts to in order to get max count value
    const itemCount = []
    //looping through map and pushing counts to item count array
    for (let key in eleMap) {
        itemCount.push(eleMap[key].count)
    }
    //using Math.max to get target max count number
    const targetNum = Math.max(...itemCount)
    //looping through map again finding keys whose count match target number and pushing their 
    //values into the answer array
    for (let key in eleMap) {
        if (eleMap[key].count === targetNum) {
            ansArray.push(eleMap[key].value)
        }
    }
    //returning sorted array
    return ansArray.sort()
}
