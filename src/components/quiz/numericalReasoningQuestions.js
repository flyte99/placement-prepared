export default [
  {
    questionText: 'Which share had the largest difference between highest and lowest price over the last 12 months?',
    questionImage: '/static/images/material/reasoningTests/share-price-index.png',
    width: 350,
    answerOptions: [
      { answerText: 'Huver Co', isCorrect: false },
      { answerText: 'Drebs Ltd', isCorrect: false },
      { answerText: 'Fevs Plc', isCorrect: true },
      { answerText: 'Fauvers', isCorrect: false },
      { answerText: 'Steapars', isCorrect: false },
    ],
    solution: [
      'Calculate the difference between the maximum and the minimum prices:',
      'Huver Co. = 1,360 –860 = 500',
      'Drebs Ltd = 22 –11 = 11',
      'FevsPlc = 1,955 –1,242 = 713',
      'Fauvers = 724 –464 = 260',
      'Steapars = 2,630 –2,216 = 414',
      '',
      'Tip: Notice the wording of the question is asking for the share with the largest absolute change in price, NOT the largest percentage change, which would have been Drebs Ltd. If the question had wanted the percentage change it would have used the word percentage'
    ]
  },
  {
    questionText: 'What was yesterday’s cost difference between 50 shares in Fevs plc and 100 shares in Steapars?',
    questionImage: '/static/images/material/reasoningTests/share-price-index.png',
    width: 350,
    answerOptions: [
      { answerText: '€164,726', isCorrect: false },
      { answerText: '€251,163 ', isCorrect: false },
      { answerText: '€172,577', isCorrect: false },
      { answerText: '€164,045 ', isCorrect: true },
      { answerText: 'None of these', isCorrect: false },
    ],
    solution: [
      'Calculate yesterday’s share price for each share:',
      'Fevs plc = 1,586 ÷ 0.91 = 1,742.86',
      'Steapars = 2,537 ÷ 1.01 = 2,511.88',
      '',
      'Step 2 - Calculate the cost difference between 50 Fevs and 100 Steapars shares yesterday:',
      '50 x 1,742.86 = 87,143',
      '100 x 2,511.88 = 251,188',
      'Difference = 251,188 -87,143 = 164,045',
      '',
      'Tip: Percentage increases and decreases catch out a lot of people. For this question, think about what’s happening. The percentage change from yesterday to today in the case of Fevs is a 9% decrease. So that means (today’s price) ÷ (yesterday’s price) = 0.91 (a 9% decrease). Using algebra we can recast this as yesterday’s price = today’s price ÷ 0.91.',

    ]
  },
  {
    questionText: 'Today’s DrebsLtd share price represents a 40% increase on the price one month ago. What was the Drebs Ltd share price a month ago?',
    questionImage: '/static/images/material/reasoningTests/share-price-index.png',
    width: 350,
    answerOptions: [
      { answerText: '€22 ', isCorrect: false },
      { answerText: '€25.20', isCorrect: false },
      { answerText: '€12.68', isCorrect: false },
      { answerText: '€12.90', isCorrect: false },
      { answerText: '€12.86', isCorrect: true },
    ],
    solution: [
      'Step 1 - Drebs Ltd’s share price is shown as 18 Euros at today’s prices. This is a 40% increase and so represents 1.40 (140%) of the price one month ago',
      '',
      'Step 2 - The price one month ago is calculated as follows: 18 ÷ 1.40 = 12.86.'
    ]
  },
  {
    questionText: 'If a driver travels an average of 4,250 miles per month driving only along motorways in an Xtam car, what is the predicted annual consumption of fuel (in gallons)?',
    questionImage: '/static/images/material/reasoningTests/fuel-comsumption.png',
    width: 353,
    answerOptions: [
      { answerText: 'Cannot say', isCorrect: false },
      { answerText: '1,500', isCorrect: true },
      { answerText: '125', isCorrect: false },
      { answerText: '150', isCorrect: false },
      { answerText: '1,250', isCorrect: false },
    ],
    solution: [
      'Step 1-The Xtam’s fuel consumption is shown as 34 miles to the gallon for motorway driving so 4,250 miles ÷ 34 = 125 gallons per month',
      '',
      'Step 2 - Annual petrol consumption = 125 x 12 = 1,500 gallons'
    ]
  },
  {
    questionText: 'A car dealership has £600,000 to spend and wants to buy equal numbers of the Taber and Ursa cars. What is the largest number of each type of car that can be ordered?',
    questionImage: '/static/images/material/reasoningTests/fuel-comsumption.png',
    width: 353,
    answerOptions: [
      { answerText: '27', isCorrect: false },
      { answerText: '48', isCorrect: false },
      { answerText: '19', isCorrect: false },
      { answerText: '21', isCorrect: true },
      { answerText: '22', isCorrect: false },
    ],
    solution: [
      'Step 1 - The cost of the Taber and Ursa cars are £12,500 and £15,250 respectively.',
      '',
      'Step 2 - Since the numbers of each car purchased must be equal, calculate the combined cost as follows: £12,500 + £15,250 = £27,750.',
      '',
      'Step 3 - £600,000 ÷ £27,750 = 21.6'
    ]
  },
  {
    questionText: 'What is the ratio of the cost of a Taber: Velvo: Xtam?',
    questionImage: '/static/images/material/reasoningTests/fuel-comsumption.png',
    width: 353,
    answerOptions: [
      { answerText: '2:4:5', isCorrect: false },
      { answerText: '1:4:6', isCorrect: false },
      { answerText: '1:3:5', isCorrect: true },
      { answerText: '2:3:5', isCorrect: false },
      { answerText: '1:2:3', isCorrect: false },
    ],
    solution: [
      'Taber: Velvo: Xtamcosts = 12,500 : 37,500 : 62,500',
      'Notice the common denominator here is 12,500. So the ratio can be simplified to the following.  12,500/12,500 : 37,500/12,500: 62,500/12,500 = 1:3:5.'
    ]
  },
  {
    questionText: 'Legal sector spending on IT hardware, IT software and IT consulting are all set to increase by the same amounts in Year 6 as they did from Year 4 to Year 5. Assuming this is the case, what is the total legal sector spend in Year 6 on these three IT areas combined?',
    questionImage: '/static/images/material/reasoningTests/it-spending.png',
    width: 340,
    answerOptions: [
      { answerText: '£75 million', isCorrect: false },
      { answerText: '£85 million', isCorrect: false },
      { answerText: '£95 million', isCorrect: false },
      { answerText: '£105 million', isCorrect: false },
      { answerText: '£110 million', isCorrect: true },
    ],
    solution: [
      'Step 1 - Calculate the increases in each IT spending category',
      'IT hardware =45 (increase of £5 million from Year 4)',
      'IT software = 30 (increase of £5 million from Year 4)',
      'IT consulting = 20 (increase of £5 million from Year 4)',
      '',
      'Step 2-Calculate the total for the year after the projected year 5. Since there is an even increase the same increase of £5 million will occur in IT hardware, software and consulting.',
      'Total = 45 + 30 + 20 + (3 x 5) = £110 million'
    ]
  },
  {
    questionText: 'For years 1 to 3 inclusive, by how much did Make Fit Ltd’s income from consultancy services differ from those of Pure Gap plc?',
    questionImage: '/static/images/material/reasoningTests/it-spending.png',
    width: 340,
    answerOptions: [
      { answerText: '£110 more', isCorrect: false },
      { answerText: '£110,000 less', isCorrect: false },
      { answerText: '£1,100,000 more', isCorrect: false },
      { answerText: '£110 less', isCorrect: false },
      { answerText: '£1,100,000 less', isCorrect: true },
    ],
    solution: [
      'Total the income for each company across the three years 1, 2 and 3.',
      'Make Fit Ltd = 290 + 180 + 260 = 730',
      'Pure Gap plc = 230 + 310 + 300 = 840',
      '730 –840 = -110 (£10,000’s)'
    ]
  },
  {
    questionText: 'Which of the following statements is false regarding legal sector spending between Year 4 and projected Year 5?',
    questionImage: '/static/images/material/reasoningTests/it-spending.png',
    width: 340,
    answerOptions: [
      { answerText: 'IT consulting will increase by £5 million', isCorrect: false },
      { answerText: 'IT consulting will match that of year 2', isCorrect: false },
      { answerText: 'IT software will exceed IT consulting', isCorrect: false },
      { answerText: 'Spending on IT hardware will decline', isCorrect: true },
      { answerText: 'None of these', isCorrect: false },
    ],
    solution: [
      'Check in turn whether each statement is true or false:',
      'a) The projected spend on IT consulting is projected to increase by £5million. Option A is true.',
      'b) The projected spend on IT consulting is £5million, which matches year 2. Option B is true.',
      'c) The projected spend on IT software is £30million and for IT consulting it’s £20million. Option C is true.',
      'd) There are increases projected for IT hardware, for IT software and for consulting. The option for D is false.',
      'e) We see that option D is false, so E cannot be the correct answer.'
    ]
  },
  {
    questionText: 'In which year(s) did Make Fit Ltd and Pure Gap plc’s combined IT consultancy income exceed £6million?',
    questionImage: '/static/images/material/reasoningTests/it-spending.png',
    width: 340,
    answerOptions: [
      { answerText: 'Year 1 and Year 4', isCorrect: false },
      { answerText: 'Only Year 4', isCorrect: true },
      { answerText: 'Year 1 and Year 3', isCorrect: false },
      { answerText: 'Only Year 3', isCorrect: false },
      { answerText: 'Year 3 and Year 4', isCorrect: false },
    ],
    solution: [
      'Find the total for each of the years shown and see which years exceed £6 million',
      'Year 1290 + 230 (£10,000s) = £5.2 million',
      'Year 2180 + 310 (£10,000s) = £4.9 million',
      'Year 3260 + 300 (£10,000s) = £5.6 million',
      'Year 4320 + 290 (£10,000s) = £6.1 million'
    ]
  },
  {
    questionText: 'If actual labour costs rise so as to halve their difference from the target, what will be the change in actual Gross Profit?',
    questionImage: '/static/images/material/reasoningTests/turnover-and-profit.png',
    width: 540,
    answerOptions: [
      { answerText: 'Falls by £4,500', isCorrect: true },
      { answerText: 'Rises by £4,500', isCorrect: false },
      { answerText: 'No overall effect', isCorrect: false },
      { answerText: 'Rises by £9,000', isCorrect: false },
      { answerText: 'Falls by £9,000', isCorrect: false },
    ],
    solution: [
      'Step 1 - Halve the labour costs discrepancy against target',
      '(target labour costs -actual labour costs)/2 = (175,000 –166,000)/2 = £4,500.',
      '',
      'Step 2 - Calculate effect on Gross Profit',
      'If labour costs rise by £4,500, then profit falls by £4,500.'
    ]
  },
  {
    questionText: 'IKE Computers aim to grow monthly gross profit by 1.5%. If all costs remain constant, what will the sales turnover need to be in February to hit the target?',
    questionImage: '/static/images/material/reasoningTests/turnover-and-profit.png',
    width: 540,
    answerOptions: [
      { answerText: '£242,099', isCorrect: false },
      { answerText: '£277,987', isCorrect: true },
      { answerText: '£38,555', isCorrect: false },
      { answerText: '£274,299', isCorrect: false },
      { answerText: '£288,000', isCorrect: false },
    ],
    solution: [
      'Step 1 - Calculate the required gross profit increase. 36,521 x 1.5% = £547.82. Given that costs are constant, this means the Net Turnover needs to increase By £547.8 too. So the Net Turnover needs to be £547.8 + £238,521 = £239,068.8.',
      '',
      'Step 2 - We have worked out the Net Turnover, but the question asks for Sales Turnover (i.e. before the sales tax of 14.0% is deducted). So Sales Turnover = 239,068.8 ÷ 86.0% = £277,986.98.'
    ]
  },
  {
    questionText: 'If IKE Computers employed eighty permanent employees in January who were on the same salary, what would have been the effect on labour costs if they had replaced twenty permanent employees with interim staff each on monthly salaries of £3,000?',
    questionImage: '/static/images/material/reasoningTests/turnover-and-profit.png',
    width: 540,
    answerOptions: [
      { answerText: 'Cannot tell', isCorrect: false },
      { answerText: 'Decrease of £130,000', isCorrect: false },
      { answerText: 'Decrease of £20,750', isCorrect: false },
      { answerText: 'Increase of £2,075', isCorrect: false },
      { answerText: 'Increase of £18,500', isCorrect: true },
    ],
    solution: [
      'Step 1 – Calculate the monthly cost of each full-time employee in January: 166,000 / 80 = 2,075.',
      '',
      'Step 2–Calculate the difference in monthly labour costs: 3,000 –2,075 = 925.',
      '',
      'Step 3–Calculate the difference of replacing 20 full time employees with interims: 925 x 20 = £18,500.'
    ]
  },
  {
    questionText: 'Which sector represents approximately 19% of the profits from the five sectors shown?',
    questionImage: '/static/images/material/reasoningTests/consulting-profits.png',
    width: 380,
    answerOptions: [
      { answerText: 'Leisure', isCorrect: false },
      { answerText: 'Manufacturing', isCorrect: false },
      { answerText: 'Retail', isCorrect: false },
      { answerText: 'Government', isCorrect: false },
      { answerText: 'Utilities', isCorrect: true },
    ],
    solution: [
      'Step 1 – Calculate sum',
      'Leisure: 5.2 + 7.4 + 4.6 = 17.2',
      'Manufacturing: 5 + 7.2 + 6.3 = 18.5',
      'Retail: 4.4 + 5.8 + 3.8 = 14',
      'Government: 4.5 + 5.9 + 3.6 + 14',
      'Utilities: 3.5 + 5.1 + 6.2 = 14.8',
      '',
      'Step 2 – Calculate total of sums',
      '17.2 + 18.5 + 14 + 14 + 14.8 = 78.5',
      '',
      'Step 3 – Calculate percentage of total',
      'Leisure: 22%',
      'Manufacturing: 24%',
      'Retail: 18%',
      'Government: 18%',
      'Utilities: 19%',
    ]
  },
  {
    questionText: 'If the ratio of profit to turnover for Pacific Rim contracts was 2:15, what was the Government turnover in the Pacific Rim (in £100,000s)?',
    questionImage: '/static/images/material/reasoningTests/consulting-profits.png',
    width: 380,
    answerOptions: [
      { answerText: '36', isCorrect: false },
      { answerText: '27', isCorrect: false },
      { answerText: '270', isCorrect: true },
      { answerText: '360', isCorrect: false },
      { answerText: '540', isCorrect: false },
    ],
    solution: [
      'Contracts ratio of profit (£3.6million) to turnover = 2:15',
      'Turnover = £3.6 million x 15/2 = £27 million = 270 (in £100,000s)'
    ]
  },
  {
    questionText: 'Reyes Heslop had a target for Leisure profits to be a quarter of their total profits. Assuming profits in other areas remain the same, by how much did the Leisure profits miss this target?',
    questionImage: '/static/images/material/reasoningTests/consulting-profits.png',
    width: 380,
    answerOptions: [
      { answerText: '£1.8 million', isCorrect: false },
      { answerText: '£2.4 million', isCorrect: false },
      { answerText: '£2.7 million', isCorrect: false },
      { answerText: '£3.2 million', isCorrect: true },
      { answerText: '£3.4 million', isCorrect: false },
    ],
    solution: [
      'Step 1 - Calculate the total Reyes Heslop profits across all areas other than Leisure.',
      '(6.3 + 7.2 +5.0) + (3.8 + 5.8 + 4.4) + (3.6 + 5.9 + 4.5) + (6.2 +5.1 + 3.5) = 61.3 million.',
      '',
      'Step 2 - This needs to be ¾ of all profits for the condition to be met. Therefore all profits, across all sectors, would be 61.3 ÷ 75% = 81.7333 million.',
      '',
      'Step 3 - Now we look at the difference between actual and target Leisure profits.',
      'Actual = (4.6 + 7.4  + 5.2) = 17.2',
      'Target = (81.7333 –61.3) = 20.4333',
      'Shortfall = 3.2333 (millions)'
    ]
  },
  {
    questionText: 'A competitor wants to takeover Reyes Heslop and offers a price of 8 times current profits. Reyes Heslop shareholders reject this offer and suggest a price that is 20% higher, what is this suggested price?',
    questionImage: '/static/images/material/reasoningTests/consulting-profits.png',
    width: 380,
    answerOptions: [
      { answerText: '£79 million', isCorrect: false },
      { answerText: '£63 million', isCorrect: false },
      { answerText: '£628 million', isCorrect: false },
      { answerText: '£754 million', isCorrect: true },
      { answerText: '£502 million', isCorrect: false },
    ],
    solution: [
      'Step 1 - Calculate the current profits total across all sectors.',
      '4.6 + 7.4 + 5.2 + 6.3 + 7.2 + 5.0 + 3.8 + 5.8 + 4.4 + 3.6 + 5.9 + 4.5 + 6.2 + 5.1 +3.5 = £78.5 million.',
      '',
      'Step 2-Takeover offer price = (£78.5 million x 8) = £628 million.',
      'Suggested offer price = £628 x 120% = £753.6 million'
    ]
  },
  {
    questionText: 'What is the difference between direct sales and telesales across the five teams combined?',
    questionImage: '/static/images/material/reasoningTests/eastern-regional-sales.png',
    width: 380,
    answerOptions: [
      { answerText: '£10 million', isCorrect: false },
      { answerText: '£11 million', isCorrect: true },
      { answerText: '£12 million', isCorrect: false },
      { answerText: '£13 million', isCorrect: false },
      { answerText: '£14 million', isCorrect: false },
    ],
    solution: [
      'Step 1 - Calculate the total direct sales and telesales across the five teams',
      'Direct Sales: 17 + 13 + 16 + 15 + 14 = 75',
      'Telesales: 16 + 17 + 18 + 17 + 18 = 86',
      '',
      'Step 2 - Calculate the difference',
      '86 –75 = £11 million'
    ]
  },
  {
    questionText: 'If there are 50 direct sales and 65 telesales employees assigned to each of the Eastern region’s teams A-E, what are the average sales per sales employee for the lowest performing team in terms of overall sales (to the nearest £10,000)?',
    questionImage: '/static/images/material/reasoningTests/eastern-regional-sales.png',
    width: 380,
    answerOptions: [
      { answerText: 'Cannot tell from the data', isCorrect: false },
      { answerText: '£200,000 (direct); £340,000 (telesales)', isCorrect: false },
      { answerText: '£260,000 (direct); £260,000 (telesales)', isCorrect: true },
      { answerText: '£340,000 (telesales); £200,000 (direct)', isCorrect: false },
      { answerText: '£20,000 (direct sales); £30,000 (telesales)', isCorrect: false },
    ],
    solution: [
      'Step 1 - Obtain the lowest performing team from calculating the overall sales (direct sales and telesales combined)',
      'Team A total = 33',
      'Team B total = 30: lowest performing team overall',
      'Team C total = 34',
      'Team D total = 32',
      'Team E total = 32',
      '',
      'Step 2 - Calculate the average sales per direct sales employee',
      '13/50 = 0.26 million',
      '',
      'Step 3 – Calculate the average sales per telesales sales employee',
      '17/65 = 0.26 million'
    ]
  },
  {
    questionText: 'If the Eastern Region’s total sales represent 26% of the total for all regions, what are the total sales across all regions (to the nearest £million)?',
    questionImage: '/static/images/material/reasoningTests/eastern-regional-sales.png',
    width: 380,
    answerOptions: [
      { answerText: '£124 million', isCorrect: false },
      { answerText: '£142 million', isCorrect: false },
      { answerText: '£161 million', isCorrect: false },
      { answerText: '£619 million', isCorrect: true },
      { answerText: '£620 million', isCorrect: false },
    ],
    solution: [
      'Step 1 - Calculate the total sales: 86 (for telesales) + 75 (for direct sales) = £161 million',
      '',
      'Step 2 - Calculate the total sales across all regions:',
      '£161 million = 26%',
      '100% = 161 x 100/26 = £619.23 million'
    ]
  },
  {
    questionText: 'What are the total sales targets for next year across all five teams if the target is set as a 20% and 10% increase in this year’s Direct Sales and Telesales respectively?',
    questionImage: '/static/images/material/reasoningTests/eastern-regional-sales.png',
    width: 380,
    answerOptions: [
      { answerText: 'Direct (£75 million); Telesales (£86 million)', isCorrect: false },
      { answerText: 'Direct Sales (£104 million); Telesales (£82 million)', isCorrect: false },
      { answerText: 'Direct (£82 million); Telesales (£104 million)', isCorrect: false },
      { answerText: 'Direct (£95 million); Telesales (£90 million)', isCorrect: false },
      { answerText: 'Direct (£90 million); Telesales (£94.6 million)', isCorrect: true },
    ],
    solution: [
      'Calculate the increase in the direct sales and telesales totals:',
      'Total Direct Sales: 17 + 13 + 16 + 15 + 14 = 75',
      'Total Telesales: 16 + 17 + 18 + 17 + 18 = 86',
      'Direct Sales: 75 * 120% = 90',
      'Telesales: 86 * 110% = 94.6'
    ]
  },
];
