import re

def parse_link(markdown):
    # Extract link_text and link_url using regex
    match = re.match(r'\[([^\]]+)\]\(([^)]+)\)', markdown)
    
    if match:
        link_text = match.group(1)
        link_url = match.group(2)
        return f'<a href="{link_url}">{link_text}</a>'
    
    return markdown 
