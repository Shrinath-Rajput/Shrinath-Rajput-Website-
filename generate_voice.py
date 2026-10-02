import sys
sys.path.append(r'C:\Users\rajpu\AppData\Roaming\Python\Python310\site-packages')
import asyncio
import edge_tts

TEXT = "Hello, I'm Shrinath Rajput. I'm an AI and Machine Learning Engineer and Full Stack Developer. I build intelligent AI solutions, agentic systems, and scalable applications."
VOICE = "en-IN-PrabhatNeural"
OUTPUT_FILE = "public/assets/videos/shrinath-voiceover.mp3"

async def main():
    communicate = edge_tts.Communicate(TEXT, VOICE, rate="-4%")
    await communicate.save(OUTPUT_FILE)
    print("Voiceover generated successfully!")

if __name__ == "__main__":
    asyncio.run(main())
