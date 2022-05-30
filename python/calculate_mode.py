def calculate_mode(inp):
    #dict to use as map for each element to log value, count, and type..just because...
    ele_map = {}
    #answer list
    ans_list = []
    #looping through input list to populate the map
    for ele in inp:
        if ele in ele_map:
            ele_map[ele]['count'] += 1
        else :
            ele_map[ele] = {
                'value': ele,
                'count': 1,
            }
    #list to push item counts to
    item_count = []
    #looping through the map pushing counts to list
    for key in ele_map:
        item_count.append(ele_map[key]['count'])
    #using max function against item count to get max count number
    target = max(item_count)
    #looping through the map and appending value to answer list for any that match count value
    for key in ele_map:
        if ele_map[key]['count'] == target:
            ans_list.append(ele_map[key]['value'])
    #returning the answer list
    return ans_list
