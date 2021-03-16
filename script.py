# Python
# This script was used to add an ID to each user in the response.json file

import json

data = ""

with open('response.json', encoding='utf-8') as json_file:
          data = json.load(json_file)
          index = 0;
          for usr in data:
              usr['id'] = index
              index = index+1
                     
with open('data.json', 'w',) as outfile:
    json.dump(data, outfile)