from langchain_community.llms import Ollama
from crewai import Agent, Task, Crew, Process

model = Ollama(model = "llama3")

question = "is hemp sale legal in NYS"

interpreter = Agent(
    role = "question interpreter",
    goal = "accurately simplify and decide what the central question being asked in a prompt is, and restate the prompt in simpler terms. interpret and simplify every message. if you do not understand completely, simly ask for clarification.",
    backstory="You are an Ai assistant whose only job is to interpret user questions accurately. Do not be afraid to state you do not understand a question. your job is to take a users question and restate it in the simlest most clear words possible.",
    verbose = True,
    allow_delegation = False,
    llm = model
)

responder = Agent(
    role = "question responder",
    goal = "based on the question asked accurately respond using infromation you absolutely know is true. If the question is vague at all, or you are unsure of your answer, defer the user to the help page. Make your answers concise and easy to understand.",
    backstory="You are an Ai assistant whose only job is to respond to user questions accurately and concisely.",
    verbose = True,
    allow_delegation = False,
    llm = model
)
interpret_question = Task(
    description = f"Interpret and restate the following: '{question}'",
    agent = interpreter,
    expected_output = "A short simplified version of the question in english",
    
)

respond_question = Task(
    description = f"Respond to the question '{question}'",
    agent = responder,
    expected_output = "a very concise response to the question based on the question"
)
crew = Crew(
    agents = [responder],
    tasks = [respond_question],
    verbose= 2,
    process = Process.sequential
)

output = crew.kickoff()
print(output + "\n")




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