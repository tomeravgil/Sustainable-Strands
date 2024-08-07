import json

# Define the function to parse the text file and format the JSON
def parse_file_to_json(input_file, output_file):
    # Open the text file and read lines
    with open(input_file, 'r') as file:
        lines = file.readlines()

    # Initialize variables
    data = {}
    current_business = None

    # Iterate over each line
    for line in lines:
        # Strip any leading/trailing whitespace
        line = line.strip()

        # Skip empty lines
        if not line:
            continue

        # Check if the line starts with '36_' (indicates a new business entry)
        if line.startswith('36_'):
            # Split the line by tab characters
            parts = line.split('\t')

            # Extract business information
            authorization = parts[0]
            business_name = parts[1]
            business_focus = parts[2]
            contact = parts[3]
            email = parts[4]

            # Create a new business object
            current_business = {
                "Authorization": authorization,
                "Business Name": business_name,
                "Business Focus": business_focus,
                "Contact": contact,
                "Email": email
            }
        elif current_business:
            # Extract city and county information
            parts = line.split('\t')
            city = parts[0]
            county = parts[1]

            # Update current business with city and county
            current_business["City"] = city
            current_business["County"] = county

            # Add business to the data dictionary
            if county not in data:
                data[county] = {"County": county, "Businesses": []}
            data[county]["Businesses"].append(current_business)

            # Reset current business
            current_business = None

    # Convert data dictionary to a list
    output_data = list(data.values())

    # Write output data to a JSON file
    with open(output_file, 'w') as file:
        json.dump(output_data, file, indent=4)

# Example usage
parse_file_to_json('./hemp.txt', 'output.json')
