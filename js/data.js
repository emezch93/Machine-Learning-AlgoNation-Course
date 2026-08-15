/* CodeVent Machine Learning - course content */

const COURSE = {
  "title": "CodeVent Machine Learning",
  "tagline": "Machine Learning from foundations to a complete capstone project, taught with Python and real algorithms.",
  "modules": [
    {
      "id": "m1",
      "title": "Machine Learning Foundations",
      "short": "Foundations",
      "description": "What Machine Learning is, supervised and unsupervised learning, training data, and the ML workflow.",
      "lessons": [
        {
          "id": "m1-l1",
          "title": "What Machine Learning Is",
          "concept": "Machine Learning is a branch of computer science where a program improves at a task by learning from data instead of following rules written by a programmer. A model is the object that does the learning: it takes data in and produces a rule or pattern it can apply to new data.",
          "example": "A spam filter is not given a fixed list of spam rules. It is given thousands of emails labeled spam or not spam, and it learns which word patterns are associated with each label. The result is a model that can classify a new, unseen email.",
          "practice": {
            "task": "Name one everyday application that likely uses a Machine Learning model, and identify what data it would need to learn from.",
            "hint": "Think of something that gives you a recommendation or prediction: a streaming service, a maps app, a spam filter.",
            "solution": "Example: A music streaming app recommends songs. It learns from data on which songs a listener has played, skipped, or liked, then predicts which new songs the listener is likely to enjoy."
          },
          "exercise": "Write one sentence in your own words explaining the difference between a program with fixed rules and a Machine Learning model."
        },
        {
          "id": "m1-l2",
          "title": "Supervised and Unsupervised Learning",
          "concept": "Supervised learning trains a model on data that already has the correct answer attached, called a label. Unsupervised learning trains a model on data with no labels, and the model finds structure or groupings on its own.",
          "example": "Predicting a house price from its size and location is supervised learning: each historical house in the training data has a known sale price (the label). Grouping customers into segments based on purchase behavior, with no predefined groups, is unsupervised learning.",
          "practice": {
            "task": "Classify each as supervised or unsupervised: (1) predicting whether an email is spam, (2) grouping news articles into topics with no predefined topic list.",
            "hint": "Ask whether the training data includes a known correct answer for each example.",
            "solution": "(1) Supervised - each email in training data is labeled spam or not spam. (2) Unsupervised - there is no predefined topic label, the model discovers groupings."
          },
          "exercise": "List two problems from your own interests. Decide whether each is supervised or unsupervised, and explain why."
        },
        {
          "id": "m1-l3",
          "title": "Training Data, Features, and Labels",
          "concept": "Training data is the set of examples a model learns from. Each example is described by features, the measurable input values, and, in supervised learning, a label, the known correct output.",
          "example": "In a dataset used to predict student pass or fail results, the features might be study hours, previous grade, and attendance. The label is the actual result: pass or fail.",
          "practice": {
            "task": "For a dataset predicting a car's fuel efficiency, list three features you would expect and name the label.",
            "hint": "Features are measurable inputs about the car. The label is the value being predicted.",
            "solution": "Features: engine size, weight, number of cylinders. Label: fuel efficiency (miles per gallon or liters per 100km)."
          },
          "exercise": "Pick any prediction problem and write out its features and label in a short table."
        },
        {
          "id": "m1-l4",
          "title": "Training, Testing, and Prediction",
          "concept": "Training is the process where a model adjusts itself to fit the training data. Testing checks how well the trained model performs on data it has not seen before. Prediction is using the trained model to produce an output for new input data.",
          "example": "A model is trained on 800 historical house sales, then tested on 200 different house sales it never saw during training. If it performs well on the test set, it is more likely to give reliable predictions on brand new houses.",
          "practice": {
            "task": "Explain why a model should never be tested on the exact same data it was trained on.",
            "hint": "Consider what happens if the model has already memorized the answers for that data.",
            "solution": "A model tested on its own training data can appear accurate simply by memorizing the answers, rather than learning a pattern that generalizes to new data. This gives a misleadingly high performance estimate."
          },
          "exercise": "Describe, in your own words, what would happen if a weather prediction model were only ever tested on days it was trained on."
        },
        {
          "id": "m1-l5",
          "title": "The Machine Learning Workflow",
          "concept": "A typical Machine Learning project follows a repeatable sequence: collect data, prepare the data, choose a model, train the model, test it, and use it to make predictions. Each step depends on the one before it.",
          "example": "To build a model that predicts loan default: collect historical loan records, clean and prepare the data, split it into training and testing sets, train a model on the training set, evaluate it on the testing set, then use the trained model on new loan applications.",
          "practice": {
            "task": "Put these steps in the correct order: Train the model, Collect data, Test the model, Prepare the data.",
            "hint": "Data has to exist and be cleaned before a model can learn from it.",
            "solution": "Collect data, Prepare the data, Train the model, Test the model."
          },
          "exercise": "Sketch the six-step workflow for a project idea of your own, one line per step."
        }
      ]
    },
    {
      "id": "m2",
      "title": "Python for Machine Learning",
      "short": "Python",
      "description": "The Python you need for Machine Learning: variables, control flow, functions, and data structures.",
      "lessons": [
        {
          "id": "m2-l1",
          "title": "Variables and Data Types",
          "concept": "A variable stores a value under a name so it can be reused. Python's core data types are int (whole numbers), float (decimal numbers), str (text), and bool (True or False).",
          "example": "Machine Learning code constantly stores values like a feature count, a learning rate, or a dataset name in variables.",
          "code": {
            "python": "learning_rate = 0.01\nnum_features = 4\ndataset_name = \"iris\"\nis_normalized = False\n\nprint(type(learning_rate))\nprint(type(num_features))"
          },
          "practice": {
            "task": "Create a variable for a model's accuracy (a float) and a variable for the number of training epochs (an int), then print both.",
            "hint": "An epoch count is a whole number; accuracy is usually a decimal like 0.92.",
            "solution": "accuracy = 0.92\nepochs = 50\nprint(accuracy, epochs)"
          },
          "exercise": "Create one variable of each of the four core types and print their types using type()."
        },
        {
          "id": "m2-l2",
          "title": "Operators and Conditions",
          "concept": "Arithmetic operators (+, -, *, /) perform calculations. Comparison operators (==, !=, >, <) produce True or False. if, elif, and else run different code depending on a condition.",
          "example": "Deciding whether a predicted probability counts as a positive classification uses a simple condition.",
          "code": {
            "python": "probability = 0.73\nthreshold = 0.5\n\nif probability >= threshold:\n    prediction = 1\nelse:\n    prediction = 0\n\nprint(\"Prediction:\", prediction)"
          },
          "practice": {
            "task": "Write a condition that labels a probability as \"high confidence\" if it is 0.9 or above, \"medium\" if 0.5 or above, and \"low\" otherwise.",
            "hint": "Use if, elif, and else in that order, checking the highest threshold first.",
            "solution": "probability = 0.65\nif probability >= 0.9:\n    label = \"high confidence\"\nelif probability >= 0.5:\n    label = \"medium\"\nelse:\n    label = \"low\"\nprint(label)"
          },
          "exercise": "Write a condition that checks if a dataset's row count (a variable) is above 1000 and prints \"large dataset\" or \"small dataset\"."
        },
        {
          "id": "m2-l3",
          "title": "Loops",
          "concept": "A for loop repeats code for each item in a sequence. A while loop repeats as long as a condition stays true. Loops are used throughout Machine Learning code to process rows of data or repeat training steps.",
          "example": "Looping over a list of accuracy scores from several model runs to find the average.",
          "code": {
            "python": "scores = [0.81, 0.85, 0.79, 0.88]\ntotal = 0\n\nfor score in scores:\n    total = total + score\n\naverage = total / len(scores)\nprint(\"Average accuracy:\", average)"
          },
          "practice": {
            "task": "Write a for loop that prints only the scores from the list above that are greater than 0.8.",
            "hint": "Use an if statement inside the for loop.",
            "solution": "scores = [0.81, 0.85, 0.79, 0.88]\nfor score in scores:\n    if score > 0.8:\n        print(score)"
          },
          "exercise": "Write a while loop that counts down from 5 to 1, printing each number."
        },
        {
          "id": "m2-l4",
          "title": "Functions",
          "concept": "A function groups reusable code under a name. It can accept parameters as input and return a value as output. Functions keep Machine Learning code organized into clear, testable steps.",
          "example": "A function that calculates accuracy from the number of correct predictions and the total number of predictions.",
          "code": {
            "python": "def calculate_accuracy(correct, total):\n    return correct / total\n\naccuracy = calculate_accuracy(87, 100)\nprint(\"Accuracy:\", accuracy)"
          },
          "practice": {
            "task": "Write a function normalize(value, min_value, max_value) that scales value to a 0 to 1 range using the formula (value - min) / (max - min).",
            "hint": "Return the result of the formula directly from the function.",
            "solution": "def normalize(value, min_value, max_value):\n    return (value - min_value) / (max_value - min_value)\n\nprint(normalize(15, 0, 20))"
          },
          "exercise": "Write a function that takes a list of numbers and returns the highest value without using Python's built-in max()."
        },
        {
          "id": "m2-l5",
          "title": "Lists and Tuples",
          "concept": "A list is an ordered, changeable collection, written with square brackets. A tuple is an ordered, unchangeable collection, written with parentheses. Both can hold mixed data types.",
          "example": "A list often holds a column of feature values; a tuple is often used for a fixed pair of values, like image dimensions that should not change.",
          "code": {
            "python": "study_hours = [2, 4, 6, 8, 10]\nimage_shape = (28, 28)\n\nstudy_hours.append(12)\nprint(study_hours)\nprint(image_shape[0], image_shape[1])"
          },
          "practice": {
            "task": "Create a list of five exam scores, then print the highest score using max() and the lowest using min().",
            "hint": "max() and min() work directly on a list of numbers.",
            "solution": "scores = [72, 88, 91, 60, 79]\nprint(max(scores))\nprint(min(scores))"
          },
          "exercise": "Create a tuple representing a dataset's shape (rows, columns) and print each value separately using indexing."
        },
        {
          "id": "m2-l6",
          "title": "Dictionaries and Sets",
          "concept": "A dictionary stores key-value pairs, useful for named data like a row of features. A set stores unique, unordered values, useful for finding distinct categories in a column.",
          "example": "A dictionary can represent one data record; a set can list the distinct classes found in a label column.",
          "code": {
            "python": "record = {\"study_hours\": 6, \"attendance\": 85, \"result\": \"pass\"}\nprint(record[\"result\"])\n\nlabels = [\"pass\", \"fail\", \"pass\", \"pass\", \"fail\"]\nunique_labels = set(labels)\nprint(unique_labels)"
          },
          "practice": {
            "task": "Create a dictionary representing one house record with price, size, and location keys, then print only the price.",
            "hint": "Access a dictionary value using record[\"key\"].",
            "solution": "house = {\"price\": 250000, \"size\": 1400, \"location\": \"suburb\"}\nprint(house[\"price\"])"
          },
          "exercise": "Given a list of ten repeated city names, use a set to print only the distinct cities."
        },
        {
          "id": "m2-l7",
          "title": "Basic File Handling",
          "concept": "Python reads and writes files using open(). Machine Learning workflows commonly open CSV files, though the pandas library, covered in the next module, handles this more directly for datasets.",
          "example": "Reading a plain text file line by line to check its contents before loading it as a dataset.",
          "code": {
            "python": "with open(\"notes.txt\", \"r\") as file:\n    for line in file:\n        print(line.strip())"
          },
          "practice": {
            "task": "Write code that opens a file named results.txt and writes the line \"Accuracy: 0.91\" to it.",
            "hint": "Use open() with mode \"w\" to write, and call .write() with a string.",
            "solution": "with open(\"results.txt\", \"w\") as file:\n    file.write(\"Accuracy: 0.91\")"
          },
          "exercise": "Write code that reads a file and counts how many lines it contains."
        }
      ]
    },
    {
      "id": "m3",
      "title": "Data Handling",
      "short": "Data",
      "description": "NumPy, pandas, loading and cleaning datasets, preprocessing, and train/test splits.",
      "lessons": [
        {
          "id": "m3-l1",
          "title": "NumPy Arrays",
          "concept": "NumPy provides the array, a fixed-type grid of numbers that supports fast mathematical operations. Most Machine Learning libraries, including pandas and scikit-learn, are built on top of NumPy arrays.",
          "example": "Converting a list of feature values into a NumPy array to perform element-wise math.",
          "code": {
            "python": "import numpy as np\n\nhours = np.array([2, 4, 6, 8, 10])\nscores = hours * 9 + 15\n\nprint(scores)\nprint(\"Mean:\", np.mean(scores))\nprint(\"Standard deviation:\", np.std(scores))"
          },
          "runNote": "Install with: pip install numpy",
          "practice": {
            "task": "Create a NumPy array of five numbers and print its mean, minimum, and maximum using np.mean, np.min, and np.max.",
            "hint": "NumPy functions take the array directly as an argument: np.mean(array).",
            "solution": "import numpy as np\ndata = np.array([12, 45, 7, 89, 23])\nprint(np.mean(data), np.min(data), np.max(data))"
          },
          "exercise": "Create two NumPy arrays of the same length and add them together element-wise."
        },
        {
          "id": "m3-l2",
          "title": "Pandas and DataFrames",
          "concept": "Pandas is a library for working with tabular data. Its main structure, the DataFrame, holds rows and named columns, similar to a spreadsheet.",
          "example": "Building a small DataFrame from a dictionary of columns.",
          "code": {
            "python": "import pandas as pd\n\ndata = {\n    \"study_hours\": [2, 4, 6, 8],\n    \"result\": [\"fail\", \"fail\", \"pass\", \"pass\"]\n}\ndf = pd.DataFrame(data)\nprint(df)"
          },
          "runNote": "Install with: pip install pandas",
          "practice": {
            "task": "Create a DataFrame with columns city and population for three cities, then print it.",
            "hint": "Build a dictionary first, then pass it to pd.DataFrame().",
            "solution": "import pandas as pd\ndata = {\"city\": [\"Lagos\", \"Abuja\", \"Kano\"], \"population\": [15000000, 3000000, 4000000]}\ndf = pd.DataFrame(data)\nprint(df)"
          },
          "exercise": "Create a DataFrame with four rows and add a new column computed from an existing one."
        },
        {
          "id": "m3-l3",
          "title": "Loading and Inspecting Datasets",
          "concept": "pandas loads datasets from files with functions like pd.read_csv(). Once loaded, .head(), .info(), and .describe() give a quick overview of the data's shape, types, and statistics.",
          "example": "Loading a CSV file and checking its structure before doing any further work.",
          "code": {
            "python": "import pandas as pd\n\ndf = pd.read_csv(\"dataset.csv\")\nprint(df.head())\nprint(df.info())\nprint(df.describe())"
          },
          "runNote": "Requires a dataset.csv file in the same folder as the script. Any CSV file with column headers will work for practice.",
          "practice": {
            "task": "List what each of these tells you: df.head(), df.info(), df.describe().",
            "hint": "Think about shape, data types, and summary statistics separately.",
            "solution": "df.head() shows the first five rows. df.info() shows column names, data types, and non-null counts. df.describe() shows count, mean, standard deviation, min, max, and quartiles for numeric columns."
          },
          "exercise": "Load any CSV file you have access to and print its shape using df.shape."
        },
        {
          "id": "m3-l4",
          "title": "Selecting Data",
          "concept": "Columns are selected with df[\"column_name\"]. Rows are selected by position with .iloc[] or by label/condition with .loc[]. Filtering selects rows that meet a condition.",
          "example": "Selecting only the rows where a student passed.",
          "code": {
            "python": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"study_hours\": [2, 4, 6, 8],\n    \"result\": [\"fail\", \"fail\", \"pass\", \"pass\"]\n})\n\npassed = df[df[\"result\"] == \"pass\"]\nprint(passed)\nprint(df[\"study_hours\"])"
          },
          "practice": {
            "task": "From the DataFrame above, select only the rows where study_hours is greater than 5.",
            "hint": "Use a condition inside square brackets: df[df[\"column\"] > value].",
            "solution": "result = df[df[\"study_hours\"] > 5]\nprint(result)"
          },
          "exercise": "Select two specific columns from a DataFrame at once using df[[\"col1\", \"col2\"]]."
        },
        {
          "id": "m3-l5",
          "title": "Cleaning Data and Missing Values",
          "concept": "Real datasets often contain missing values. .isnull() finds them, .dropna() removes rows with missing values, and .fillna() replaces them with a chosen value, such as the column mean.",
          "example": "Filling missing values in a numeric column with the column's average instead of dropping the row entirely.",
          "code": {
            "python": "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\"score\": [70, np.nan, 85, 90, np.nan]})\nprint(df.isnull().sum())\n\ndf[\"score\"] = df[\"score\"].fillna(df[\"score\"].mean())\nprint(df)"
          },
          "practice": {
            "task": "Given a DataFrame with missing values in a column named age, write code to drop any row where age is missing.",
            "hint": "Use df.dropna(subset=[\"age\"]).",
            "solution": "df = df.dropna(subset=[\"age\"])\nprint(df)"
          },
          "exercise": "Count how many missing values exist in each column of a DataFrame using df.isnull().sum()."
        },
        {
          "id": "m3-l6",
          "title": "Basic Preprocessing",
          "concept": "Models generally require numeric input. Categorical columns are converted to numbers with encoding, such as pd.get_dummies(). Numeric columns are often scaled to a common range so no single feature dominates due to its size.",
          "example": "Converting a categorical column to numeric with one-hot encoding.",
          "code": {
            "python": "import pandas as pd\nfrom sklearn.preprocessing import StandardScaler\n\ndf = pd.DataFrame({\n    \"city\": [\"Lagos\", \"Abuja\", \"Lagos\"],\n    \"income\": [50000, 62000, 48000]\n})\n\ndf_encoded = pd.get_dummies(df, columns=[\"city\"])\nprint(df_encoded)\n\nscaler = StandardScaler()\ndf_encoded[[\"income\"]] = scaler.fit_transform(df_encoded[[\"income\"]])\nprint(df_encoded)"
          },
          "runNote": "Install with: pip install scikit-learn",
          "practice": {
            "task": "Explain why a feature ranging from 0 to 1,000,000 could cause problems next to a feature ranging from 0 to 1, in a model that is sensitive to feature scale.",
            "hint": "Consider how distance-based or gradient-based algorithms weigh large numbers versus small ones.",
            "solution": "A feature with a much larger numeric range can dominate distance calculations or gradient updates simply due to its scale, not because it is more important. Scaling puts features on a comparable range so the model weighs them based on their actual signal."
          },
          "exercise": "One-hot encode a categorical column of your choice using pd.get_dummies() and print the result."
        },
        {
          "id": "m3-l7",
          "title": "Features, Labels, and Train/Test Split",
          "concept": "Before training, a dataset is split into X (features) and y (label), then further split into a training set and a testing set so the model can be evaluated on unseen data.",
          "example": "Using scikit-learn's train_test_split to create training and testing sets from a DataFrame.",
          "code": {
            "python": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\n\ndf = pd.DataFrame({\n    \"study_hours\": [2, 4, 6, 8, 10, 3, 5, 7],\n    \"attendance\": [60, 65, 80, 85, 90, 62, 75, 82],\n    \"result\": [0, 0, 1, 1, 1, 0, 1, 1]\n})\n\nX = df[[\"study_hours\", \"attendance\"]]\ny = df[\"result\"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.25, random_state=42\n)\nprint(\"Training rows:\", len(X_train))\nprint(\"Testing rows:\", len(X_test))"
          },
          "runNote": "Install with: pip install scikit-learn",
          "practice": {
            "task": "Explain what test_size=0.25 controls, and what random_state=42 is for.",
            "hint": "One controls a proportion; the other controls repeatability.",
            "solution": "test_size=0.25 sets aside 25 percent of the data for testing and 75 percent for training. random_state=42 fixes the random shuffling so the same split is produced every time the code runs, making results reproducible."
          },
          "exercise": "Split a DataFrame of your own into an 80/20 train/test split and print the row counts of each."
        }
      ]
    },
    {
      "id": "m4",
      "title": "Machine Learning Fundamentals",
      "short": "Fundamentals",
      "description": "Regression, classification, clustering, overfitting, underfitting, and the modeling workflow.",
      "lessons": [
        {
          "id": "m4-l1",
          "title": "Regression and Classification",
          "concept": "Regression predicts a continuous number, such as a price or temperature. Classification predicts a category from a fixed set, such as spam or not spam. Both are supervised learning tasks; they differ in the type of label being predicted.",
          "example": "Predicting a house's sale price is regression. Predicting whether a house will sell within 30 days is classification.",
          "practice": {
            "task": "Classify each as regression or classification: (1) predicting tomorrow's temperature, (2) predicting whether a loan will default.",
            "hint": "Ask whether the output is a number on a continuous scale or a label from a fixed set of categories.",
            "solution": "(1) Regression - temperature is a continuous number. (2) Classification - default or no default is a category."
          },
          "exercise": "Write two problem statements of your own, one regression and one classification."
        },
        {
          "id": "m4-l2",
          "title": "Clustering",
          "concept": "Clustering is an unsupervised technique that groups data points based on similarity, without predefined labels. Points in the same cluster are more similar to each other than to points in other clusters.",
          "example": "Grouping retail customers into clusters based on purchase frequency and average order value, without knowing in advance what the groups represent.",
          "practice": {
            "task": "Give one business reason a company would want to cluster its customers.",
            "hint": "Think about marketing, pricing, or product recommendations aimed at different customer groups.",
            "solution": "A company could target each cluster with different marketing messages, for example offering loyalty discounts to a high-frequency, high-spend cluster and re-engagement offers to a low-activity cluster."
          },
          "exercise": "Describe one dataset where you do not know the right groupings in advance, making it a candidate for clustering."
        },
        {
          "id": "m4-l3",
          "title": "Training Models and Making Predictions",
          "concept": "In scikit-learn, nearly every model follows the same pattern: create the model, call .fit(X_train, y_train) to train it, then call .predict(X_test) to generate predictions on new data.",
          "example": "This fit-predict pattern is consistent across almost all scikit-learn models, regardless of the underlying algorithm.",
          "code": {
            "python": "from sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\n\nprint(predictions[:5])"
          },
          "runNote": "This example assumes X_train, y_train, and X_test already exist from a train/test split, as covered in Module 3.",
          "practice": {
            "task": "Name the two method calls every scikit-learn model needs before it can produce predictions on new data.",
            "hint": "One call happens before training; the other happens during, then prediction happens last.",
            "solution": "model.fit(X_train, y_train) trains the model, and model.predict(X_test) generates predictions. Creating the model with a line like LinearRegression() must happen first."
          },
          "exercise": "Write the three lines of code that create, train, and predict with any scikit-learn model, using placeholder variable names."
        },
        {
          "id": "m4-l4",
          "title": "Overfitting and Underfitting",
          "concept": "Overfitting happens when a model learns the training data too closely, including its noise, and performs poorly on new data. Underfitting happens when a model is too simple to capture the pattern in the data at all, performing poorly on both training and new data.",
          "example": "A model with very high training accuracy but much lower testing accuracy is likely overfitting. A model with low accuracy on both training and testing data is likely underfitting.",
          "practice": {
            "task": "A model scores 98 percent accuracy on training data and 61 percent on testing data. Is this overfitting or underfitting?",
            "hint": "Compare the gap between training and testing performance.",
            "solution": "This is overfitting. The large gap between high training accuracy and much lower testing accuracy shows the model memorized the training data rather than learning a pattern that generalizes."
          },
          "exercise": "Describe one change you could make to a model or dataset to reduce overfitting."
        },
        {
          "id": "m4-l5",
          "title": "Model Evaluation Basics",
          "concept": "A trained model is judged using metrics computed on the test set, not the training set. Different problem types use different metrics: regression commonly uses error-based metrics, classification commonly uses accuracy-based metrics. Module 7 covers these in detail.",
          "example": "Comparing two models by their test-set accuracy rather than their training-set accuracy avoids being misled by overfitting.",
          "practice": {
            "task": "Explain why comparing two models on their training accuracy alone can be misleading.",
            "hint": "Consider a model that overfits and produces very high training accuracy.",
            "solution": "A model can achieve high training accuracy simply by memorizing the training data, without learning a pattern that generalizes. Test-set performance is a more honest measure of how the model will perform on new data."
          },
          "exercise": "Write down which metric you would check first to compare two regression models, and which you would check first for two classification models."
        },
        {
          "id": "m4-l6",
          "title": "The Machine Learning Modeling Workflow",
          "concept": "With data prepared, the practical modeling workflow is: choose a problem type (regression, classification, or clustering), select a candidate algorithm, train it, evaluate it on the test set, and compare it against alternatives before finalizing a choice.",
          "example": "For a house price problem, a learner might train both a Linear Regression model and a Random Forest model, then compare their test-set error to decide which to use.",
          "practice": {
            "task": "Outline the modeling workflow for a project predicting whether a customer will cancel a subscription.",
            "hint": "This is a classification problem. Walk through problem type, algorithm choice, training, evaluation, comparison.",
            "solution": "Problem type: classification (cancel or not cancel). Choose a candidate algorithm, such as Logistic Regression. Train it on the training set. Evaluate it on the test set using classification metrics. Compare against another algorithm, such as Random Forest, before finalizing a choice."
          },
          "exercise": "Write the modeling workflow, step by step, for a project idea of your own."
        }
      ]
    },
    {
      "id": "m5",
      "title": "Core Machine Learning Algorithms",
      "short": "Core Algorithms",
      "description": "Linear Regression, Logistic Regression, KNN, Decision Trees, Random Forest, and SVM.",
      "lessons": [
        {
          "id": "m5-l1",
          "title": "Linear Regression",
          "concept": "Linear Regression is a supervised algorithm that fits a straight line, y = mx + b, to predict a continuous output from input features. It finds the line that minimizes the sum of squared differences between predicted and actual values, a method called least squares.",
          "example": "Predicting a student's test score from study hours. The model learns a slope (m) and intercept (b) from historical study hours and scores, then applies y = mx + b to new study-hour values.",
          "code": {
            "python": "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error, r2_score\n\n# Generate a dataset with a positive relationship\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'study_hours': np.random.uniform(1, 10, 100)\n})\ndf['test_scores'] = 20 + 7.5 * df['study_hours'] + np.random.normal(0, 10, 100)\n\nprint(\"Dataset shape:\", df.shape)\nprint(df.describe())\n\n# Split into features and label\nX = df[['study_hours']]\ny = df['test_scores']\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Train the model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# Predict and evaluate\ny_pred = model.predict(X_test)\nprint(\"Slope:\", model.coef_[0])\nprint(\"Intercept:\", model.intercept_)\nprint(\"R2 score:\", r2_score(y_test, y_pred))\nprint(\"Mean Squared Error:\", mean_squared_error(y_test, y_pred))"
          },
          "runNote": "Install with: pip install pandas numpy scikit-learn",
          "practice": {
            "task": "After training, model.coef_[0] is 7.4 and model.intercept_ is 21.0. Predict the output for an input of 5.",
            "hint": "Apply y = mx + b with m = 7.4, b = 21.0, x = 5.",
            "solution": "y = 7.4 * 5 + 21.0 = 58.0"
          },
          "exercise": "Explain in one sentence what R2 score close to 1.0 versus close to 0.0 tells you about a Linear Regression model."
        },
        {
          "id": "m5-l2",
          "title": "Logistic Regression",
          "concept": "Despite its name, Logistic Regression is a classification algorithm. It applies the sigmoid function to a linear combination of features, producing a probability between 0 and 1, which is then thresholded into a class label.",
          "example": "Predicting whether a student passes or fails from study hours and previous grades. The model outputs a probability of passing; a probability of 0.5 or above is typically classified as pass.",
          "code": {
            "python": "#  Logistic Regression - Complete Implementation (Run All at Once)\n\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import accuracy_score, classification_report, confusion_matrix, roc_auc_score, roc_curve\n\nclass LogisticRegression:\n    def __init__(self, learning_rate=0.01, n_iterations=1000):\n        self.learning_rate = learning_rate\n        self.n_iterations = n_iterations\n        self.weights = None\n        self.bias = None\n        self.cost_history = []\n    \n    def sigmoid(self, z):\n        # Clip z to prevent overflow\n        z = np.clip(z, -500, 500)\n        return 1 / (1 + np.exp(-z))\n    \n    def fit(self, X, y):\n        n_samples, n_features = X.shape\n        # Initialize parameters\n        self.weights = np.zeros(n_features)\n        self.bias = 0\n        \n        # Gradient descent\n        for i in range(self.n_iterations):\n            # Linear model\n            linear_model = np.dot(X, self.weights) + self.bias\n            # Apply sigmoid\n            y_pred = self.sigmoid(linear_model)\n            \n            # Compute cost (log loss)\n            cost = - (1/n_samples) * np.sum(y * np.log(y_pred + 1e-15) + (1 - y) * np.log(1 - y_pred + 1e-15))\n            self.cost_history.append(cost)\n            \n            # Compute gradients\n            dw = (1/n_samples) * np.dot(X.T, (y_pred - y))\n            db = (1/n_samples) * np.sum(y_pred - y)\n            \n            # Update parameters\n            self.weights -= self.learning_rate * dw\n            self.bias -= self.learning_rate * db\n            \n            if i % 200 == 0:\n                print(f\"Iteration {i}: Cost = {cost:.6f}\")\n    \n    def predict_proba(self, X):\n        linear_model = np.dot(X, self.weights) + self.bias\n        return self.sigmoid(linear_model)\n    \n    def predict(self, X, threshold=0.5):\n        probabilities = self.predict_proba(X)\n        return (probabilities >= threshold).astype(int)\n    \n    def get_params(self):\n        return self.weights, self.bias\n\n#  Generate sample student dataset: Predict if student passes (1) or fails (0)\nnp.random.seed(42)\nn_samples = 300\n\n# Features: study_hours, previous_grade\nstudy_hours = np.random.uniform(1, 12, n_samples)\nprevious_grade = np.random.uniform(40, 100, n_samples)\n\n# Create target: higher study hours + grades = higher chance of passing\nz = study_hours * 0.5 + previous_grade * 0.05 - 6  # Decision boundary\nprob = 1 / (1 + np.exp(-z))  # Sigmoid\nnoise = np.random.normal(0, 0.2, n_samples)\nprob = np.clip(prob + noise, 0, 1)\nexam_result = (np.random.random(n_samples) < prob).astype(int)\n\n# Create DataFrame\ndf = pd.DataFrame({\n    'study_hours': study_hours,\n    'previous_grade': previous_grade,\n    'exam_result': exam_result\n})\n\nprint(\" Dataset Overview:\")\nprint(f\"Shape: {df.shape}\")\nprint(f\"Pass rate: {df['exam_result'].mean():.2%}\")\nprint(\"\\nFirst 5 rows:\")\nprint(df.head())\n\n#  Prepare data\nX = df[['study_hours', 'previous_grade']].values\ny = df['exam_result'].values\n\n# Split and scale\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\n#  Train model\nmodel = LogisticRegression(learning_rate=0.1, n_iterations=1000)\nmodel.fit(X_train_scaled, y_train)\n\n#  Get parameters\nweights, bias = model.get_params()\nprint(f\"\\n Final Model Parameters:\")\nprint(f\"Intercept (bias): {bias:.4f}\")\nprint(f\"Weight for Study Hours: {weights[0]:.4f}\")\nprint(f\"Weight for Previous Grade: {weights[1]:.4f}\")\n\n#  Make predictions\ny_train_pred = model.predict(X_train_scaled)\ny_test_pred = model.predict(X_test_scaled)\ny_test_proba = model.predict_proba(X_test_scaled)\n\n#  Evaluate model\ntrain_acc = accuracy_score(y_train, y_train_pred)\ntest_acc = accuracy_score(y_test, y_test_pred)\nroc_auc = roc_auc_score(y_test, y_test_proba)\n\nprint(f\"\\n Model Performance:\")\nprint(f\"Training Accuracy: {train_acc:.4f}\")\nprint(f\"Testing Accuracy: {test_acc:.4f}\")\nprint(f\"ROC AUC Score: {roc_auc:.4f}\")\nprint(f\"\\n Classification Report (Test Set):\")\nprint(classification_report(y_test, y_test_pred, target_names=['Fail', 'Pass']))\n\n# ️ Visualize results\nfig, axes = plt.subplots(2, 2, figsize=(15, 12))\n\n# 1. Cost function over iterations\naxes[0, 0].plot(model.cost_history, color='#7c3aed')\naxes[0, 0].set_title('Cost Function Over Iterations')\naxes[0, 0].set_xlabel('Iterations')\naxes[0, 0].set_ylabel('Log Loss')\naxes[0, 0].grid(True, alpha=0.3)\n\n# 2. Decision boundary\naxes[0, 1].scatter(df[df['exam_result'] == 0]['study_hours'], \n                   df[df['exam_result'] == 0]['previous_grade'], \n                   alpha=0.6, label='Fail', color='#ef4444')\naxes[0, 1].scatter(df[df['exam_result'] == 1]['study_hours'], \n                   df[df['exam_result'] == 1]['previous_grade'], \n                   alpha=0.6, label='Pass', color='#10b981')\naxes[0, 1].set_title('Decision Boundary')\naxes[0, 1].set_xlabel('Study Hours')\naxes[0, 1].set_ylabel('Previous Grade')\naxes[0, 1].legend()\naxes[0, 1].grid(True, alpha=0.3)\n\n# 3. ROC Curve\nfpr, tpr, _ = roc_curve(y_test, y_test_proba)\naxes[1, 0].plot(fpr, tpr, color='#059669', label=f'ROC Curve (AUC = {roc_auc:.4f})')\naxes[1, 0].plot([0, 1], [0, 1], 'k--', label='Random')\naxes[1, 0].set_title('ROC Curve')\naxes[1, 0].set_xlabel('False Positive Rate')\naxes[1, 0].set_ylabel('True Positive Rate')\naxes[1, 0].legend()\naxes[1, 0].grid(True, alpha=0.3)\n\n# 4. Confusion Matrix\ncm = confusion_matrix(y_test, y_test_pred)\nsns.heatmap(cm, annot=True, fmt='d', cmap='Blues', ax=axes[1, 1])\naxes[1, 1].set_title('Confusion Matrix')\naxes[1, 1].set_xlabel('Predicted')\naxes[1, 1].set_ylabel('Actual')\n\nplt.tight_layout()\nplt.show()\n\n#  Make predictions for new students\nnew_students = np.array([[3.5, 65], [5.0, 75], [7.5, 85], [2.0, 55]])\nnew_students_scaled = scaler.transform(new_students)\nnew_predictions = model.predict(new_students_scaled)\nnew_probabilities = model.predict_proba(new_students_scaled)\n\nprint(f\"\\n Predictions for New Students:\")\nfor i, (hours, grade) in enumerate(new_students):\n    result = \"PASS\" if new_predictions[i] == 1 else \"FAIL\"\n    prob = new_probabilities[i]\n    print(f\"Student {i+1}: {hours}h, {grade}%  {result} (Probability: {prob:.4f})\")\n\nprint(f\"\\n Logistic Regression Complete! Model is trained and ready for predictions.\")"
          },
          "runNote": "Install with: pip install pandas numpy scikit-learn",
          "practice": {
            "task": "A model outputs a probability of 0.38 for a positive class, using the standard 0.5 threshold. What class is predicted?",
            "hint": "Compare the probability to the threshold.",
            "solution": "0.38 is below 0.5, so the model predicts the negative class (0)."
          },
          "exercise": "Explain why Logistic Regression's output is more useful than a plain yes/no answer in situations like credit approval."
        },
        {
          "id": "m5-l3",
          "title": "K Nearest Neighbors",
          "concept": "K Nearest Neighbors (KNN) classifies a new point by finding the K closest points in the training data, typically using Euclidean distance, and taking a majority vote among them. It does not build a model during training; it stores the data and compares at prediction time.",
          "example": "To classify a new transaction as fraud or not, KNN finds the K most similar past transactions by feature distance and predicts the majority label among them.",
          "code": {
            "python": "# K Nearest Neighbors Implementation for Credit Card Fraud Detection\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.metrics import classification_report, confusion_matrix, accuracy_score\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Load the dataset (assuming you have a CSV file)\n# For this example, we'll create a sample dataset similar to the one in the lesson\nnp.random.seed(42)\n\n# Create sample data\nn_samples = 1000\nlegitimate_samples = int(n_samples * 0.98)  # 98% legitimate\nfraud_samples = n_samples - legitimate_samples  # 2% fraud\n\n# Generate legitimate transactions\nlegit_amount = np.random.uniform(10, 1000, legitimate_samples)\nlegit_v1 = np.random.normal(-1, 2, legitimate_samples)\nlegit_v2 = np.random.normal(2, 1.5, legitimate_samples)\nlegit_v3 = np.random.normal(0.5, 1, legitimate_samples)\nlegit_v4 = np.random.normal(-2, 1.8, legitimate_samples)\nlegit_fraud = np.zeros(legitimate_samples)\n\n# Generate fraudulent transactions\nfraud_amount = np.random.uniform(500, 5000, fraud_samples)\nfraud_v1 = np.random.normal(3, 1.5, fraud_samples)\nfraud_v2 = np.random.normal(-3.5, 2, fraud_samples)\nfraud_v3 = np.random.normal(2, 1.2, fraud_samples)\nfraud_v4 = np.random.normal(-2.5, 1.5, fraud_samples)\nfraud_fraud = np.ones(fraud_samples)\n\n# Combine datasets\namount = np.concatenate([legit_amount, fraud_amount])\nv1 = np.concatenate([legit_v1, fraud_v1])\nv2 = np.concatenate([legit_v2, fraud_v2])\nv3 = np.concatenate([legit_v3, fraud_v3])\nv4 = np.concatenate([legit_v4, fraud_v4])\nfraud = np.concatenate([legit_fraud, fraud_fraud])\n\n# Create DataFrame\ndf = pd.DataFrame({\n    'Amount': amount,\n    'V1': v1,\n    'V2': v2,\n    'V3': v3,\n    'V4': v4,\n    'Fraud': fraud\n})\n\nprint(\"Dataset shape:\", df.shape)\nprint(\"Fraud distribution:\")\nprint(df['Fraud'].value_counts())\n\n# Prepare features and target\nX = df[['Amount', 'V1', 'V2', 'V3', 'V4']]\ny = df['Fraud']\n\n# Split the dataset\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)\n\n# Feature scaling (important for KNN)\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\n# Find optimal K using cross-validation\nfrom sklearn.model_selection import cross_val_score\n\nk_values = range(1, 21)\ncv_scores = []\n\nfor k in k_values:\n    knn = KNeighborsClassifier(n_neighbors=k)\n    scores = cross_val_score(knn, X_train_scaled, y_train, cv=5, scoring='accuracy')\n    cv_scores.append(scores.mean())\n\n# Find best K\noptimal_k = k_values[np.argmax(cv_scores)]\nprint(f\"Optimal K: {optimal_k}\")\n\n# Train the model with optimal K\nknn_model = KNeighborsClassifier(n_neighbors=optimal_k)\nknn_model.fit(X_train_scaled, y_train)\n\n# Make predictions\ny_pred = knn_model.predict(X_test_scaled)\n\n# Evaluate the model\nprint(\"\\nModel Performance:\")\nprint(f\"Accuracy: {accuracy_score(y_test, y_pred):.4f}\")\nprint(\"\\nClassification Report:\")\nprint(classification_report(y_test, y_pred))\n\n# Confusion Matrix\nplt.figure(figsize=(8, 6))\ncm = confusion_matrix(y_test, y_pred)\nsns.heatmap(cm, annot=True, fmt='d', cmap='Blues')\nplt.title('Confusion Matrix - KNN Fraud Detection')\nplt.ylabel('Actual')\nplt.xlabel('Predicted')\nplt.show()\n\n# Function to predict new transactions\ndef predict_fraud(amount, v1, v2, v3, v4, model, scaler):\n    \"\"\"\n    Predict if a transaction is fraudulent\n    \"\"\"\n    # Create feature array\n    features = np.array([[amount, v1, v2, v3, v4]])\n    \n    # Scale features\n    features_scaled = scaler.transform(features)\n    \n    # Make prediction\n    prediction = model.predict(features_scaled)[0]\n    probability = model.predict_proba(features_scaled)[0]\n    \n    return prediction, probability\n\n# Example prediction\nexample_amount = 1500.0\nexample_v1 = 2.8\nexample_v2 = -3.2\nexample_v3 = 1.9\nexample_v4 = -2.1\n\npred, prob = predict_fraud(\n    example_amount, example_v1, example_v2, example_v3, example_v4,\n    knn_model, scaler\n)\n\nprint(f\"\\nExample Prediction:\")\nprint(f\"Transaction: Amount=${example_amount}, V1={example_v1}, V2={example_v2}, V3={example_v3}, V4={example_v4}\")\nprint(f\"Prediction: {'Fraudulent' if pred == 1 else 'Legitimate'}\")\nprint(f\"Probability: Legitimate={prob[0]:.3f}, Fraudulent={prob[1]:.3f}\")\n\n# Find nearest neighbors for a specific transaction\ndef find_nearest_neighbors(amount, v1, v2, v3, v4, model, scaler, k=5):\n    \"\"\"\n    Find the k nearest neighbors for a given transaction\n    \"\"\"\n    features = np.array([[amount, v1, v2, v3, v4]])\n    features_scaled = scaler.transform(features)\n    \n    # Get distances and indices of neighbors\n    distances, indices = model.kneighbors(features_scaled, n_neighbors=k)\n    \n    return distances[0], indices[0]\n\n# Example: Find nearest neighbors\ndistances, indices = find_nearest_neighbors(\n    example_amount, example_v1, example_v2, example_v3, example_v4,\n    knn_model, scaler, k=5\n)\n\nprint(f\"\\nNearest Neighbors (K=5):\")\nfor i, (dist, idx) in enumerate(zip(distances, indices)):\n    neighbor_fraud = y_train.iloc[idx]\n    print(f\"Neighbor {i+1}: Distance={dist:.4f}, Fraud={neighbor_fraud}\")"
          },
          "runNote": "Install with: pip install pandas numpy scikit-learn",
          "practice": {
            "task": "With K=5 and 4 of the 5 nearest neighbors labeled \"fraud\", what does KNN predict?",
            "hint": "KNN predicts the majority label among the K neighbors.",
            "solution": "It predicts \"fraud\", since 4 out of 5 neighbors (the majority) are labeled fraud."
          },
          "exercise": "Explain why choosing a very small K (like 1) makes a model more sensitive to noise in the data."
        },
        {
          "id": "m5-l4",
          "title": "Decision Trees",
          "concept": "A Decision Tree splits data repeatedly based on feature values, forming a tree of yes/no questions that ends in a prediction. Splits are chosen to create the most homogeneous subsets possible, measured with Gini impurity or entropy.",
          "example": "A tree predicting pass or fail might first split on attendance, then split each branch further on study hours, until each leaf node gives a final pass or fail prediction.",
          "code": {
            "python": "#decision_tree_classification.py\nimport pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier, export_text, plot_tree\nfrom sklearn.metrics import accuracy_score, classification_report, confusion_matrix\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport joblib\n\n# ===============================\n# 1. Create Sample Dataset\n# ===============================\ndata = {\n    \"Study Hours\": [2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 4, 5, 6, 2, 7, 8],\n    \"Previous Grade\": [40, 50, 55, 65, 70, 80, 85, 90, 95, 45, 60, 68, 72, 35, 78, 88],\n    \"Attendance\": [60, 65, 70, 75, 80, 85, 90, 92, 95, 62, 70, 78, 85, 55, 88, 93],\n    \"Result\": [0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1]  # 0 = Fail, 1 = Pass\n}\n\ndf = pd.DataFrame(data)\nprint(\"Sample Dataset:\\n\", df.head())\n\n# ===============================\n# 2. Split into Features & Labels\n# ===============================\nX = df[[\"Study Hours\", \"Previous Grade\", \"Attendance\"]]\ny = df[\"Result\"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.3, random_state=42\n)\n\n# ===============================\n# 3. Train Decision Tree Model\n# ===============================\nclf = DecisionTreeClassifier(\n    criterion=\"gini\",  # or \"entropy\"\n    max_depth=4,\n    min_samples_split=2,\n    random_state=42\n)\nclf.fit(X_train, y_train)\n\n# ===============================\n# 4. Evaluate Model\n# ===============================\ny_pred = clf.predict(X_test)\n\nprint(\"\\n Model Accuracy:\", accuracy_score(y_test, y_pred))\nprint(\"\\n Classification Report:\\n\", classification_report(y_test, y_pred))\nprint(\"\\n Confusion Matrix:\\n\", confusion_matrix(y_test, y_pred))\n\n# ===============================\n# 5. Visualize Decision Tree\n# ===============================\nprint(\"\\n Tree Rules:\\n\")\nprint(export_text(clf, feature_names=list(X.columns)))\n\nplt.figure(figsize=(12,8))\nplot_tree(clf, feature_names=X.columns, class_names=[\"Fail\",\"Pass\"], filled=True)\nplt.title(\"Decision Tree Visualization\")\nplt.show()\n\n# ===============================\n# 6. Confusion Matrix Heatmap\n# ===============================\nsns.heatmap(confusion_matrix(y_test, y_pred), annot=True, cmap=\"Blues\", fmt=\"d\",\n            xticklabels=[\"Fail\",\"Pass\"], yticklabels=[\"Fail\",\"Pass\"])\nplt.title(\"Confusion Matrix Heatmap\")\nplt.show()\n\n# ===============================\n# 7. Save & Load Model\n# ===============================\njoblib.dump(clf, \"decision_tree_model.pkl\")\nprint(\"\\n Model saved as decision_tree_model.pkl\")\n\nloaded_model = joblib.load(\"decision_tree_model.pkl\")\nsample = np.array([[6, 70, 85]])  # Study Hours=6, Prev Grade=70, Attendance=85\nprint(\"\\n Prediction for sample student:\", loaded_model.predict(sample))"
          },
          "runNote": "Install with: pip install pandas numpy scikit-learn matplotlib seaborn joblib",
          "practice": {
            "task": "Explain what it means for a split to produce a \"pure\" subset.",
            "hint": "Think about how many different classes are present in the resulting subset.",
            "solution": "A pure subset contains examples from only one class. A split that produces pure subsets perfectly separates the classes at that point in the tree."
          },
          "exercise": "Explain why an unlimited-depth Decision Tree is prone to overfitting."
        },
        {
          "id": "m5-l5",
          "title": "Random Forest",
          "concept": "Random Forest is an ensemble method that trains many Decision Trees, each on a random sample of the data and a random subset of features, then combines their predictions by majority vote or averaging. Combining many trees reduces the overfitting risk of any single tree.",
          "example": "Instead of one Decision Tree predicting wine quality, a Random Forest trains 100 trees on different random samples and averages their predictions for a more stable result.",
          "code": {
            "python": "# Import libraries\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score, classification_report\nimport pandas as pd\n\n# Load dataset\ndata = pd.read_csv('winequality-red.csv')\nX = data.drop('quality', axis=1)\ny = data['quality']\n\n# Convert to binary classification (low vs high quality)\ny = (y >= 6).astype(int)\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Create and train model\nrf = RandomForestClassifier(\n    n_estimators=100,      # Number of trees\n    max_features='sqrt',   # Features to consider at each split\n    random_state=42\n)\nrf.fit(X_train, y_train)\n\n# Make predictions\ny_pred = rf.predict(X_test)\n\n# Evaluate model\naccuracy = accuracy_score(y_test, y_pred)\nprint(f\"Accuracy: {accuracy:.2f}\")\nprint(classification_report(y_test, y_pred))\n\n# Feature importance\nfeature_importance = pd.Series(rf.feature_importances_, index=X.columns)\nfeature_importance.sort_values(ascending=False, inplace=True)\nprint(\"Top 5 important features:\")\nprint(feature_importance.head())"
          },
          "runNote": "Install with: pip install pandas numpy scikit-learn",
          "practice": {
            "task": "Explain why training each tree on a random subset of features, rather than all features, makes the forest stronger.",
            "hint": "Consider what would happen if every tree in the forest were identical.",
            "solution": "If every tree used all the same features, the trees would tend to make similar splits and similar errors. Random feature subsets make the trees less correlated with each other, so their combined vote corrects individual trees' mistakes."
          },
          "exercise": "Explain what out-of-bag (OOB) error estimates and why it does not require a separate validation set."
        },
        {
          "id": "m5-l6",
          "title": "Support Vector Machines",
          "concept": "A Support Vector Machine (SVM) finds the hyperplane that separates classes with the maximum margin, the largest possible distance to the nearest points of each class, called support vectors. Kernel functions let SVM create non-linear decision boundaries.",
          "example": "Separating two wine quality classes using a boundary that maximizes the gap between the closest wines of each class, rather than just any boundary that happens to separate them.",
          "code": {
            "python": "# Import libraries\nfrom sklearn.svm import SVC\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import accuracy_score, classification_report\nimport pandas as pd\n\n# Load dataset\ndata = pd.read_csv('winequality-red.csv')\nX = data.drop('quality', axis=1)\ny = data['quality']\n\n# Convert to binary classification (low vs high quality)\ny = (y >= 6).astype(int)\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Scale features (important for SVM!)\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\n# Create and train model\nsvm_model = SVC(\n    kernel='rbf',        # Kernel type\n    C=1.0,              # Regularization parameter\n    gamma='scale',      # Kernel coefficient\n    random_state=42\n)\nsvm_model.fit(X_train_scaled, y_train)\n\n# Make predictions\ny_pred = svm_model.predict(X_test_scaled)\n\n# Evaluate model\naccuracy = accuracy_score(y_test, y_pred)\nprint(f\"Accuracy: {accuracy:.2f}\")\nprint(classification_report(y_test, y_pred))\n\n# Feature importance is not directly available in SVM\n# But you can use permutation importance or SHAP values"
          },
          "runNote": "Install with: pip install pandas numpy scikit-learn",
          "practice": {
            "task": "Explain what the regularization parameter C controls in a Soft Margin SVM.",
            "hint": "C balances two competing goals: a wide margin and few misclassified points.",
            "solution": "C controls the trade-off between maximizing the margin and minimizing classification errors on the training data. A small C allows a wider margin with more tolerance for misclassified points; a large C prioritizes classifying every training point correctly, even with a narrower margin."
          },
          "exercise": "Name one situation where SVM would likely outperform a tree-based model, based on dataset size and complexity."
        }
      ]
    },
    {
      "id": "m6",
      "title": "Advanced Machine Learning Algorithms",
      "short": "Advanced Algorithms",
      "description": "XGBoost, LightGBM, and Neural Networks.",
      "lessons": [
        {
          "id": "m6-l1",
          "title": "XGBoost",
          "concept": "XGBoost (Extreme Gradient Boosting) builds Decision Trees sequentially, where each new tree corrects the errors made by the trees before it. This boosting approach often produces higher accuracy than the bagging approach used by Random Forest.",
          "example": "The first tree makes an initial prediction. The second tree is trained specifically on the errors (residuals) of the first. Each following tree keeps correcting the combined prediction from all previous trees.",
          "code": {
            "python": "# Import libraries\nimport xgboost as xgb\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score, classification_report\nimport pandas as pd\n\n# Load dataset\ndata = pd.read_csv('winequality-red.csv')\nX = data.drop('quality', axis=1)\ny = data['quality']\n\n# Convert to binary classification (low vs high quality)\ny = (y >= 6).astype(int)\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Create and train model\nxgb_model = xgb.XGBClassifier(\n    n_estimators=100,      # Number of trees\n    learning_rate=0.1,     # Learning rate (eta)\n    max_depth=6,           # Maximum depth of trees\n    subsample=0.8,         # Fraction of samples per tree\n    colsample_bytree=0.8,  # Fraction of features per tree\n    random_state=42\n)\nxgb_model.fit(X_train, y_train)\n\n# Make predictions\ny_pred = xgb_model.predict(X_test)\n\n# Evaluate model\naccuracy = accuracy_score(y_test, y_pred)\nprint(f\"Accuracy: {accuracy:.2f}\")\nprint(classification_report(y_test, y_pred))\n\n# Feature importance\nfeature_importance = pd.Series(xgb_model.feature_importances_, index=X.columns)\nfeature_importance.sort_values(ascending=False, inplace=True)\nprint(\"Top 5 important features:\")\nprint(feature_importance.head())"
          },
          "runNote": "Install with: pip install pandas numpy scikit-learn xgboost",
          "practice": {
            "task": "Explain the main structural difference between how Random Forest and XGBoost build their trees.",
            "hint": "One builds trees independently; the other builds trees in sequence, each correcting the last.",
            "solution": "Random Forest builds trees independently in parallel, each on a random sample, then averages them. XGBoost builds trees sequentially, where each new tree is trained to correct the errors of the combined trees built so far."
          },
          "exercise": "Explain what the learning rate controls when a new tree's predictions are added to the running total in XGBoost."
        },
        {
          "id": "m6-l2",
          "title": "LightGBM",
          "concept": "LightGBM is a gradient boosting framework built for speed on large datasets. It grows trees leaf-wise (expanding the leaf that reduces loss the most) rather than level-wise, and uses histogram-based binning to evaluate splits faster than checking every possible value.",
          "example": "On a dataset with millions of rows, LightGBM's histogram binning and leaf-wise growth can train substantially faster than a level-wise gradient boosting approach, while reaching comparable accuracy.",
          "code": {
            "python": "# Import libraries\nimport lightgbm as lgb\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score, classification_report\nimport pandas as pd\n\n# Load dataset\ndata = pd.read_csv('winequality-red.csv')\nX = data.drop('quality', axis=1)\ny = data['quality']\n\n# Convert to binary classification (low vs high quality)\ny = (y >= 6).astype(int)\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Create dataset for LightGBM\ntrain_data = lgb.Dataset(X_train, label=y_train)\ntest_data = lgb.Dataset(X_test, label=y_test, reference=train_data)\n\n# Set parameters\nparams = {\n    'objective': 'binary',\n    'metric': 'binary_logloss',\n    'boosting_type': 'gbdt',\n    'num_leaves': 31,\n    'learning_rate': 0.1,\n    'feature_fraction': 0.8,\n    'bagging_fraction': 0.8,\n    'bagging_freq': 5,\n    'verbose': -1\n}\n\n# Train model\nlgb_model = lgb.train(\n    params,\n    train_data,\n    valid_sets=[test_data],\n    num_boost_round=100,\n    callbacks=[lgb.early_stopping(stopping_rounds=10)]\n)\n\n# Make predictions\ny_pred_proba = lgb_model.predict(X_test)\ny_pred = (y_pred_proba > 0.5).astype(int)\n\n# Evaluate model\naccuracy = accuracy_score(y_test, y_pred)\nprint(f\"Accuracy: {accuracy:.2f}\")\nprint(classification_report(y_test, y_pred))\n\n# Feature importance\nlgb.plot_importance(lgb_model, max_num_features=10)"
          },
          "runNote": "Install with: pip install pandas scikit-learn lightgbm",
          "practice": {
            "task": "Explain the difference between leaf-wise and level-wise tree growth.",
            "hint": "One grows an entire layer of the tree at once; the other always expands whichever single leaf helps most.",
            "solution": "Level-wise growth expands every leaf at the current depth before moving deeper, keeping the tree balanced. Leaf-wise growth always splits the single leaf that reduces loss the most, which can reach lower loss faster but risks overfitting on small datasets."
          },
          "exercise": "Explain, in one sentence, why LightGBM is often preferred over XGBoost specifically for very large datasets."
        },
        {
          "id": "m6-l3",
          "title": "Neural Networks",
          "concept": "A Neural Network is made of layers of connected units (neurons). Data passes through an input layer, one or more hidden layers that apply weights and activation functions, and an output layer that produces the prediction. The network learns by backpropagation: comparing predictions to actual values and adjusting weights via gradient descent.",
          "example": "A network for fraud detection takes transaction features into its input layer, processes them through hidden layers that learn combinations of features, and outputs a probability of fraud.",
          "code": {
            "python": "# Import libraries\nimport tensorflow as tf\nfrom tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Dense, Dropout\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import classification_report, confusion_matrix\nimport pandas as pd\nimport numpy as np\n\n# Load dataset\ndata = pd.read_csv('creditcard.csv')\nX = data.drop('Class', axis=1)\ny = data['Class']\n\n# Handle imbalanced data with SMOTE or class weights\nfrom sklearn.utils.class_weight import compute_class_weight\nclass_weights = compute_class_weight('balanced', classes=np.unique(y), y=y)\nclass_weight_dict = dict(enumerate(class_weights))\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)\n\n# Scale features\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\n# Build neural network\nmodel = Sequential([\n    Dense(64, activation='relu', input_shape=(X_train_scaled.shape[1],)),\n    Dropout(0.3),\n    Dense(32, activation='relu'),\n    Dropout(0.3),\n    Dense(16, activation='relu'),\n    Dense(1, activation='sigmoid')  # Binary classification\n])\n\n# Compile model\nmodel.compile(\n    optimizer='adam',\n    loss='binary_crossentropy',\n    metrics=['accuracy', 'precision', 'recall']\n)\n\n# Train model\nhistory = model.fit(\n    X_train_scaled, y_train,\n    epochs=20,\n    batch_size=32,\n    validation_split=0.2,\n    class_weight=class_weight_dict,\n    verbose=1\n)\n\n# Make predictions\ny_pred_proba = model.predict(X_test_scaled)\ny_pred = (y_pred_proba > 0.5).astype(int)\n\n# Evaluate model\nprint(classification_report(y_test, y_pred))\nprint(\"Confusion Matrix:\")\nprint(confusion_matrix(y_test, y_pred))"
          },
          "runNote": "Install with: pip install pandas numpy scikit-learn",
          "practice": {
            "task": "Explain, in one sentence, what backpropagation adjusts and what signal it uses to decide how to adjust it.",
            "hint": "It adjusts the network's weights, using the size of the prediction error as the signal.",
            "solution": "Backpropagation adjusts the network's weights based on how much each weight contributed to the difference between the predicted output and the actual label, working backward from the output layer to the input layer."
          },
          "exercise": "Explain why traditional algorithms like Logistic Regression or Random Forest are often tried before a Neural Network on a small tabular dataset."
        }
      ]
    },
    {
      "id": "m7",
      "title": "Model Evaluation",
      "short": "Evaluation",
      "description": "Accuracy, precision, recall, F1 Score, confusion matrix, MSE, MAE, and model comparison.",
      "lessons": [
        {
          "id": "m7-l1",
          "title": "Accuracy, Precision, and Recall",
          "concept": "Accuracy is the proportion of all predictions that were correct. Precision is the proportion of positive predictions that were actually correct. Recall is the proportion of actual positives that the model correctly identified.",
          "example": "In fraud detection, precision measures how many flagged transactions were truly fraud; recall measures how many of the actual fraud cases were caught by the model.",
          "code": {
            "python": "from sklearn.metrics import accuracy_score, precision_score, recall_score\n\naccuracy = accuracy_score(y_test, y_pred)\nprecision = precision_score(y_test, y_pred)\nrecall = recall_score(y_test, y_pred)\n\nprint(\"Accuracy:\", accuracy)\nprint(\"Precision:\", precision)\nprint(\"Recall:\", recall)"
          },
          "runNote": "Assumes y_test and y_pred already exist from a trained classification model. Install with: pip install scikit-learn",
          "practice": {
            "task": "A fraud model has high precision but low recall. Explain what this means in practice.",
            "hint": "High precision means flagged cases are usually correct. Low recall means many real fraud cases are missed.",
            "solution": "The model rarely raises a false alarm when it flags a transaction as fraud (high precision), but it misses a large share of the actual fraud cases (low recall), letting them through undetected."
          },
          "exercise": "For a spam filter, explain whether you would prioritize precision or recall, and why."
        },
        {
          "id": "m7-l2",
          "title": "F1 Score and the Confusion Matrix",
          "concept": "The F1 Score is the harmonic mean of precision and recall, useful when both matter and the classes are imbalanced. A confusion matrix is a table showing counts of true positives, true negatives, false positives, and false negatives, giving a full picture beyond a single number.",
          "example": "Two models can have the same accuracy but very different confusion matrices; one may make more false positives, the other more false negatives.",
          "code": {
            "python": "from sklearn.metrics import f1_score, confusion_matrix\n\nf1 = f1_score(y_test, y_pred)\nmatrix = confusion_matrix(y_test, y_pred)\n\nprint(\"F1 Score:\", f1)\nprint(\"Confusion Matrix:\\n\", matrix)"
          },
          "runNote": "Assumes y_test and y_pred already exist from a trained classification model. Install with: pip install scikit-learn",
          "practice": {
            "task": "A confusion matrix shows 40 true positives, 5 false positives, 8 false negatives, and 47 true negatives. Calculate precision and recall.",
            "hint": "Precision = TP / (TP + FP). Recall = TP / (TP + FN).",
            "solution": "Precision = 40 / (40 + 5) = 0.89. Recall = 40 / (40 + 8) = 0.83."
          },
          "exercise": "Explain, using the confusion matrix's four values, what a false negative means in a medical diagnosis model."
        },
        {
          "id": "m7-l3",
          "title": "Mean Squared Error and Mean Absolute Error",
          "concept": "Mean Squared Error (MSE) averages the squared difference between predicted and actual values, penalizing large errors heavily. Mean Absolute Error (MAE) averages the absolute difference, treating all errors proportionally to their size.",
          "example": "A model with a few very large errors will show a much higher MSE than MAE, since squaring amplifies large mistakes more than small ones.",
          "code": {
            "python": "from sklearn.metrics import mean_squared_error, mean_absolute_error\n\nmse = mean_squared_error(y_test, y_pred)\nmae = mean_absolute_error(y_test, y_pred)\n\nprint(\"Mean Squared Error:\", mse)\nprint(\"Mean Absolute Error:\", mae)"
          },
          "runNote": "Assumes y_test and y_pred already exist from a trained regression model. Install with: pip install scikit-learn",
          "practice": {
            "task": "Explain why MSE is more sensitive to outliers than MAE.",
            "hint": "Consider what squaring a large error does compared to squaring a small one.",
            "solution": "Squaring an error grows much faster for large errors than small ones, so a single large mistake increases MSE disproportionately. MAE treats every unit of error the same regardless of size, making it less sensitive to a few large outliers."
          },
          "exercise": "Given actual value 100 and predicted value 90, calculate the absolute error and the squared error for this single point."
        },
        {
          "id": "m7-l4",
          "title": "Train/Test Evaluation and Model Comparison",
          "concept": "A model should always be evaluated on the test set, not the training set, to estimate how it performs on unseen data. When comparing multiple models, evaluate all of them on the same test set using the same metric.",
          "example": "Comparing a Logistic Regression model and a Random Forest model for the same classification task by computing accuracy and F1 Score for both on the identical test set.",
          "code": {
            "python": "from sklearn.metrics import accuracy_score, f1_score\n\nmodels = {\"logistic_regression\": model_a, \"random_forest\": model_b}\n\nfor name, m in models.items():\n    preds = m.predict(X_test)\n    print(name, \"accuracy:\", accuracy_score(y_test, preds), \"f1:\", f1_score(y_test, preds))"
          },
          "runNote": "Assumes model_a and model_b are already trained scikit-learn models, and X_test, y_test exist from a train/test split.",
          "practice": {
            "task": "Two models are compared, but Model A was evaluated on a different test set than Model B. Explain why this comparison is unreliable.",
            "hint": "Consider whether the two test sets could differ in difficulty.",
            "solution": "If the test sets differ, one model could appear better simply because its test set happened to be easier, not because the model is actually stronger. A fair comparison requires evaluating every model on the exact same test set."
          },
          "exercise": "Write out the steps you would take to fairly compare three different algorithms on the same classification problem."
        }
      ]
    },
    {
      "id": "m8",
      "title": "Practical Machine Learning Projects",
      "short": "Projects",
      "description": "Five progressively harder projects combining regression, classification, ensembles, and clustering.",
      "isProjectModule": true,
      "projects": [
        {
          "id": "m8-p1",
          "title": "House Price Prediction",
          "objective": "Train a regression model that predicts a house's sale price from its features.",
          "problem": "A real estate platform wants to estimate a fair listing price for a house based on its characteristics.",
          "dataset": "A table of past house sales with columns such as size in square feet, number of bedrooms, number of bathrooms, age of the house, and the actual sale price.",
          "concepts": [
            "Regression",
            "Train/test split",
            "Linear Regression",
            "Mean Squared Error",
            "R2 score"
          ],
          "tasks": [
            "Load the dataset with pandas and inspect it with .head() and .describe()",
            "Select size, bedrooms, bathrooms, and age as features; select price as the label",
            "Split the data into training and testing sets",
            "Train a Linear Regression model on the training set",
            "Evaluate the model on the test set using MSE and R2",
            "Print the model's predicted price for one example house"
          ],
          "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error, r2_score\n\ndf = pd.read_csv(\"house_prices.csv\")\n\nX = df[[\"size_sqft\", \"bedrooms\", \"bathrooms\", \"age_years\"]]\ny = df[\"price\"]\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\ny_pred = model.predict(X_test)\nprint(\"MSE:\", mean_squared_error(y_test, y_pred))\nprint(\"R2:\", r2_score(y_test, y_pred))",
          "expectedResult": "An R2 score closer to 1.0 indicates the model explains most of the variation in house prices. An MSE value gives the average squared prediction error in price units squared.",
          "challenge": "Add a fifth feature, such as distance to the city center, and check whether the R2 score improves."
        },
        {
          "id": "m8-p2",
          "title": "Customer Churn Prediction",
          "objective": "Train a classification model that predicts whether a customer will cancel a subscription.",
          "problem": "A subscription business wants to identify customers likely to cancel so it can act before they leave.",
          "dataset": "A table of customer records with columns such as monthly charges, account age in months, number of support tickets filed, and a churn label (1 for cancelled, 0 for stayed).",
          "concepts": [
            "Classification",
            "Logistic Regression",
            "Accuracy",
            "Precision",
            "Recall",
            "Confusion Matrix"
          ],
          "tasks": [
            "Load the dataset and check the balance of the churn label with .value_counts()",
            "Select features and the churn label",
            "Split the data into training and testing sets",
            "Train a Logistic Regression model",
            "Evaluate with accuracy, precision, recall, and a confusion matrix",
            "Identify which customers in the test set were incorrectly predicted"
          ],
          "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, confusion_matrix\n\ndf = pd.read_csv(\"customer_churn.csv\")\nprint(df[\"churn\"].value_counts())\n\nX = df[[\"monthly_charges\", \"account_age_months\", \"support_tickets\"]]\ny = df[\"churn\"]\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\ny_pred = model.predict(X_test)\nprint(\"Accuracy:\", accuracy_score(y_test, y_pred))\nprint(\"Precision:\", precision_score(y_test, y_pred))\nprint(\"Recall:\", recall_score(y_test, y_pred))\nprint(\"Confusion Matrix:\\n\", confusion_matrix(y_test, y_pred))",
          "expectedResult": "A working classifier with accuracy, precision, and recall values, plus a confusion matrix showing how many churn cases were correctly and incorrectly identified.",
          "challenge": "Retrain the model using only two of the three features and compare recall before and after."
        },
        {
          "id": "m8-p3",
          "title": "Wine Quality Classification",
          "objective": "Compare two classification algorithms, KNN and SVM, on the same dataset.",
          "problem": "A quality control team wants to classify wine samples as high or low quality based on chemical measurements, and wants to know which algorithm performs better on this data.",
          "dataset": "A table of wine samples with chemical properties such as acidity, sugar, and alcohol content, plus a quality score converted into a binary high/low label.",
          "concepts": [
            "KNN",
            "SVM",
            "Feature scaling",
            "Model comparison",
            "F1 Score"
          ],
          "tasks": [
            "Load the dataset and convert the quality column into a binary label",
            "Scale the features with StandardScaler, since both KNN and SVM are distance-sensitive",
            "Split the data into training and testing sets",
            "Train a KNN model and an SVM model on the same training data",
            "Evaluate both with F1 Score on the same test set",
            "Report which model performed better"
          ],
          "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.svm import SVC\nfrom sklearn.metrics import f1_score\n\ndf = pd.read_csv(\"winequality-red.csv\")\ndf[\"quality_label\"] = (df[\"quality\"] >= 6).astype(int)\n\nX = df.drop([\"quality\", \"quality_label\"], axis=1)\ny = df[\"quality_label\"]\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\nknn = KNeighborsClassifier(n_neighbors=5)\nknn.fit(X_train_scaled, y_train)\nprint(\"KNN F1:\", f1_score(y_test, knn.predict(X_test_scaled)))\n\nsvm = SVC(kernel=\"rbf\")\nsvm.fit(X_train_scaled, y_train)\nprint(\"SVM F1:\", f1_score(y_test, svm.predict(X_test_scaled)))",
          "expectedResult": "Two F1 Scores, one per model, allowing a direct comparison on identical training and test data.",
          "challenge": "Try three different values of K for KNN and report which gives the highest F1 Score."
        },
        {
          "id": "m8-p4",
          "title": "Loan Default Prediction",
          "objective": "Train and compare an ensemble model against a single Decision Tree for predicting loan default.",
          "problem": "A lender wants to flag loan applications at higher risk of default, and wants to know whether an ensemble model is worth the added complexity over a single Decision Tree.",
          "dataset": "A table of past loan applications with features such as credit score, income, loan amount, and existing debt, plus a default label (1 for defaulted, 0 for repaid).",
          "concepts": [
            "Decision Trees",
            "Random Forest",
            "XGBoost",
            "Model comparison",
            "Feature importance"
          ],
          "tasks": [
            "Load the dataset and split into features and label",
            "Split into training and testing sets",
            "Train a single Decision Tree, a Random Forest, and an XGBoost model on the same training data",
            "Evaluate all three with accuracy and F1 Score on the same test set",
            "Print feature importance from the Random Forest model",
            "Report which model performed best and which features mattered most"
          ],
          "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\nfrom xgboost import XGBClassifier\nfrom sklearn.metrics import accuracy_score, f1_score\n\ndf = pd.read_csv(\"loan_applications.csv\")\n\nX = df[[\"credit_score\", \"income\", \"loan_amount\", \"existing_debt\"]]\ny = df[\"default\"]\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\nmodels = {\n    \"decision_tree\": DecisionTreeClassifier(max_depth=5, random_state=42),\n    \"random_forest\": RandomForestClassifier(n_estimators=100, random_state=42),\n    \"xgboost\": XGBClassifier(n_estimators=100, random_state=42, eval_metric=\"logloss\")\n}\n\nfor name, model in models.items():\n    model.fit(X_train, y_train)\n    preds = model.predict(X_test)\n    print(name, \"accuracy:\", accuracy_score(y_test, preds), \"f1:\", f1_score(y_test, preds))\n\nrf = models[\"random_forest\"]\nfor feature, importance in zip(X.columns, rf.feature_importances_):\n    print(feature, importance)",
          "expectedResult": "Accuracy and F1 Score for each of the three models, allowing comparison, plus a ranked list of which features the Random Forest relied on most.",
          "challenge": "Add LightGBM as a fourth model in the comparison and report its results alongside the other three."
        },
        {
          "id": "m8-p5",
          "title": "Customer Segmentation",
          "objective": "Use clustering to group customers into segments with no predefined labels.",
          "problem": "A marketing team wants to group customers by behavior so each group can be targeted differently, without deciding the groups in advance.",
          "dataset": "A table of customer records with columns such as annual spending, purchase frequency, and average order value, with no label column since this is unsupervised.",
          "concepts": [
            "Clustering",
            "KMeans",
            "Feature scaling",
            "Unsupervised learning"
          ],
          "tasks": [
            "Load the dataset and select the numeric features to cluster on",
            "Scale the features, since KMeans is distance-based",
            "Train a KMeans model with a chosen number of clusters",
            "Assign each customer a cluster label and add it as a new column",
            "Print the average feature values per cluster to interpret each segment"
          ],
          "code": "import pandas as pd\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\n\ndf = pd.read_csv(\"customers.csv\")\n\nX = df[[\"annual_spending\", \"purchase_frequency\", \"avg_order_value\"]]\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nkmeans = KMeans(n_clusters=4, random_state=42, n_init=10)\ndf[\"segment\"] = kmeans.fit_predict(X_scaled)\n\nprint(df.groupby(\"segment\")[[\"annual_spending\", \"purchase_frequency\", \"avg_order_value\"]].mean())",
          "expectedResult": "Each customer assigned to one of four segments, with a per-segment average showing how the segments differ, for example one high-spending, high-frequency group and one low-activity group.",
          "challenge": "Try n_clusters values of 3, 4, and 5, and compare how the segment averages change."
        }
      ]
    },
    {
      "id": "m9",
      "title": "Final Project",
      "short": "Capstone",
      "description": "Machine Learning Capstone Project.",
      "isCapstone": true,
      "capstone": {
        "id": "m9-capstone",
        "title": "Machine Learning Capstone Project",
        "objective": "Select a dataset, prepare it, choose an algorithm, train a model, evaluate it, and explain the result in your own words.",
        "requirements": [
          "A dataset of your choice with at least one clear feature set and a target (label or clustering goal)",
          "A written statement of the problem type: regression, classification, or clustering",
          "Data cleaning: handling of missing values and any needed encoding or scaling",
          "A train/test split for supervised problems",
          "A trained model using an algorithm covered in Module 5 or Module 6",
          "An evaluation using the metrics appropriate to the problem type from Module 7",
          "A short written explanation of what the result means and what the model's limitations are"
        ],
        "checklist": [
          "The dataset and problem type are clearly stated",
          "Features and label (or clustering features) are clearly identified",
          "Missing values are handled before training",
          "Categorical features are encoded if present",
          "Data is split into training and testing sets (for supervised problems)",
          "A model is trained without errors",
          "The model is evaluated with at least two relevant metrics",
          "Results are interpreted in writing, not just printed",
          "At least one limitation of the model or data is identified",
          "Code runs from top to bottom without leftover unused variables or dead code"
        ]
      }
    }
  ]
};
