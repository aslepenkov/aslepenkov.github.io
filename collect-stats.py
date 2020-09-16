import requests
import json
import os

username = os.getenv('GITHUB_REPOSITORY_OWNER')

def get_repos(username):
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)
    repos = response.json()
    return repos

def count_lines_of_code(repo):
    url = f"https://api.github.com/repos/{repo['full_name']}/languages"
    response = requests.get(url)
    languages = response.json()
    return languages

def calculate_stats(username):
    repos = get_repos(username)
    stats = {"total": 0, "Python": 0, "CSS": 0, "Jupyter Notebook": 0}
    for repo in repos:
        languages = count_lines_of_code(repo)
        if languages is None:
            continue
        for language, lines in languages.items():
            if language in stats:
                stats[language] += lines
            else:
                stats[language] = lines
            stats["total"] += lines
        if 'Jupyter Notebook' in stats and 'Python' in stats:
            stats['Python'] += stats.pop('Jupyter Notebook')
    return stats

def calculate_percents(stats):
    percentages = {}
    for language, lines in stats.items():
        if language != 'total':
            percentage = (lines / stats['total']) * 100
            percentages[language] = round(percentage, 2)

    return dict(sorted(percentages.items(), key=lambda x: x[1], reverse=True))


stats = calculate_stats(username)
data = calculate_percents(stats)

print(data)
os.makedirs('output', exist_ok=True)
# Write data to data.json file
with open('output/data.json', 'w') as file:
    json.dump(data, file)