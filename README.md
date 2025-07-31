# ResuMate – Your AI-Powered Resume Optimizer & Job Match Assistant
“Bridging the gap between your resume and your dream job.”

## 📘 Project Description
ResuMate is an intelligent web-based platform designed to optimize resumes, analyze skill gaps, and empower job seekers—especially students and freshers—to confidently apply for jobs that match their profiles. It compares a resume against any given job description, performs deep section-by-section analysis, detects missing or mismatched skills, and suggests actionable improvements such as projects, courses, or certifications.

The platform also includes an integrated job search and apply feature to streamline the entire process from resume enhancement to job application—all in one place.

## 🎯 Problem Statement
In today’s competitive job market, job seekers often apply to multiple job openings daily, yet struggle to understand why they aren’t getting shortlisted. One of the most common issues, especially for students and freshers, is that their resume doesn’t align with the job description (JD).
Many rely on manual feedback from seniors or mentors—resources that aren't always available. This results in wasted time, missed opportunities, and low confidence.

## 🚀 The Solution: ResuMate
ResuMate solves this problem by using LLMs (Gemini by Google) to analyze resumes and JDs intelligently, highlight what’s missing, and suggest how to improve the resume before applying—maximizing the chances of getting shortlisted.

### Users can:

1. Paste or upload their resume

2. Input any job description (JD)

3. Instantly receive a detailed AI-generated analysis

4. See matched and unmatched skills

5. Get suggestions on projects and courses to bridge skill gaps

6. Download a PDF report for future reference

7. Search and apply to jobs directly from the platform

8. Track previous analysis records for learning and improvement

## 💡 Key Features

1.  Paste or Upload Resume (PDF/text supported)

2. Job Description Input

3. AI-Powered Deep Analysis:

  * Section-by-section comparison (Education, Skills, Projects, Experience)

  * Similarity score

  * Matched vs unmatched skills

  * Courses to learn

  * Projects to build

  * Skills to improve

4. Downloadable PDF Report

5. History Tracking:

  * View previous resume analysis records

6. Built-in Job Search:

  * Search real job openings

  * Apply directly through the platform

7. Secure Firebase Authentication
   

## 🌟 Why ResuMate Matters

  1. For Students and Freshers: It acts as a virtual mentor that tells you whether your resume is aligned with your career goals.

  2. Saves Time: Instead of blindly applying to 50+ jobs, users can tailor their resume in minutes and apply strategically.

  3. Promotes Learning: Suggests personalized upskilling paths.

  4. Builds Confidence: Encourages users with motivational feedback so they stay positive during the job hunt.
     

## 🧠 How It Works

  1. User logs in via Gmail using Firebase Auth

  2. Uploads or pastes their resume

  3. Inputs the Job Description

  4. Flask backend sends data to Gemini LLM, which:

  5. Performs deep semantic comparison

  6. Scores the resume for similarity

  7. Detects skill matches and gaps

  8. Suggests real improvements (skills, courses, projects)

  9. Generates a motivational message


  10. Response is sent to frontend and displayed with interactive UI

  11. User can download report as PDF or save it to history

User can search for jobs and apply directly via the app
