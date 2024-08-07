import json

# Define the function to parse the text file and format the JSON
def parse_growers(input_file, output_file):
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
        
        
    
def parse_samplers_util(text):
    lines = text.strip().split("\n")
    result = []
    county_data = None
    samplers = []

    for line in lines:
        if line.strip() == "":
            continue
        # Check if the line is a county name
        if line[0].isalpha() and line.isalpha():
            if county_data:
                county_data['Samplers'] = samplers
                result.append(county_data)
            county_data = {"County": line, "Samplers": []}
            samplers = []
        # Check if the line starts with an Authorization code
        elif line.startswith("S"):
            parts = line.split()
            authorization = parts[0]
            name_parts = []
            i = 1
            while i < len(parts) and not parts[i][0].isdigit() and "@" not in parts[i] and parts[i] != '-N/A-':
                name_parts.append(parts[i])
                i += 1
            name = " ".join(name_parts)
            phone = parts[i] if i < len(parts) and (parts[i][0].isdigit() or parts[i] == '-N/A-') else ""
            email = parts[i + 1] if i + 1 < len(parts) and "@" in parts[i + 1] and parts[i + 1] != '-N/A-' else ""
            city = parts[i + 2] if i + 2 < len(parts) else ""

            # Set phone and email to empty string if they are -N/A-
            if phone == '-N/A-':
                phone = ""
            if email == '-N/A-':
                email = ""

            samplers.append({
                "Authorization": authorization,
                "Agent Name": name,
                "Phone Number": phone,
                "Email": email,
                "City": city,
                "County": county_data["County"]
            })

    if county_data:
        county_data['Samplers'] = samplers
        result.append(county_data)

    return result

def parse_samplers(input_file_path, output_file_path):
    with open(input_file_path, 'r') as file:
        text = file.read()

    parsed_data = parse_samplers_util(text)

    with open(output_file_path, 'w') as json_file:
        json.dump(parsed_data, json_file, indent=4)
        
        
def parse_testers_util(text):
    lines = text.strip().split("\n")
    result = []
    state_data = None
    testers = []

    for line in lines:
        if line.strip() == "":
            continue
        # Skip the category headers and the lines with counts
        if line.startswith("Laboratory Name") or line[0].isdigit():
            continue
        
        parts = line.split()
        # Check if the line is a state name (single uppercase word)
        if len(parts) == 1 and parts[0][0].isupper():
            if state_data:
                state_data['Testers'] = testers
                result.append(state_data)
            state_data = {"State": parts[0], "Testers": []}
            testers = []
        # Check if the line contains laboratory details
        elif state_data:
            name_parts = []
            i = 0
            while i < len(parts) and not parts[i][0].isdigit() and "@" not in parts[i] and parts[i] != '-N/A-':
                name_parts.append(parts[i])
                i += 1
            name = " ".join(name_parts)
            phone = parts[i] if i < len(parts) and (parts[i][0].isdigit() or parts[i] == '-N/A-') else ""
            email = parts[i + 1] if i + 1 < len(parts) and "@" in parts[i + 1] and parts[i + 1] != '-N/A-' else ""

            # Extract city from the remaining parts until the comma
            city = ""
            if i + 2 < len(parts):
                city_parts = []
                while i + 2 < len(parts) and not parts[i + 2].endswith(','):
                    city_parts.append(parts[i + 2])
                    i += 1
                if i + 2 < len(parts) and parts[i + 2].endswith(','):
                    city_parts.append(parts[i + 2].rstrip(','))
                    i += 1
                city = " ".join(city_parts)

            # Set phone and email to empty string if they are -N/A-
            if phone == '-N/A-':
                phone = ""
            if email == '-N/A-':
                email = ""

            testers.append({
                "Laboratory Name": name,
                "Phone Number": phone,
                "Email": email,
                "City": city,
                "State": state_data["State"]
            })

    if state_data:
        state_data['Testers'] = testers
        result.append(state_data)

    return result

def parse_testers(input_file_path, output_file_path):
    with open(input_file_path, 'r') as file:
        text = file.read()

    parsed_data = parse_testers_util(text)
    with open(output_file_path, 'w') as json_file:
        json.dump(parsed_data, json_file, indent=4)




# Example usage
input_file = './samplers.txt'  # Replace with your input file path
output_file = 'sampler_output.json'  # Replace with your desired output file path

parse_samplers(input_file, output_file)
parse_growers('./hemp.txt', 'hemp_output.json')
parse_testers('./testers.txt', 'testers_output.json')
