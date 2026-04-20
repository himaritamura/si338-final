import json
import random

def cull_json_list(input_filename, output_filename, fraction=0.1):
    """Reads a JSON list, culls it to a random fraction, and saves it."""
    
    # 1. Load the original JSON data
    try:
        with open(input_filename, 'r', encoding='utf-8') as infile:
            data = json.load(infile)
    except FileNotFoundError:
        print(f"Error: The file {input_filename} was not found.")
        return
        
    # Ensure the data is actually a list
    if not isinstance(data, list):
        print("Error: The top-level JSON structure must be a list.")
        return

    # 2. Calculate the number of items to keep
    total_items = len(data)
    keep_count = int(total_items * fraction)
    
    if keep_count == 0 and total_items > 0:
        print("Warning: 10% of the data rounds to 0. Keeping 1 item instead.")
        keep_count = 1

    # 3. Randomly sample the data (without replacement)
    culled_data = random.sample(data, keep_count)

    # 4. Save the culled data to the output file
    with open(output_filename, 'w', encoding='utf-8') as outfile:
        json.dump(culled_data, outfile, indent=4)

    print(f"Success! Culled {total_items} items down to {keep_count} items.")

# --- Example Usage ---
if __name__ == "__main__":
    # Replace these strings with your actual file paths
    INPUT_FILE = 'data.json'
    OUTPUT_FILE = 'culled_data.json'
    
    cull_json_list(INPUT_FILE, OUTPUT_FILE, fraction=0.10)