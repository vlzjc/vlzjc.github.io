---
title: lotto analysis
description: analysis of the winning number frequency 
slug: lotto-analysis
date: 2025-01-12
image: cover.jpg
categories:
    - analysis
    - visualization
tags: 
    - Excel
    - python

links:
  - title: lotto analysis
    description:
    website: https://github.com/vlzjc/PowerBI/tree/main/Lotto%20Analysis
---

#Lotto Analysis

```python
import pandas as pd
import numpy as np
import itertools as it
from itertools import combinations
import matplotlib.pyplot as plt
import seaborn as sns
%matplotlib inline 
```
importing libraries
```python
lotto = pd.read_csv('lotto2024.csv', index_col = False)
lotto.head()
```
reads the csv Excel file and then prints the first five rows of the file
![Image 1](1.jpg)

```python
winNum = pd.DataFrame(lotto["Winning Numbers"].str.split('-').tolist())
winNum=winNum.apply(pd.to_numeric, errors='coerce')
```
these two lines are used to split the Winning numbers column and make then into intergers

```python
wsorted_winNum = winNum.apply(lambda x: x.sort_values().reset_index(drop = True)).transpose()
counts  = pd.Series(winNum.values.tolist()).value_counts()
display(counts)
```
wanted to know if there were an instance where a winning number showed up twice and as expected the there no 6 number combination that shown twice
```python
wsorted_winNum = winNum.apply(lambda x: x.sort_values().reset_index(drop = True)).transpose()
counts  = pd.Series(winNum.values.tolist()).value_counts()
display(counts)
```
the first line makes the dataframe into a list
and the second line prints the top number
```python
import statistics
mode = statistics.mode(merged_winNum)
print(mode) #gets the top number
```
and so does this but with the Statistics library
```python
from collections import Counter
print(Counter(merged_winNum).most_common(11))
```
[(56.0, 26), (5.0, 25), (40.0, 24), (58.0, 22), (10.0, 21), (1.0, 20), (37.0, 20), (30.0, 20), (17.0, 20), (51.0, 20), (44.0, 20)]

this gets the top 11 numbers but I only did because I noticed the top 5 in tied between 6 numbers
```python
chart = Counter(merged_winNum).most_common(11)
display(chart)
```
chart = Counter(merged_winNum).most_common(11)
display(chart)
[(56.0, 26),
 (5.0, 25),
 (40.0, 24),
 (58.0, 22),
 (10.0, 21),
 (1.0, 20),
 (37.0, 20),
 (30.0, 20),
 (17.0, 20),
 (51.0, 20),
 (44.0, 20)]

assigned it to a variable

```python
# Separate data into x and y values
x_values = [item[0] for item in chart]
y_values = [item[1] for item in chart]

# Create a bar chart
plt.figure(figsize=(10, 6))
plt.bar(x_values, y_values, color='skyblue')

# Add labels and title
plt.xlabel('Numbers')
plt.ylabel('frequecy')
plt.title('chart')

# Display the plot
plt.show()
```
![chart](barchart.jpg)
```python
# Create a scatter plot
plt.figure(figsize=(10, 6))
plt.scatter(x_values, y_values, color='red', edgecolor='black', s=100)

# Add labels and title
plt.xlabel('X Values')
plt.ylabel('Frequencies')
plt.title('Scatter')

# Display the plot
plt.show()
```
![scatter](scatter.jpg)