import { IdeaType } from '../enums/idea-type.enum';
import { BoardTemplate } from '../interfaces/board-template.interface';

export const BOARD_TEMPLATES: BoardTemplate[] = [
  {
    id: 'counter-endometriosis',
    name: 'Counter Endometriosis',
    icon: 'healing',
    category: 'health',
    description:
      'A structured board to help track and manage endometriosis — covering symptoms, preventive measures, diet & exercise, and personal notes.',
    tasks: [
      // Symptoms of Endometriosis
      {
        name: 'Chronic pelvic pain (especially during menstruation)',
        description:
          'One of the most common symptoms. Record intensity (1–10), duration, and when it occurs in your cycle.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Heavy or irregular menstrual bleeding',
        description:
          'Note flow volume, duration, and any changes compared to previous cycles.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Pain during or after sexual intercourse (dyspareunia)',
        description:
          'Track frequency and severity. Discuss with your gynaecologist if persistent.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Pain with bowel movements or urination',
        description:
          'Particularly common during menstruation. Log occurrence dates and severity.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Abdominal bloating and nausea',
        description:
          'Note relation to menstrual cycle, foods eaten, and any triggers identified.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Persistent fatigue and low energy',
        description:
          'Rate energy levels daily and track correlation with cycle phases.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Lower back and leg pain',
        description:
          'Document location, intensity, and timing. Note any relief measures that help.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Infertility or difficulty conceiving',
        description:
          'Endometriosis affects up to 50% of women with infertility. Seek specialist advice early.',
        type: IdeaType.symptoms,
      },

      // Preventive Measures
      {
        name: 'Track menstrual cycle and symptoms daily',
        description:
          'Use a diary or app to log pain levels, flow, mood, and other symptoms each day.',
        type: IdeaType.goals,
      },
      {
        name: 'Schedule regular gynaecological check-ups',
        description:
          'Aim for at least one appointment every 6–12 months, or as advised by your doctor.',
        type: IdeaType.goals,
      },
      {
        name: 'Discuss hormonal management with your doctor',
        description:
          'Hormonal therapies (e.g., combined oral contraceptives, progestins, GnRH analogues) can reduce lesion activity and pain.',
        type: IdeaType.goals,
      },
      {
        name: 'Practice stress-reduction techniques',
        description:
          'Mindfulness, meditation, and deep breathing exercises can help lower cortisol and reduce inflammation.',
        type: IdeaType.goals,
      },
      {
        name: 'Maintain a healthy body weight',
        description:
          'Excess body fat can increase oestrogen levels, potentially worsening endometriosis.',
        type: IdeaType.goals,
      },
      {
        name: 'Avoid inflammatory foods',
        description:
          'Minimise trans fats, processed foods, and red meat which can promote inflammation.',
        type: IdeaType.goals,
      },
      {
        name: 'Seek early medical attention for unusual symptoms',
        description:
          'Early diagnosis and treatment can help slow disease progression and preserve fertility.',
        type: IdeaType.goals,
      },
      {
        name: 'Connect with a support group',
        description:
          'Peer support can improve emotional wellbeing. Look for local or online endometriosis communities.',
        type: IdeaType.goals,
      },

      // Diet and Exercise Plan
      {
        name: 'Eat anti-inflammatory foods daily',
        description:
          'Include fatty fish (salmon, mackerel), berries, leafy greens, turmeric, and ginger in your meals.',
        type: IdeaType.objectives,
      },
      {
        name: 'Increase fibre intake',
        description:
          'Aim for 25–35 g/day from vegetables, legumes, and whole grains to support gut health and oestrogen clearance.',
        type: IdeaType.objectives,
      },
      {
        name: 'Reduce red meat and processed foods',
        description:
          'Studies link high red meat consumption to increased endometriosis risk. Substitute with plant proteins and fish.',
        type: IdeaType.objectives,
      },
      {
        name: 'Limit caffeine and alcohol',
        description:
          'Both can increase oestrogen levels and worsen inflammation. Aim for fewer than 1 caffeinated drink per day.',
        type: IdeaType.objectives,
      },
      {
        name: 'Stay hydrated (8–10 glasses of water daily)',
        description:
          'Adequate hydration supports detoxification and reduces bloating.',
        type: IdeaType.objectives,
      },
      {
        name: 'Practise gentle yoga and stretching',
        description:
          'Yoga poses targeting the hips and pelvis can relieve pain and improve flexibility. Aim for 3× per week.',
        type: IdeaType.objectives,
      },
      {
        name: 'Low-impact cardio exercise',
        description:
          'Walking, swimming, or cycling for 30 minutes/day helps reduce oestrogen, ease pain, and improve mood.',
        type: IdeaType.objectives,
      },
      {
        name: 'Supplement with omega-3 fatty acids',
        description:
          'Omega-3s (fish oil) have anti-inflammatory effects that may reduce endometriosis-related pain. Consult your doctor before starting.',
        type: IdeaType.objectives,
      },

      // Other Notes
      {
        name: 'Daily pain level log',
        description:
          'Rate pain on a scale of 1–10 each day. Note location, duration, and any relief measures used.',
        type: IdeaType.achievements,
      },
      {
        name: 'Medication and supplement tracker',
        description:
          'Record all medications, supplements, dosages, and any side effects experienced.',
        type: IdeaType.achievements,
      },
      {
        name: 'Medical appointments diary',
        description:
          'Log appointment dates, doctors seen, diagnoses, and recommended next steps.',
        type: IdeaType.achievements,
      },
      {
        name: 'Healthcare provider contact list',
        description:
          'Keep a list of your gynaecologist, GP, specialist, and emergency contacts with phone numbers.',
        type: IdeaType.achievements,
      },
      {
        name: 'Symptom trigger journal',
        description:
          'Identify and record foods, activities, stress events, or environmental factors that worsen symptoms.',
        type: IdeaType.achievements,
      },
      {
        name: 'Mental health and emotional wellbeing notes',
        description:
          'Track mood, anxiety, and emotional state daily. Note any correlation with physical symptoms or cycle phases.',
        type: IdeaType.achievements,
      },
      {
        name: 'Emergency contacts and care plan',
        description:
          'Document who to call in a pain crisis, your preferred hospital, and your current treatment plan summary.',
        type: IdeaType.achievements,
      },
    ],
  },

  {
    id: 'mental-health-wellness',
    name: 'Mental Health & Wellness',
    icon: 'self_improvement',
    category: 'health',
    description:
      'A holistic board for tracking mental health, managing anxiety and depression, building healthy habits, and celebrating emotional growth.',
    tasks: [
      {
        name: 'Track daily mood and energy levels',
        description:
          'Rate your mood (1–10) and energy each morning and evening. Look for patterns over time.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Note anxiety or panic attack episodes',
        description:
          'Log when anxiety occurs, the trigger, duration, and intensity. Share with your therapist.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Monitor sleep quality',
        description:
          'Record bedtime, wake time, and quality (1–10). Poor sleep often correlates with low mood.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Identify negative thought patterns',
        description:
          'Note recurring negative thoughts (catastrophising, black-and-white thinking). Bring to therapy sessions.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Book a therapy or counselling session',
        description:
          'Regular sessions with a therapist can be life-changing. Aim for weekly or fortnightly appointments.',
        type: IdeaType.goals,
      },
      {
        name: 'Build a daily mindfulness practice',
        description:
          'Start with 5 minutes of guided meditation each morning. Apps like Headspace or Calm can help.',
        type: IdeaType.goals,
      },
      {
        name: 'Reach out to one supportive person this week',
        description:
          'Social connection is vital. Text, call, or meet a trusted friend or family member.',
        type: IdeaType.goals,
      },
      {
        name: 'Set healthy boundaries at work and home',
        description:
          'Practice saying no, setting screen time limits, and protecting your personal time.',
        type: IdeaType.goals,
      },
      {
        name: 'Complete a 7-day gratitude journal',
        description:
          'Write three things you are grateful for each day. This rewires the brain for positivity.',
        type: IdeaType.objectives,
      },
      {
        name: 'Exercise 3× per week for mood support',
        description:
          'Even a 20-minute walk releases endorphins. Choose activities you enjoy.',
        type: IdeaType.objectives,
      },
      {
        name: 'Reduce social media use to under 1 hour/day',
        description:
          'Set app limits. Use reclaimed time for reading, hobbies, or rest.',
        type: IdeaType.objectives,
      },
      {
        name: 'Practise a grounding technique daily',
        description:
          'Try the 5-4-3-2-1 technique (5 things you see, 4 you hear, 3 you touch, etc.) when feeling overwhelmed.',
        type: IdeaType.objectives,
      },
      {
        name: 'Create a personal crisis plan',
        description:
          'List coping strategies, emergency contacts, and steps to take if you feel overwhelmed or unsafe.',
        type: IdeaType.ideas,
      },
      {
        name: 'Track a mental health win this week',
        description:
          'Acknowledge small victories: getting out of bed, completing a task, or simply asking for help.',
        type: IdeaType.achievements,
      },
      {
        name: 'Build a self-care toolkit',
        description:
          'List activities that genuinely recharge you: bath, reading, cooking, nature walks, music.',
        type: IdeaType.achievements,
      },
    ],
  },

  {
    id: 'fitness-weight-loss',
    name: 'Fitness & Weight Loss',
    icon: 'fitness_center',
    category: 'health',
    description:
      'A results-driven board to plan workouts, track nutrition, set fitness milestones, and stay motivated on your health journey.',
    tasks: [
      {
        name: 'Log weekly weight and measurements',
        description:
          'Weigh yourself at the same time each week. Track waist, hips, and chest measurements monthly.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Track daily calorie and macronutrient intake',
        description:
          'Use an app (e.g., MyFitnessPal) to log meals. Aim for a 300–500 kcal daily deficit for sustainable loss.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Note energy levels and recovery quality',
        description:
          'Rate how you feel after each workout and each morning on waking. Adjust intensity if consistently fatigued.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Define a SMART fitness goal',
        description:
          'Example: "Lose 5 kg in 10 weeks by exercising 4× per week and eating at a calorie deficit."',
        type: IdeaType.goals,
      },
      {
        name: 'Complete 150 minutes of cardio per week',
        description:
          'Follow WHO guidelines. Spread across at least 3 days — brisk walking, cycling, or swimming all count.',
        type: IdeaType.goals,
      },
      {
        name: 'Strength train 2–3 times per week',
        description:
          'Focus on compound movements (squats, deadlifts, push-ups). Muscle mass boosts resting metabolism.',
        type: IdeaType.goals,
      },
      {
        name: 'Cook at least 5 home meals per week',
        description:
          'Home-cooked meals are typically lower in calories and higher in nutrients than takeaways.',
        type: IdeaType.goals,
      },
      {
        name: 'Prep healthy snacks every Sunday',
        description:
          'Portion nuts, cut vegetables, or prepare overnight oats for the week ahead.',
        type: IdeaType.objectives,
      },
      {
        name: 'Drink 2–3 litres of water daily',
        description:
          'Staying hydrated reduces appetite, improves performance, and supports fat metabolism.',
        type: IdeaType.objectives,
      },
      {
        name: 'Get 7–9 hours of sleep per night',
        description:
          'Sleep deprivation raises cortisol and increases cravings for high-calorie foods.',
        type: IdeaType.objectives,
      },
      {
        name: 'Walk 8,000–10,000 steps daily',
        description:
          'Use a fitness tracker or phone app. Extra steps add up to significant calorie burn over time.',
        type: IdeaType.objectives,
      },
      {
        name: 'Try a new workout class or sport',
        description:
          'Variety prevents boredom. Explore yoga, kickboxing, CrossFit, dance, or rock climbing.',
        type: IdeaType.ideas,
      },
      {
        name: 'Create a workout playlist',
        description:
          'Music with 120–140 BPM can boost workout performance and make exercise more enjoyable.',
        type: IdeaType.ideas,
      },
      {
        name: 'Celebrate your first 5 workouts completed',
        description:
          'Log this milestone. Building a consistent exercise habit is harder than any single workout.',
        type: IdeaType.achievements,
      },
      {
        name: 'Take monthly progress photos',
        description:
          'Visual changes are motivating and often not reflected on the scale. Take front, side, and back shots.',
        type: IdeaType.achievements,
      },
    ],
  },

  {
    id: 'personal-finance',
    name: 'Personal Finance Planner',
    icon: 'account_balance_wallet',
    category: 'finance',
    description:
      'Take control of your money — track spending, set savings goals, reduce debt, and build long-term financial wellbeing.',
    tasks: [
      {
        name: 'Record all monthly income sources',
        description:
          'List salary, freelance income, rental income, benefits, and any other regular payments.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Categorise all monthly expenses',
        description:
          'Group spending into: housing, food, transport, utilities, entertainment, subscriptions, and personal.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Track net worth monthly',
        description:
          'Assets (savings, investments, property) minus liabilities (debts, loans) = net worth. Monitor the trend.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Build a 3-month emergency fund',
        description:
          'Aim to save 3–6 months of living expenses in an easily accessible savings account.',
        type: IdeaType.goals,
      },
      {
        name: 'Pay off high-interest debt first',
        description:
          'Use the avalanche method: pay minimums on all debts, throw extra cash at the highest-interest one.',
        type: IdeaType.goals,
      },
      {
        name: 'Set up automatic savings transfers',
        description:
          'Automate 10–20% of each paycheck to savings before you have a chance to spend it.',
        type: IdeaType.goals,
      },
      {
        name: 'Review and cancel unused subscriptions',
        description:
          'Audit all recurring payments. Cancel anything unused. Streaming, gym, apps — these add up.',
        type: IdeaType.goals,
      },
      {
        name: 'Create a zero-based monthly budget',
        description:
          'Assign every pound/dollar of income a job. Income minus all allocated spending = 0.',
        type: IdeaType.objectives,
      },
      {
        name: 'Meal plan to reduce food waste and costs',
        description:
          'Plan weekly meals and shop with a list. The average household wastes 30% of food purchased.',
        type: IdeaType.objectives,
      },
      {
        name: 'Compare and switch utility providers annually',
        description:
          'Spending 1 hour per year comparing energy, broadband, and insurance can save hundreds.',
        type: IdeaType.objectives,
      },
      {
        name: 'Start a side income stream',
        description:
          'Explore freelancing, selling crafts, tutoring, or renting assets. Even £100/month extra changes the maths.',
        type: IdeaType.ideas,
      },
      {
        name: 'Open a stocks & shares ISA or investment account',
        description:
          'Investing regularly, even small amounts, builds wealth over time through compound growth.',
        type: IdeaType.ideas,
      },
      {
        name: 'First month under budget — celebrate!',
        description:
          'Acknowledge every win. A small reward (that fits the budget!) reinforces good habits.',
        type: IdeaType.achievements,
      },
      {
        name: 'Debt fully paid off — log it here',
        description:
          'Record each debt you eliminate. Seeing the list shrink is powerfully motivating.',
        type: IdeaType.achievements,
      },
    ],
  },

  {
    id: 'career-development',
    name: 'Career Development',
    icon: 'work',
    category: 'productivity',
    description:
      'Advance your career with clarity — identify opportunities, develop skills, build your network, and land your next role.',
    tasks: [
      {
        name: 'Map your current skills and competency gaps',
        description:
          'List technical skills, soft skills, and leadership abilities. Rate each 1–5 and identify gaps vs your target role.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Track job applications and interview stages',
        description:
          'Log each application: company, role, date applied, status, and next action.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Define your 12-month career goal',
        description:
          'Be specific: "Secure a senior product manager role in a tech scaleup by December."',
        type: IdeaType.goals,
      },
      {
        name: 'Update LinkedIn profile to 100% completion',
        description:
          'Add a professional photo, compelling headline, detailed experience, skills, and recommendations.',
        type: IdeaType.goals,
      },
      {
        name: 'Connect with 5 professionals in your target field',
        description:
          'Send personalised connection requests. Follow up with a genuine message or question.',
        type: IdeaType.goals,
      },
      {
        name: 'Complete one relevant online course or certification',
        description:
          'Platforms like Coursera, LinkedIn Learning, or Udemy offer professional development at low cost.',
        type: IdeaType.goals,
      },
      {
        name: 'Tailor CV for each application',
        description:
          'Mirror job description keywords. Quantify achievements (e.g., "Increased sales by 30% in Q3").',
        type: IdeaType.objectives,
      },
      {
        name: 'Prepare answers to the top 20 interview questions',
        description:
          'Use the STAR method (Situation, Task, Action, Result) for behavioural questions.',
        type: IdeaType.objectives,
      },
      {
        name: 'Attend one industry event or webinar per month',
        description:
          'Events build network and knowledge. Many are free online — check Eventbrite and Meetup.',
        type: IdeaType.objectives,
      },
      {
        name: 'Start a professional portfolio or personal website',
        description:
          'Showcase projects, case studies, and work samples. A portfolio differentiates you from other candidates.',
        type: IdeaType.ideas,
      },
      {
        name: 'Request a mentor in your field',
        description:
          'A good mentor accelerates growth. Reach out to a senior professional you admire with a specific ask.',
        type: IdeaType.ideas,
      },
      {
        name: 'First interview secured — log details',
        description:
          'Record the company, role, interviewer names, and what preparation helped you land the interview.',
        type: IdeaType.achievements,
      },
      {
        name: 'Offer received — document the milestone',
        description:
          'Celebrate this! Note salary, benefits, and any negotiation tips for future reference.',
        type: IdeaType.achievements,
      },
    ],
  },

  {
    id: 'study-learning',
    name: 'Study & Learning Plan',
    icon: 'school',
    category: 'productivity',
    description:
      'Ace your exams, master new subjects, and build deep knowledge — with structured study sessions, goals, and revision strategies.',
    tasks: [
      {
        name: 'Log study hours per subject each week',
        description:
          'Track time spent on each topic. Aim for spaced repetition rather than cramming.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Note difficult topics and recurring mistakes',
        description:
          'Keep an "error log" — understanding where you go wrong is the fastest route to improvement.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Define exam dates and create a revision timetable',
        description:
          'Work backwards from your exam dates. Assign topics to each study session and build in review days.',
        type: IdeaType.goals,
      },
      {
        name: 'Complete all required reading by end of term',
        description:
          "List all textbooks, papers, and resources. Track which you've read and annotated.",
        type: IdeaType.goals,
      },
      {
        name: 'Achieve target grade in next assignment',
        description:
          'Set a specific target (e.g., 75%). Review marking criteria and plan your approach before writing.',
        type: IdeaType.goals,
      },
      {
        name: 'Use the Pomodoro technique for study sessions',
        description:
          '25 minutes focused work, 5-minute break, repeat 4 times, then take a 20-minute break.',
        type: IdeaType.objectives,
      },
      {
        name: 'Review notes within 24 hours of each lecture',
        description:
          'The Ebbinghaus forgetting curve shows we forget 70% of new information within 24 hours without review.',
        type: IdeaType.objectives,
      },
      {
        name: 'Complete one set of past papers per week',
        description:
          'Past paper practice is the single most effective exam preparation technique available.',
        type: IdeaType.objectives,
      },
      {
        name: 'Join or form a study group',
        description:
          'Teaching others is one of the most effective ways to solidify your own understanding.',
        type: IdeaType.objectives,
      },
      {
        name: 'Create summary flashcards for key concepts',
        description:
          'Use Anki or physical cards for spaced repetition of formulas, definitions, and key facts.',
        type: IdeaType.ideas,
      },
      {
        name: 'Build a mind map for each module',
        description:
          'Visual mind maps help connect concepts and identify gaps in understanding.',
        type: IdeaType.ideas,
      },
      {
        name: 'Completed first full revision of all topics',
        description:
          'This is a major milestone. Now focus on weak areas and practice under timed conditions.',
        type: IdeaType.achievements,
      },
      {
        name: 'Passed a key exam or assessment — record your score',
        description:
          'Document your result and reflect on what worked well for next time.',
        type: IdeaType.achievements,
      },
    ],
  },

  {
    id: 'chronic-pain-management',
    name: 'Chronic Pain Management',
    icon: 'medical_services',
    category: 'health',
    description:
      'A compassionate board for tracking chronic pain conditions, managing flares, monitoring treatments, and improving quality of life.',
    tasks: [
      {
        name: 'Daily pain intensity log',
        description:
          'Rate pain 0–10 each morning and evening. Note location, character (sharp, aching, burning), and duration.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Identify and log pain triggers',
        description:
          'Record activities, foods, weather, stress events, or sleep patterns that precede pain flares.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Track medication effectiveness',
        description:
          'Note each medication taken, dosage, time, and pain rating before and after. Share with your doctor.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Log sleep quality and fatigue levels',
        description:
          'Poor sleep worsens pain perception. Track hours slept and rate how rested you feel each morning.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Book a pain management specialist appointment',
        description:
          'A specialist can offer a multimodal approach including physiotherapy, psychology, and medication review.',
        type: IdeaType.goals,
      },
      {
        name: 'Attend a pain education programme',
        description:
          'Understanding pain neuroscience can reduce fear-avoidance behaviours and improve daily functioning.',
        type: IdeaType.goals,
      },
      {
        name: 'Create a flare management plan',
        description:
          'List strategies: heat, rest, medication, breathing exercises, and who to contact. Have it ready before a flare.',
        type: IdeaType.goals,
      },
      {
        name: 'Communicate pain impact to your healthcare team',
        description:
          'Bring your pain diary to appointments. Concrete data leads to better treatment decisions.',
        type: IdeaType.goals,
      },
      {
        name: 'Practise gentle pacing every day',
        description:
          'Break tasks into smaller chunks with rest periods. Avoid boom-and-bust cycles of overdoing then crashing.',
        type: IdeaType.objectives,
      },
      {
        name: 'Try a relaxation or pain-relief technique',
        description:
          'Options: progressive muscle relaxation, guided imagery, heat therapy, TENS machine, or gentle stretching.',
        type: IdeaType.objectives,
      },
      {
        name: 'Set one meaningful daily activity goal',
        description:
          'Even on difficult days, one small achievable goal (a short walk, a cup of tea with a friend) maintains quality of life.',
        type: IdeaType.objectives,
      },
      {
        name: 'Explore complementary therapies',
        description:
          'Acupuncture, massage, hydrotherapy, and mindfulness-based stress reduction may help as adjuncts to medical care.',
        type: IdeaType.ideas,
      },
      {
        name: 'Connect with a chronic pain peer support group',
        description:
          'Sharing experiences reduces isolation. Search online communities or ask your GP for local groups.',
        type: IdeaType.ideas,
      },
      {
        name: 'A day with lower pain than usual — celebrate it',
        description:
          'Note what was different. Replicate conditions where possible. Small wins matter enormously.',
        type: IdeaType.achievements,
      },
      {
        name: 'Completed a new activity despite pain',
        description:
          'Doing something that matters to you despite pain is a genuine victory. Record it here.',
        type: IdeaType.achievements,
      },
    ],
  },

  {
    id: 'life-organisation',
    name: 'Life Organisation',
    icon: 'checklist',
    category: 'productivity',
    description:
      'Bring clarity and calm to everyday life — organise tasks, build routines, reduce mental load, and create space for what matters most.',
    tasks: [
      {
        name: 'Conduct a weekly brain dump',
        description:
          'Every Sunday, write down everything on your mind: tasks, worries, ideas, and appointments. Then sort and prioritise.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Track recurring tasks and their frequency',
        description:
          'Identify everything that needs doing and how often — cleaning, admin, car maintenance, subscriptions.',
        type: IdeaType.symptoms,
      },
      {
        name: 'Create a morning routine and stick to it for 21 days',
        description:
          'A consistent morning routine sets the tone for the day. Start small: 3 habits maximum.',
        type: IdeaType.goals,
      },
      {
        name: 'Declutter one area of your home',
        description:
          'Start with a single drawer, shelf, or room. Physical clarity supports mental clarity.',
        type: IdeaType.goals,
      },
      {
        name: 'Establish a digital filing and inbox-zero system',
        description:
          'Create folder structures for email and documents. Dedicate 15 minutes daily to maintaining inbox zero.',
        type: IdeaType.goals,
      },
      {
        name: 'Plan the week every Sunday',
        description:
          'Spend 20 minutes each Sunday reviewing commitments, scheduling key tasks, and setting 3 weekly priorities.',
        type: IdeaType.goals,
      },
      {
        name: 'Use a prioritisation method (Eisenhower matrix)',
        description:
          'Sort tasks into: Urgent + Important, Important not Urgent, Urgent not Important, Neither. Focus on quadrant 2.',
        type: IdeaType.objectives,
      },
      {
        name: 'Batch similar tasks together',
        description:
          'Group emails, calls, errands, and admin tasks. Context-switching costs 20+ minutes of focus each time.',
        type: IdeaType.objectives,
      },
      {
        name: 'Set a hard stop time for work each day',
        description:
          'Define when your workday ends and honour it. Recovery time is essential for sustainable productivity.',
        type: IdeaType.objectives,
      },
      {
        name: 'Create a household chores rota',
        description:
          'If living with others, share responsibilities fairly. A shared rota removes the mental load of who does what.',
        type: IdeaType.ideas,
      },
      {
        name: 'Automate recurring admin tasks',
        description:
          'Set up automatic bill payments, recurring calendar reminders, and shopping lists to reduce decision fatigue.',
        type: IdeaType.ideas,
      },
      {
        name: 'First week with all planned tasks completed',
        description:
          'An organised week is its own reward. Notice how it feels and reinforce the system.',
        type: IdeaType.achievements,
      },
      {
        name: 'Maintained a new routine for 30 days',
        description:
          'Habits take 21–66 days to form. Thirty days is a meaningful milestone worth marking.',
        type: IdeaType.achievements,
      },
    ],
  },
];
