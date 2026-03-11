import { IdeaType } from '../enums/idea-type.enum';
import { BoardTemplate } from '../interfaces/board-template.interface';

export const BOARD_TEMPLATES: BoardTemplate[] = [
  {
    id: 'counter-endometriosis',
    name: 'Counter Endometriosis',
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
];
