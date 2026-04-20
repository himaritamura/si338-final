import csv
import json

def convert_csv_to_json(csv_file_path, json_file_path):
    data = []
    
    # Read the CSV and add each row to a list
    with open(csv_file_path, encoding='utf-8') as csvf:
        csv_reader = csv.DictReader(csvf)
        for row in csv_reader:
            data.append(row)
    
    # Write the list to a JSON file
    with open(json_file_path, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))

# Example usage
convert_csv_to_json('dataset.csv', 'dataset.json')
