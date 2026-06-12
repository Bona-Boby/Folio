import requests
from datetime import date

# ---------------------------------
# FUNCTION 1: Weather
# ---------------------------------
def get_weather(city="Thiruvananthapuram"):
    """Fetch today's weather as a one-line text summary."""
    try:
        url = f"https://wttr.in/{city}?format=3"

        response = requests.get(url, timeout=10)
        response.raise_for_status()

        # Remove trailing whitespace/newlines
        return response.text.strip()

    except Exception as e:
        return f"Weather unavailable ({e})"


# ---------------------------------
# FUNCTION 2: Quote
# ---------------------------------
def get_quote():
    """Fetch a random motivational quote from ZenQuotes."""
    try:
        url = "https://zenquotes.io/api/random"

        response = requests.get(url, timeout=10)
        response.raise_for_status()

        data = response.json()

        quote = data[0]["q"]
        author = data[0]["a"]

        return f'"{quote}" — {author}'

    except Exception as e:
        return f"Quote unavailable ({e})"

# ---------------------------------
# FUNCTION 3: Build Summary
# ---------------------------------
def build_summary():
    """Assemble the full daily summary from all data sources."""

    today = date.today().strftime("%A, %d %B %Y")
    weather = get_weather()
    quote = get_quote()

    summary = f"""
🌅 PULSE - Daily Summary
📅 {today}

🌤 WEATHER
{weather}

💡 TODAY'S QUOTE
{quote}
"""

    return summary.strip()


# ---------------------------------
# FUNCTION 4: Run Everything
# ---------------------------------
def run():
    """Main entry point. Called by GitHub Actions."""

    summary = build_summary()

    # Print to GitHub Actions log
    print(summary)

    # Save to file
    with open("daily_summary.txt", "w", encoding="utf-8") as f:
        f.write(summary)

    print("Pulse ran successfully.")


# ---------------------------------
# Entry Point Guard
# ---------------------------------
# Runs only when executing:
# python bot.py
# Does not run when imported

if __name__ == "__main__":
    run()