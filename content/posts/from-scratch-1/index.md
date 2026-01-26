---
title: "COVID-19: A Retrospective"
description: A Visualization of the Pandemic’s Rise and Fall
slug: from-scratch-1
date: 2025-01-25
image: cover.jpg
categories:
    - analysis
    - visualization
tags: 
    - Excel
    - Tableau
    - PowerBI
    - Tableau
    - Python
    - MySQL 
links:
  - title: "Data Analysis: From scratch"
    description: this is an END TO END PROJECT using python, a little excel, sql/mysql, tabluea, powerbi
    website: https://github.com/vlzjc/covid-report
---


# COVID-19: A Retrospective (Portfolio Project)


## Tableau version

[***Tableau Dashboard LINK***](https://public.tableau.com/views/covid19_17377686885900/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)

<div class='tableauPlaceholder' id='viz1737768939573' style='position: relative'>
  <noscript>
    <a href='#'>
      <img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;co&#47;covid19_17377686885900&#47;Dashboard1&#47;1_rss.png' style='border: none' />
    </a></noscript>
    <object class='tableauViz'  style='display:none;'>
      <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
      <param name='embed_code_version' value='3' />
      <param name='path' value='views&#47;covid19_17377686885900&#47;Dashboard1?:language=en-US&amp;:embed=true&amp;:sid=&amp;:redirect=auth' />
      <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;co&#47;covid19_17377686885900&#47;Dashboard1&#47;1.png' />
      <param name='animate_transition' value='yes' />
      <param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />
      <param name='display_overlay' value='yes' /><param name='display_count' value='yes' />
      <param name='language' value='en-US' />
    </object>
</div>
<script type='text/javascript'>
  var divElement = document.getElementById('viz1737768939573');
  var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width= '100vh';
    vizElement.style.height='835px';
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>


## Power BI



![](22.jpg)

## Project Purpose

The COVID-19 pandemic presented a unique challenge: how to effectively communicate vast amounts of complex data to a broad audience. This project aimed to address this challenge by creating an interactive dashboard that provides stakeholders with a clear and insightful retrospective of the pandemic's progression.  The dashboard visualizes key pandemic metrics, including recorded cases (acknowledging the data's modeled nature, which highlighted the importance of understanding data limitations), vaccinations, mortality, and testing data, broken down by continent. A time slider enables users to explore trends over time.

## **Key Features & Insights:**

*   **Interactive Exploration:** Explore pandemic trends over time with an intuitive time slider.
*   **Global Perspective:** Visualize global case distribution on a central map.
*   **Continental Analysis:** Analyze vaccinations, deaths, and testing data by continent.
*   **Data Transparency:** Clear acknowledgment of the data's modeled nature promotes responsible interpretation.

## Process

1.  **Data Acquisition:**
    *   COVID-19 data retrieved from the Our World in Data API.
    *   Countries data sourced from Google and Wikipedia.
    *   [Acquisition Code](https://github.com/vlzjc/covid-report/blob/main/getData.ipynb)

2.  **Data Exploration (SQL):**
    *   Data loaded into a MySQL database.
    *   Performed exploratory data analysis (EDA) using SQL queries to identify trends, patterns, and potential data quality issues.  This included aggregations, joins, and filtering to understand the data's structure and identify key insights.

3.  **Initial Data Preparation (Python):**
    *   Data cleaning and preprocessing performed using Python based on insights gained from the SQL exploration.
    *   Processed data saved as Excel files for easier integration with Power BI.

4.  **Data Loading (Power BI):**
    *   Excel files loaded into Power BI.

5.  **Data Cleaning and Transformation (Power BI):**
    *   Further data cleaning and transformation within Power BI using its data modeling capabilities. This included handling missing values, data type conversions, and creating calculated columns.

6.  **Dashboard Development (Power BI & Tableau):**
    *   Visualizations created and designed within the Power BI dashboard, leveraging the insights discovered during the SQL exploration phase.  This included charts, graphs, maps, and other interactive elements.


## **My Role & Contributions:**

I played a key role in this project, including:

*   Data cleaning and preprocessing using Python, addressing inconsistencies and missing values to ensure data quality.
*   Developing the data model in Power BI, optimizing it for performance and interactive exploration.
*   Designing and implementing the interactive visualizations, including the global case distribution map and continental trend charts.
*   Deploying the final dashboard for stakeholder access.

## **Tools Used:** Python, Excel, MySQL, Power BI

## **Key Learnings:**

This project reinforced the importance of data transparency, especially when dealing with modeled or estimated data.  I also gained valuable experience in optimizing Power BI dashboards for interactive exploration and performance.

