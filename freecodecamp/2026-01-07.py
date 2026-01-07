def parse_unordered_list(markdown):
    items = markdown.split('\n')
    list_items = map(lambda item: f'<li>{item.replace("-", "", 1).strip()}</li>', items)
    return f'<ul>{"".join(list_items)}</ul>'
